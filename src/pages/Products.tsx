import { Link } from 'react-router-dom';
import { Search, Filter, Download, ArrowRight } from 'lucide-react';

const products = [
  { id: 1, name: "Sodium Hypochlorite", cas: "7681-52-9", category: "Water Treatment", desc: "Bleaching and disinfecting agent." },
  { id: 2, name: "Citric Acid Anhydrous", cas: "77-92-9", category: "Food & Pharma", desc: "Acidifier, flavoring and chelating agent." },
  { id: 3, name: "Hydrogen Peroxide", cas: "7722-84-1", category: "Industrial", desc: "Oxidizer, bleaching agent and antiseptic." },
  { id: 4, name: "Polyacrylamide (PAM)", cas: "9003-05-8", category: "Water Treatment", desc: "Flocculant for water purification." },
  { id: 5, name: "Caustic Soda Flakes", cas: "1310-73-2", category: "Industrial", desc: "Strong base for manufacturing processes." },
  { id: 6, name: "Zinc Sulfate Heptahydrate", cas: "7446-20-0", category: "Agro Chemicals", desc: "Zinc supplement in animal feeds and fertilizers." },
];

const categories = ["All", "Water Treatment", "Industrial", "Specialty", "Agro Chemicals", "Food & Pharma"];

export default function Products() {
  return (
    <div className="bg-rcq-gray min-h-screen pb-20">
      <div className="bg-rcq-navy py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Product Catalog</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          Browse our comprehensive range of high-quality chemicals sourced from verified global manufacturers.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button 
                key={cat} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${cat === 'All' ? 'bg-rcq-teal text-white border-rcq-teal' : 'bg-white text-slate-600 border-slate-200 hover:border-rcq-teal'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72 shadow-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or CAS..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal focus:border-transparent"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-rcq-navy group-hover:text-rcq-teal transition-colors">{p.name}</h3>
                <span className="text-xs font-semibold bg-slate-100 px-2 py-1 rounded text-slate-600">CAS: {p.cas}</span>
              </div>
              <div className="text-sm text-rcq-teal font-medium mb-3">{p.category}</div>
              <p className="text-slate-600 text-sm mb-6 pb-6 border-b border-slate-100">
                {p.desc}
              </p>
              
              <div className="flex items-center justify-between">
                 <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-rcq-navy transition-colors font-medium">
                   <Download size={16} /> TDS Form
                 </button>
                 <Link to={`/quote?product=${encodeURIComponent(p.name)}`} className="text-rcq-teal font-medium flex items-center gap-1 hover:text-rcq-teal-dark transition-colors">
                   Request Quote <ArrowRight size={16} />
                 </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More mock */}
        <div className="mt-12 text-center">
          <button className="bg-white border text-rcq-navy border-slate-200 hover:border-rcq-teal px-8 py-3 rounded-full font-medium transition-all shadow-sm">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
}
