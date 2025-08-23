import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface InvoiceData {
  businessName?: string;
  businessAddress?: string;
  businessPhone?: string;
  businessEmail?: string;
  abn?: string;
  clientName?: string;
  clientAddress?: string;
  clientEmail?: string;
  invoiceNumber?: string;
  invoiceDate?: string;
  dueDate?: string;
  items?: Array<{
    description?: string;
    quantity?: number;
    rate?: number;
  }>;
  notes?: string;
  paymentTerms?: string;
}

interface InvoicePreviewProps {
  data: InvoiceData;
  subtotal: number;
  gst: number;
  total: number;
}

const InvoicePreview = ({ data, subtotal, gst, total }: InvoicePreviewProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="max-w-4xl mx-auto bg-background shadow-card">
      <CardContent className="p-8 print:p-0">
        {/* Header */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Info */}
            <div>
              <h1 className="text-3xl font-bold text-primary mb-4">{data.businessName || "Your Business"}</h1>
              <div className="text-muted-foreground space-y-1">
                <div className="whitespace-pre-line">{data.businessAddress || "Your Address"}</div>
                <div>Phone: {data.businessPhone || "Your Phone"}</div>
                <div>Email: {data.businessEmail || "your@email.com"}</div>
                {data.abn && <div>ABN: {data.abn}</div>}
              </div>
            </div>
            
            {/* Invoice Details */}
            <div className="text-right">
              <h2 className="text-2xl font-bold text-foreground mb-4">INVOICE</h2>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-muted-foreground">Invoice #:</span>
                  <span className="font-medium">{data.invoiceNumber || "INV-001"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">{data.invoiceDate ? formatDate(data.invoiceDate) : "Today"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-muted-foreground">Due Date:</span>
                  <span className="font-medium">{data.dueDate ? formatDate(data.dueDate) : "30 days"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bill To */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-3">Bill To:</h3>
          <div className="text-muted-foreground">
            <div className="font-medium text-foreground">{data.clientName || "Client Name"}</div>
            <div className="whitespace-pre-line">{data.clientAddress || "Client Address"}</div>
            {data.clientEmail && <div>{data.clientEmail}</div>}
          </div>
        </div>

        {/* Line Items */}
        <div className="mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-muted-foreground font-medium">Description</th>
                  <th className="text-right py-3 text-muted-foreground font-medium w-20">Qty</th>
                  <th className="text-right py-3 text-muted-foreground font-medium w-24">Rate</th>
                  <th className="text-right py-3 text-muted-foreground font-medium w-24">Amount</th>
                </tr>
              </thead>
              <tbody>
                {(data.items || []).map((item, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 text-foreground">
                      <div className="whitespace-pre-line">{item.description || "Description"}</div>
                    </td>
                    <td className="py-4 text-right text-muted-foreground">
                      {item.quantity || 0}
                    </td>
                    <td className="py-4 text-right text-muted-foreground">
                      ${(item.rate || 0).toFixed(2)}
                    </td>
                    <td className="py-4 text-right font-medium text-foreground">
                      ${((item.quantity || 0) * (item.rate || 0)).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Totals */}
        <div className="mb-8">
          <div className="ml-auto max-w-sm space-y-2">
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">Subtotal:</span>
              <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-muted-foreground">GST (10%):</span>
              <span className="font-medium text-foreground">${gst.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between py-2">
              <span className="text-lg font-semibold text-foreground">Total:</span>
              <span className="text-lg font-bold text-primary">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="space-y-4 text-sm text-muted-foreground">
          {data.paymentTerms && (
            <div>
              <h4 className="font-medium text-foreground mb-1">Payment Terms:</h4>
              <p>{data.paymentTerms}</p>
            </div>
          )}
          
          {data.notes && (
            <div>
              <h4 className="font-medium text-foreground mb-1">Notes:</h4>
              <p className="whitespace-pre-line">{data.notes}</p>
            </div>
          )}
          
          <div className="pt-4 border-t border-border">
            <p className="text-center">Thank you for your business!</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvoicePreview;