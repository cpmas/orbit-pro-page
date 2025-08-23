import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Plus, Trash2, Download, Calculator, Upload, X } from "lucide-react";
import InvoicePreview from "@/components/InvoicePreview";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import html2pdf from "html2pdf.js";

const invoiceSchema = z.object({
  // Business details
  businessName: z.string().min(1, "Business name is required"),
  businessAddress: z.string().optional(),
  businessPhone: z.string().optional(),
  businessEmail: z.string().email().optional().or(z.literal("")),
  abn: z.string().optional(),
  
  // Client details
  clientName: z.string().min(1, "Client name is required"),
  clientAddress: z.string().optional(),
  clientEmail: z.string().email("Valid email is required").optional().or(z.literal("")),
  
  // Invoice details
  invoiceNumber: z.string().min(1, "Invoice number is required"),
  invoiceDate: z.string().min(1, "Invoice date is required"),
  dueDate: z.string().optional(),
  
  // Line items
  items: z.array(z.object({
    heading: z.string().min(1, "Item heading is required"),
    description: z.string().optional(),
    quantity: z.number().min(0.01, "Quantity must be greater than 0"),
    rate: z.number().min(0.01, "Rate must be greater than 0"),
  })).min(1, "At least one item is required"),
  
  // Additional fields
  notes: z.string().optional(),
  paymentTerms: z.string().optional(),
  includeGst: z.boolean().default(true),
  
  // Bank details
  bankAccountName: z.string().optional(),
  bankBsb: z.string().optional(),
  bankAccountNumber: z.string().optional(),
});

type InvoiceFormData = z.infer<typeof invoiceSchema>;

