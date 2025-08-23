import { Card, CardContent } from "@/components/ui/card";

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
  logo?: string;
  includeGst?: boolean;
  bankAccountName?: string;
  bankBsb?: string;
  bankAccountNumber?: string;
}

interface InvoicePreviewProps {
  data: InvoiceData;
  subtotal: number;
  gst: number;
  total: number;
}

const InvoicePreview = ({ data, subtotal, gst, total }: InvoicePreviewProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card className="max-w-4xl mx-auto bg-white shadow-card">
      <CardContent 
        className="p-12 print:p-8 print:mx-8" 
        style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', lineHeight: '1.4' }}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-12 border-b border-gray-300 pb-6">
          <div>
            <h1 className="text-5xl font-light text-gray-800 mb-6 tracking-wide">INVOICE</h1>
            <div className="space-y-2 text-base">
              <div className="flex">
                <span className="font-medium w-24 text-gray-600">Invoice #:</span>
                <span className="font-semibold">{data.invoiceNumber || "INV-001"}</span>
              </div>
              <div className="flex">
                <span className="font-medium w-24 text-gray-600">Date:</span>
                <span>{data.invoiceDate ? formatDate(data.invoiceDate) : "Today"}</span>
              </div>
              {data.dueDate && (
                <div className="flex">
                  <span className="font-medium w-24 text-gray-600">Due Date:</span>
                  <span>{formatDate(data.dueDate)}</span>
                </div>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="w-64 h-40 flex items-center justify-end mb-4">
              {data.logo ? (
                <img 
                  src={data.logo} 
                  alt="Company Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="text-2xl font-semibold text-gray-800 text-center">
                  {data.businessName || 'COMPANY NAME'}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Business and Client Info */}
        <div className="grid grid-cols-2 gap-12 mb-16">
          {/* Invoice from */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-700 uppercase text-sm tracking-wide">From</h3>
            <div className="space-y-2 text-sm">
              <div className="font-bold text-lg">{data.businessName || 'Your Business Name'}</div>
              {data.businessAddress && (
                <div className="text-gray-700 whitespace-pre-line">{data.businessAddress}</div>
              )}
              {data.abn && (
                <div><span className="font-medium text-gray-600">ABN:</span> {data.abn}</div>
              )}
              {data.businessEmail && (
                <div><span className="font-medium text-gray-600">Email:</span> {data.businessEmail}</div>
              )}
              {data.businessPhone && (
                <div><span className="font-medium text-gray-600">Phone:</span> {data.businessPhone}</div>
              )}
            </div>
          </div>

          {/* Invoice to */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-700 uppercase text-sm tracking-wide">To</h3>
            <div className="space-y-2 text-sm">
              <div className="font-bold text-lg">{data.clientName || "Client Name"}</div>
              {data.clientAddress && (
                <div className="text-gray-700 whitespace-pre-line">{data.clientAddress}</div>
              )}
              {data.clientEmail && <div className="text-gray-700">{data.clientEmail}</div>}
            </div>
          </div>
        </div>

        {/* Separator after Business/Client Details */}
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
              {(data.items || []).map((item, index) => (
                <tr key={index}>
                  <td className="py-3 pr-4">
                    <div className="font-medium text-sm whitespace-pre-line">{item.description || "Description"}</div>
                  </td>
                  <td className="py-3 text-center text-sm">{item.quantity || 0}</td>
                  <td className="py-3 text-right text-sm break-words">{formatCurrency(item.rate || 0)}</td>
                  <td className="py-3 text-right font-semibold text-sm">{formatCurrency((item.quantity || 0) * (item.rate || 0))}</td>
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
                <span className="font-medium">{formatCurrency(subtotal)}</span>
              </div>
              {data.includeGst && gst > 0 && (
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">GST (10%):</span>
                  <span className="font-medium">{formatCurrency(gst)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold pt-3 mt-3 border-t border-gray-300">
                <span>TOTAL:</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator before Payment Details */}
        <div className="border-b border-gray-300 mb-16"></div>

        {/* Payment Details and Terms Side by Side */}
        <div className="grid grid-cols-2 gap-8 mb-16">
          {/* Payment Details */}
          {(data.bankAccountName || data.bankBsb || data.bankAccountNumber) && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 uppercase text-sm tracking-wide">Payment Details</h3>
              </div>
              <div className="text-sm space-y-2">
                {data.bankAccountName && <div><span className="font-medium">Account:</span> {data.bankAccountName}</div>}
                {data.bankBsb && <div><span className="font-medium">BSB:</span> {data.bankBsb}</div>}
                {data.bankAccountNumber && <div><span className="font-medium">Account:</span> {data.bankAccountNumber}</div>}
              </div>
            </div>
          )}

          {/* Payment Terms */}
          {data.paymentTerms && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 uppercase text-sm tracking-wide">Payment Terms</h3>
              </div>
              <div className="text-sm whitespace-pre-wrap text-gray-700 leading-relaxed">{data.paymentTerms}</div>
            </div>
          )}
        </div>

        {/* Additional Notes */}
        {data.notes && (
          <div className="mb-8">
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 uppercase text-sm tracking-wide">Additional Notes</h3>
            </div>
            <div className="text-sm whitespace-pre-wrap text-gray-700 leading-relaxed">{data.notes}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InvoicePreview;