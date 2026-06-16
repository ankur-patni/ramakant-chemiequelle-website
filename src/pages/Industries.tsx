export default function Industries() {
  return (
    <div className="bg-rcq-gray min-h-screen pb-20">
      <div className="bg-rcq-navy py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          Core industrial sectors we supply with high-quality chemical formulations.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Water Treatment", "Pharmaceuticals", "Food Processing", "Agriculture", 
            "Textiles", "Paints & Coatings", "Mining", "Oil & Gas"
          ].map((ind, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-8 flex items-center justify-center text-center font-bold text-rcq-navy border border-slate-200 hover:border-rcq-teal hover:shadow-lg transition-all cursor-default text-lg"
            >
              {ind}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