const InvoiceGenerator = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [logoFile, setLogoFile] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const form = useForm<InvoiceFormData>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      businessName: "",
      businessAddress: "",
      businessPhone: "",
      businessEmail: "",
      abn: "",
      clientName: "",
      clientAddress: "",
      clientEmail: "",
      invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
      invoiceDate: new Date().toISOString().split('T')[0],
      dueDate: "",
      items: [{ heading: "", description: "", quantity: 1, rate: null as any }],
      notes: "",
      paymentTerms: "Payment due within 30 days",
      includeGst: true,
      bankAccountName: "",
      bankBsb: "",
      bankAccountNumber: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  const watchedItems = form.watch("items");
  const includeGst = form.watch("includeGst");
  const subtotal = watchedItems.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
  const gst = includeGst ? subtotal * 0.1 : 0; // 10% GST for Australia
  const total = subtotal + gst;

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoFile(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generatePdfPreview = async () => {
    setIsGeneratingPdf(true);
    try {
      const element = document.getElementById('invoice-for-pdf');
      if (!element) return;

      const opt = {
        margin: 0.5,
        filename: `invoice-${form.getValues().invoiceNumber}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

      const pdf = await html2pdf().set(opt).from(element).outputPdf('blob');
      const url = URL.createObjectURL(pdf);
      setPdfUrl(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const onSubmit = (data: InvoiceFormData) => {
    setShowPreview(true);
  };

  const handleDownload = async () => {
    const element = document.getElementById('invoice-for-pdf');
    if (!element) return;

    const opt = {
      margin: 0.5,
      filename: `invoice-${form.getValues().invoiceNumber}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    await html2pdf().set(opt).from(element).save();
  };

  useEffect(() => {
    if (showPreview && !pdfUrl && !isGeneratingPdf) {
      generatePdfPreview();
    }
  }, [showPreview]);

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  if (showPreview) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            {/* Mobile: Stack buttons vertically */}
            <div className="block md:hidden space-y-4">
              <Button variant="outline" onClick={() => {
                setShowPreview(false);
                if (pdfUrl) {
                  URL.revokeObjectURL(pdfUrl);
                  setPdfUrl(null);
                }
              }}>
                ← Back to Edit
              </Button>
              <div className="flex gap-2">
                <Button onClick={handleDownload} className="flex-1 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            </div>
            
            {/* Desktop: Keep original layout */}
            <div className="hidden md:flex justify-between items-center">
              <Button variant="outline" onClick={() => {
                setShowPreview(false);
                if (pdfUrl) {
                  URL.revokeObjectURL(pdfUrl);
                  setPdfUrl(null);
                }
              }}>
                ← Back to Edit
              </Button>
              <div className="flex gap-2">
                <Button onClick={handleDownload} className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
          
          {/* PDF Preview */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
              {isGeneratingPdf ? (
                <div className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Generating PDF preview...</p>
                  </div>
                </div>
              ) : pdfUrl ? (
                <iframe
                  src={pdfUrl}
                  className="w-full h-[60vh] md:h-[80vh] border-0"
                  title="Invoice PDF Preview"
                />
              ) : (
                <div className="flex items-center justify-center h-96">
                  <p className="text-muted-foreground">Failed to generate PDF preview</p>
                </div>
              )}
            </div>
          </div>

          {/* Hidden element for PDF generation */}
          <div className="hidden">
            <div id="invoice-for-pdf">
              <InvoicePreview 
                data={{...form.getValues(), logo: logoFile}} 
                subtotal={subtotal} 
                gst={gst} 
                total={total} 
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Free Invoice Generator</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create professional invoices instantly. No account required, completely free for Australian tradies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Form Section */}
          <div className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Business Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      Your Business Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Business Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="businessAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your business address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="businessPhone"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex items-center gap-4 md:block">
                              <FormLabel className="md:mb-2 min-w-[80px] text-sm">Phone</FormLabel>
                              <FormControl className="flex-1 md:w-full">
                                <Input placeholder="0400 000 000" {...field} />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="businessEmail"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex items-center gap-4 md:block">
                              <FormLabel className="md:mb-2 min-w-[80px] text-sm">Email</FormLabel>
                              <FormControl className="flex-1 md:w-full">
                                <Input placeholder="your@email.com" {...field} />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="abn"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center gap-4 md:block">
                            <FormLabel className="md:mb-2 min-w-[80px] text-sm">ABN</FormLabel>
                            <FormControl className="flex-1 md:w-full">
                              <Input placeholder="12 345 678 901" {...field} />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Logo Upload */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 space-y-2 sm:space-y-0">
                      <label className="text-sm font-medium sm:w-24 sm:flex-shrink-0">Business Logo</label>
                      <div className="flex items-center gap-4 flex-1">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => document.getElementById('logo-upload')?.click()}
                          className="flex items-center gap-2"
                        >
                          <Upload className="w-4 h-4" />
                          Upload Logo
                        </Button>
                        <input
                          id="logo-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          className="hidden"
                        />
                        {logoFile && (
                          <div className="flex items-center gap-2">
                            <img src={logoFile} alt="Logo preview" className="w-8 h-8 object-contain" />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => setLogoFile(null)}
                            >
                              Remove
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Client Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Client Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="clientName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Client Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Client Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="clientAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Client Address</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Client address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="clientEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Client Email</FormLabel>
                          <FormControl>
                            <Input placeholder="client@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Invoice Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Invoice Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="invoiceNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Invoice Number *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="invoiceDate"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex items-center gap-4 md:block">
                              <FormLabel className="md:mb-2 min-w-[100px] text-sm">Invoice Date *</FormLabel>
                              <FormControl className="flex-1 md:w-full">
                                <Input type="date" {...field} />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="dueDate"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex items-center gap-4 md:block">
                              <FormLabel className="md:mb-2 min-w-[100px] text-sm">Due Date</FormLabel>
                              <FormControl className="flex-1 md:w-full">
                                <Input type="date" {...field} />
                              </FormControl>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Line Items */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Line Items
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => append({ heading: "", description: "", quantity: 1, rate: null as any })}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Item
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {fields.map((field, index) => (
                      <div key={field.id} className="relative space-y-4 p-4 border rounded-lg">
                        {/* Delete button positioned at top right */}
                        <div className="absolute top-2 right-2">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => remove(index)}
                            disabled={fields.length === 1}
                            className="text-muted-foreground hover:text-destructive h-8 w-8 p-0"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        {/* Item heading */}
                        <div className="pr-10">
                          <FormField
                            control={form.control}
                            name={`items.${index}.heading`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Item *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Service heading" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                          <div className="md:col-span-6">
                             <FormField
                               control={form.control}
                               name={`items.${index}.description`}
                               render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Description</FormLabel>
                                  <FormControl>
                                    <Textarea placeholder="Description of work" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                               )}
                             />
                          </div>
                          
                          {/* Mobile: Qty and Rate side by side */}
                          <div className="md:hidden grid grid-cols-3 gap-2 col-span-1">
                            <FormField
                              control={form.control}
                              name={`items.${index}.quantity`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Qty *</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      step="0.01"
                                      {...field}
                                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`items.${index}.rate`}
                              render={({ field }) => (
                                <FormItem className="col-span-2">
                                  <FormLabel>Rate ($) *</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      step="0.01"
                                      {...field}
                                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          {/* Desktop: Original layout */}
                          <div className="hidden md:block md:col-span-2">
                            <FormField
                              control={form.control}
                              name={`items.${index}.quantity`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Qty *</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      step="0.01"
                                      {...field}
                                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="hidden md:block md:col-span-2">
                            <FormField
                              control={form.control}
                              name={`items.${index}.rate`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Rate ($) *</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      step="0.01"
                                      {...field}
                                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          {/* Total amount */}
                          <div className="md:col-span-1 text-right font-medium self-center">
                            ${((watchedItems[index]?.quantity || 0) * (watchedItems[index]?.rate || 0)).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <Separator />
                    
                    {/* GST Toggle */}
                    <div className="flex items-center justify-between">
                      <div>
                        <FormLabel>Include GST (10%)</FormLabel>
                        <p className="text-sm text-muted-foreground">Toggle GST calculation for this invoice</p>
                      </div>
                      <FormField
                        control={form.control}
                        name="includeGst"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Separator />
                    
                    {/* Totals */}
                    <div className="space-y-2 ml-auto max-w-sm">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      {includeGst && (
                        <div className="flex justify-between">
                          <span>GST (10%):</span>
                          <span>${gst.toFixed(2)}</span>
                        </div>
                      )}
                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="bankAccountName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bank Account Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Business Account" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="bankBsb"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>BSB</FormLabel>
                            <FormControl>
                              <Input placeholder="123-456" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="bankAccountNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Account Number</FormLabel>
                            <FormControl>
                              <Input placeholder="123456789" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="paymentTerms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Payment Terms</FormLabel>
                          <FormControl>
                            <Input placeholder="Payment due within 30 days" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Notes</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Additional notes..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                <Button type="submit" className="w-full" size="lg">
                  <Calculator className="w-4 h-4 mr-2" />
                  Generate Invoice
                </Button>
              </form>
            </Form>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="py-8">
                <h2 className="text-2xl font-bold mb-4">Need More Features?</h2>
                <p className="text-muted-foreground mb-6">
                  Save client details, create templates, track payments, and more with Orbit Pro
                </p>
                <Button variant="default" size="lg">
                  Upgrade to Orbit Pro
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InvoiceGenerator;