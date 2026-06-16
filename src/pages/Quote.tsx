import { useSearchParams } from 'react-router-dom';
import { UploadCloud } from 'lucide-react';

export default function Quote() {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product') || '';

  return (
    <div className="bg-rcq-gray min-h-screen pb-20">
      <div className="bg-rcq-navy py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Request a Quote</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          Submit your requirements and our global sourcing experts will get back to you with competitive pricing within 24 hours.
        </p>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <form className="space-y-8">
            
            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-bold text-rcq-navy mb-6 border-b pb-2">1. Your Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone / WhatsApp *</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Country / Region *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal" />
                </div>
              </div>
            </div>

            {/* Requirement Details */}
            <div>
              <h3 className="text-xl font-bold text-rcq-navy mb-6 border-b pb-2">2. Product Requirements</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Product Name or CAS No. *</label>
                  <input type="text" defaultValue={prefilledProduct} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Required Quantity *</label>
                  <input type="text" placeholder="e.g., 20 MT, 1 FCL" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Target Application / Industry</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Additional Specifications or Notes</label>
                <textarea rows={4} placeholder="Purity requirements, packaging preference, target port, etc." className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Upload Spec Sheet (Optional)</label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                   <UploadCloud size={32} className="mx-auto text-slate-400 group-hover:text-rcq-teal mb-3 transition-colors" />
                   <p className="text-sm text-slate-600 font-medium">Click to upload or drag and drop</p>
                   <p className="text-xs text-slate-400 mt-1">PDF, DOC, JPG up to 10MB</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <p className="text-xs text-slate-500 max-w-md">By submitting this form, you agree to our privacy policy and consent to be contacted regarding this inquiry.</p>
              <button type="button" className="px-8 py-4 bg-rcq-teal hover:bg-rcq-teal-dark text-white rounded-lg font-bold transition-all shadow-lg text-lg">
                Submit Request
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
