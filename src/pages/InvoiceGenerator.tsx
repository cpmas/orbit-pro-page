import { useState, useRef } from "react";
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
import { Plus, Trash2, Download, Calculator, Upload, Mail, X } from "lucide-react";
import InvoicePreview from "@/components/InvoicePreview";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    heading: z.string().optional(),
    description: z.string().min(1, "Description is required"),
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
  const [invoiceImage, setInvoiceImage] = useState<string | null>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const invoiceRef = useRef<HTMLDivElement>(null);

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
      items: [{ heading: "", description: "", quantity: 1, rate: 0 }],
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

  const onSubmit = async (data: InvoiceFormData) => {
    setIsGeneratingPdf(true);
    
    if (!invoiceRef.current) {
      setIsGeneratingPdf(false);
      return;
    }

    try {
      // Import html2canvas dynamically
      const html2canvas = (await import('html2canvas')).default;
      
      // Generate high-quality canvas of the invoice
      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        width: invoiceRef.current.scrollWidth,
        height: invoiceRef.current.scrollHeight,
      });
      
      // Convert canvas to image
      const imageUrl = canvas.toDataURL('image/png', 1.0);
      setInvoiceImage(imageUrl);
      setShowPreview(true);
    } catch (error) {
      console.error('Error generating invoice image:', error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleDownloadPdf = async () => {
    if (!invoiceImage) return;
    
    try {
      // Import jsPDF dynamically
      const { jsPDF } = await import('jspdf');
      
      // Create new image element to get actual dimensions
      const img = new Image();
      img.onload = () => {
        // Create PDF
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });
        
        // Calculate dimensions to fit A4
        const pdfWidth = 210; // A4 width in mm
        const pdfHeight = 297; // A4 height in mm
        
        // Calculate image dimensions maintaining aspect ratio
        const imgAspectRatio = img.width / img.height;
        const pdfAspectRatio = pdfWidth / pdfHeight;
        
        let imgWidth, imgHeight;
        if (imgAspectRatio > pdfAspectRatio) {
          // Image is wider, fit to width
          imgWidth = pdfWidth;
          imgHeight = pdfWidth / imgAspectRatio;
        } else {
          // Image is taller, fit to height
          imgHeight = pdfHeight;
          imgWidth = pdfHeight * imgAspectRatio;
        }
        
        // Center the image
        const x = (pdfWidth - imgWidth) / 2;
        const y = (pdfHeight - imgHeight) / 2;
        
        // Add image to PDF with no margins
        pdf.addImage(invoiceImage, 'PNG', 0, 0, pdfWidth, imgHeight);
        
        // Download PDF
        pdf.save(`invoice-${form.getValues().invoiceNumber}.pdf`);
      };
      
      img.src = invoiceImage;
    } catch (error) {
      console.error('Error creating PDF:', error);
    }
  };

  const handleEmailInvoice = () => {
    const data = form.getValues();
    const clientEmail = data.clientEmail;
    const subject = `Invoice ${data.invoiceNumber} from ${data.businessName}`;
    const body = `Hi ${data.clientName},

Please find attached invoice ${data.invoiceNumber} for the total amount of $${total.toFixed(2)}.

${data.paymentTerms ? `Payment Terms: ${data.paymentTerms}` : ''}

Best regards,
${data.businessName}`;
    
    const mailtoLink = `mailto:${clientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  if (showPreview && invoiceImage) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 print:hidden">
            <Button variant="outline" onClick={() => {
              setShowPreview(false);
              setInvoiceImage(null);
            }} className="mb-4">
              ← Back to Edit
            </Button>
          </div>
          
          {/* Invoice Image Viewer */}
          <div className="bg-white rounded-lg shadow-xl p-4 mb-8">
            <div className="flex justify-center">
              <img 
                src={invoiceImage} 
                alt="Invoice Preview" 
                className="max-w-full h-auto shadow-lg rounded"
                style={{ maxHeight: '80vh' }}
              />
            </div>
          </div>
          
          {/* Action Buttons - below PDF */}
          <div className="flex flex-col gap-3 max-w-sm mx-auto print:hidden">
            <Button onClick={handleDownloadPdf} className="flex items-center justify-center gap-2" size="lg">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
            {form.getValues().clientEmail && (
              <Button variant="outline" onClick={handleEmailInvoice} className="flex items-center justify-center gap-2" size="lg">
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
            )}
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
                          <FormLabel>Business Name</FormLabel>
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
                          <FormLabel>Address (Optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your business address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="businessPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="0400 000 000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="businessEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" {...field} />
                            </FormControl>
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
                          <FormLabel>ABN (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="12 345 678 901" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Logo Upload */}
                    <div>
                      <label className="block text-sm font-medium mb-2">Business Logo (Optional)</label>
                      <div className="flex items-center gap-4">
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
                          <FormLabel>Client Name</FormLabel>
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
                          <FormLabel>Client Address (Optional)</FormLabel>
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
                          <FormLabel>Client Email (Optional)</FormLabel>
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
                            <FormLabel>Invoice Number</FormLabel>
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
                            <FormLabel>Invoice Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="dueDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Due Date (Optional)</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
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
                        onClick={() => append({ heading: "", description: "", quantity: 1, rate: 0 })}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Item
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {fields.map((field, index) => (
                      <div key={field.id} className="space-y-4 p-4 border rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <FormField
                             control={form.control}
                             name={`items.${index}.heading`}
                             render={({ field }) => (
                               <FormItem>
                                 <FormLabel>Item</FormLabel>
                                 <FormControl>
                                   <Input placeholder="Service heading" {...field} />
                                 </FormControl>
                                 <FormMessage />
                               </FormItem>
                             )}
                           />
                           <div className="flex justify-end items-center">
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
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                          <div className="md:col-span-6">
                             <FormField
                               control={form.control}
                               name={`items.${index}.description`}
                               render={({ field }) => (
                                 <FormItem>
                                   <FormLabel>Description (Optional)</FormLabel>
                                   <FormControl>
                                     <Textarea placeholder="Description of work" {...field} />
                                   </FormControl>
                                   <FormMessage />
                                 </FormItem>
                               )}
                             />
                          </div>
                        <div className="md:col-span-2">
                          <FormField
                            control={form.control}
                            name={`items.${index}.quantity`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Qty</FormLabel>
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
                        <div className="md:col-span-2">
                          <FormField
                            control={form.control}
                            name={`items.${index}.rate`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Rate ($)</FormLabel>
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
                          <FormLabel>Bank Account Name (Optional)</FormLabel>
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
                            <FormLabel>BSB (Optional)</FormLabel>
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
                            <FormLabel>Account Number (Optional)</FormLabel>
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

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg" 
                  disabled={isGeneratingPdf}
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  {isGeneratingPdf ? 'Generating PDF...' : 'Generate Invoice'}
                </Button>
              </form>
            </Form>
          </div>

          {/* Hidden Invoice Preview for Image Generation */}
          <div ref={invoiceRef} className="fixed -left-[200%] top-0 bg-white" style={{ width: '794px' }}>
            <div className="p-12 bg-white" style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', lineHeight: '1.4' }}>
              {/* Header */}
              <div className="flex justify-between items-start mb-12 border-b border-gray-300 pb-6">
                <div>
                  <h1 className="text-5xl font-light text-gray-800 mb-6 tracking-wide">INVOICE</h1>
                  <div className="space-y-2 text-base">
                    <div className="flex">
                      <span className="font-medium w-24 text-gray-600">Invoice #:</span>
                      <span className="font-semibold">{form.getValues().invoiceNumber || "INV-001"}</span>
                    </div>
                    <div className="flex">
                      <span className="font-medium w-24 text-gray-600">Date:</span>
                      <span>{form.getValues().invoiceDate ? new Date(form.getValues().invoiceDate).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }) : "Today"}</span>
                    </div>
                    {form.getValues().dueDate && (
                      <div className="flex">
                        <span className="font-medium w-24 text-gray-600">Due Date:</span>
                        <span>{new Date(form.getValues().dueDate).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-64 h-40 flex items-center justify-end mb-4">
                    {logoFile ? (
                      <img 
                        src={logoFile} 
                        alt="Company Logo" 
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <div className="text-2xl font-semibold text-gray-800 text-center">
                        {form.getValues().businessName || 'COMPANY NAME'}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Business and Client Info */}
              <div className="grid grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="font-semibold mb-4 text-gray-700 uppercase text-sm tracking-wide">From</h3>
                  <div className="space-y-2 text-sm">
                    <div className="font-bold text-lg">{form.getValues().businessName || 'Your Business Name'}</div>
                    {form.getValues().businessAddress && (
                      <div className="text-gray-700 whitespace-pre-line">{form.getValues().businessAddress}</div>
                    )}
                    {form.getValues().abn && (
                      <div><span className="font-medium text-gray-600">ABN:</span> {form.getValues().abn}</div>
                    )}
                    {form.getValues().businessEmail && (
                      <div><span className="font-medium text-gray-600">Email:</span> {form.getValues().businessEmail}</div>
                    )}
                    {form.getValues().businessPhone && (
                      <div><span className="font-medium text-gray-600">Phone:</span> {form.getValues().businessPhone}</div>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-gray-700 uppercase text-sm tracking-wide">To</h3>
                  <div className="space-y-2 text-sm">
                    <div className="font-bold text-lg">{form.getValues().clientName || "Client Name"}</div>
                    {form.getValues().clientAddress && (
                      <div className="text-gray-700 whitespace-pre-line">{form.getValues().clientAddress}</div>
                    )}
                    {form.getValues().clientEmail && <div className="text-gray-700">{form.getValues().clientEmail}</div>}
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-300 mb-16"></div>

              {/* Items Table */}
              <div className="mb-16">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-3 text-left font-semibold text-gray-700 uppercase text-sm tracking-wide">INVOICE ITEMS</th>
                      <th className="py-3 text-center font-semibold text-gray-700 uppercase text-sm tracking-wide w-20">QTY</th>
                      <th className="py-3 text-right font-semibold text-gray-700 uppercase text-sm tracking-wide w-32">RATE</th>
                      <th className="py-3 text-right font-semibold text-gray-700 uppercase text-sm tracking-wide w-36">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(form.getValues().items || []).map((item, index) => (
                      <tr key={index}>
                        <td className="py-3 pr-4">
                          {item.heading && (
                            <div className="font-bold text-sm mb-1 text-gray-800">{item.heading}</div>
                          )}
                          <div className="font-medium text-sm whitespace-pre-line">{item.description || "Description"}</div>
                        </td>
                        <td className="py-3 text-center text-sm">{item.quantity || 0}</td>
                        <td className="py-3 text-right text-sm break-words">{new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(item.rate || 0)}</td>
                        <td className="py-3 text-right font-semibold text-sm">{new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format((item.quantity || 0) * (item.rate || 0))}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals Section */}
              <div className="flex justify-end mb-16">
                <div className="w-64">
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 uppercase text-sm tracking-wide">Invoice Summary</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-medium">{new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(subtotal)}</span>
                    </div>
                    {form.getValues().includeGst && gst > 0 && (
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">GST (10%):</span>
                        <span className="font-medium">{new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(gst)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-base font-bold pt-3 mt-3 border-t border-gray-300">
                      <span>TOTAL:</span>
                      <span>{new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(total)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-300 mb-16"></div>

              {/* Payment Details and Terms */}
              <div className="grid grid-cols-2 gap-8 mb-16">
                {(form.getValues().bankAccountName || form.getValues().bankBsb || form.getValues().bankAccountNumber) && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="mb-3">
                      <h3 className="font-semibold text-gray-700 uppercase text-sm tracking-wide">Payment Details</h3>
                    </div>
                    <div className="text-sm space-y-1">
                      {form.getValues().bankAccountName && <div><span className="font-medium">Account:</span> {form.getValues().bankAccountName}</div>}
                      {form.getValues().bankBsb && <div><span className="font-medium">BSB:</span> {form.getValues().bankBsb}</div>}
                      {form.getValues().bankAccountNumber && <div><span className="font-medium">Account:</span> {form.getValues().bankAccountNumber}</div>}
                    </div>
                  </div>
                )}
                {form.getValues().paymentTerms && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="mb-3">
                      <h3 className="font-semibold text-gray-700 uppercase text-sm tracking-wide">Payment Terms</h3>
                    </div>
                    <div className="text-sm whitespace-pre-wrap text-gray-700 leading-relaxed">{form.getValues().paymentTerms}</div>
                  </div>
                )}
              </div>

              {/* Additional Notes */}
              {form.getValues().notes && (
                <div className="mb-8">
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 uppercase text-sm tracking-wide">Additional Notes</h3>
                  </div>
                  <div className="text-sm whitespace-pre-wrap text-gray-700 leading-relaxed">{form.getValues().notes}</div>
                </div>
              )}
            </div>
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