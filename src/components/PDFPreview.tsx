import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Download, Send, Loader2 } from "lucide-react";
import InvoicePreview from "./InvoicePreview";
import { useToast } from "@/hooks/use-toast";
import html2pdf from 'html2pdf.js';

interface PDFPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  subtotal: number;
  gst: number;
  total: number;
  onDownload?: () => void;
  onSendEmail?: () => void;
}

export const PDFPreview = ({ 
  isOpen, 
  onClose, 
  data, 
  subtotal,
  gst,
  total,
  onDownload, 
  onSendEmail 
}: PDFPreviewProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const element = document.getElementById('invoice-pdf-preview');
      if (!element) {
        throw new Error('Invoice element not found');
      }

      const opt = {
        margin: 0,
        filename: `Invoice-${data.invoiceNumber || 'Preview'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

      await html2pdf().set(opt).from(element).save();
      
      toast({
        title: "PDF Downloaded",
        description: "Invoice has been downloaded as PDF.",
      });
      onDownload?.();
    } catch (error: any) {
      toast({
        title: "Error generating PDF",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSendEmail = async () => {
    if (!data.clientEmail) {
      toast({
        title: "No Email Address",
        description: "This client doesn't have an email address on file.",
        variant: "destructive",
      });
      return;
    }

    const subject = `Invoice ${data.invoiceNumber} from ${data.businessName}`;
    const body = `Hi ${data.clientName},

Please find attached invoice ${data.invoiceNumber} for the total amount of $${total.toFixed(2)}.

${data.paymentTerms ? `Payment Terms: ${data.paymentTerms}` : ''}

Best regards,
${data.businessName}`;
    
    const mailtoLink = `mailto:${data.clientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Opened",
      description: "Your email client has been opened with the invoice details.",
    });
    onSendEmail?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle>
              Invoice Preview - {data.invoiceNumber || 'Draft'}
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* PDF Preview Area */}
        <div className="flex-1 overflow-auto p-6 pt-0">
          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-[794px] w-full">
              {/* A4 aspect ratio container (210mm x 297mm = 1:1.414) */}
              <div 
                className="relative w-full bg-white"
                style={{ 
                  aspectRatio: '210/297',
                  minHeight: '400px'
                }}
              >
                <div 
                  id="invoice-pdf-preview" 
                  className="absolute inset-0 origin-top-left"
                  style={{
                    transform: 'scale(0.75)',
                    transformOrigin: 'top left',
                    width: '133.33%', // Compensate for 0.75 scale (1/0.75 = 1.333)
                    height: '133.33%'
                  }}
                >
                  <InvoicePreview 
                    data={data} 
                    subtotal={subtotal} 
                    gst={gst} 
                    total={total} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-0 border-t border-border">
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={handleDownload}
              disabled={loading}
              className="flex-1"
            >
              {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Download className="w-4 h-4 mr-2" />}
              Download PDF
            </Button>
            
            <Button 
              variant="default" 
              onClick={handleSendEmail}
              disabled={loading || !data.clientEmail}
              className="flex-1"
            >
              {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
              Send via Email
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};