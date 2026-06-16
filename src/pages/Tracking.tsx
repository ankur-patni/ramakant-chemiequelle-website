import { PackageSearch } from 'lucide-react';

export default function Tracking() {
  return (
    <div className="bg-rcq-gray min-h-[60vh] flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-xl">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mx-auto mb-6 text-rcq-teal">
           <PackageSearch size={40} />
        </div>
        <h1 className="text-3xl font-bold text-rcq-navy mb-4">Track Your Shipment</h1>
        <p className="text-slate-500 mb-8">
          Enter your Bill of Lading (BL) number, Invoice number, or custom tracking ID to get real-time status updates on your global shipment.
        </p>
        
        <div className="flex max-w-md mx-auto shadow-lg rounded-full overflow-hidden border border-slate-200 bg-white">
          <input 
            type="text" 
            placeholder="e.g., RCQ-2026-8942" 
            className="flex-1 px-6 py-4 focus:outline-none"
          />
          <button className="bg-rcq-navy hover:bg-rcq-teal transition-colors text-white px-8 font-medium">
            Track
          </button>
        </div>
      </div>
    </div>
  );
}
