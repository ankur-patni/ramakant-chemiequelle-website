import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Linkedin, Pointer } from 'lucide-react';
import logoImg from '../assets/images/rcq_tagline_logo_1781552129560.jpg';

export default function Footer() {
  return (
    <footer className="bg-rcq-navy text-slate-300 pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
        
        {/* Column 1: Brand */}
        <div className="space-y-6">
          <div className="flex flex-col">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-white p-1 flex-shrink-0 mb-4 border border-slate-700">
              <img src={logoImg} alt="Ramakant ChemieQuelle Logo" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Your trusted partner for global chemical sourcing and procurement. Reliable & hassle-free product delivery worldwide.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rcq-teal text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="hover:text-rcq-teal transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-rcq-teal transition-colors">About Us</Link></li>
            <li><Link to="/products" className="hover:text-rcq-teal transition-colors">Products</Link></li>
            <li><Link to="/contact" className="hover:text-rcq-teal transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Product Categories */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Product Categories</h3>
          <ul className="space-y-4">
            <li><Link to="/products?category=home-personal" className="hover:text-rcq-teal transition-colors">Home & Personal Care</Link></li>
            <li><Link to="/products?category=food-pharma" className="hover:text-rcq-teal transition-colors">Food, Feed & Pharmaceuticals</Link></li>
            <li><Link to="/products?category=flavour-fragrance" className="hover:text-rcq-teal transition-colors">Flavour & Fragrance</Link></li>
            <li><Link to="/products?category=paint-rubber" className="hover:text-rcq-teal transition-colors">Paint & Rubber Chemicals</Link></li>
            <li><Link to="/products?category=bulk" className="hover:text-rcq-teal transition-colors">Bulk Chemical Industries</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-rcq-teal mt-0.5 shrink-0" size={18} />
              <span>Vadodara, Gujarat, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-rcq-teal shrink-0" size={18} />
              <span>+91 85114 39259</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-rcq-teal shrink-0" size={18} />
              <span>sales@ramakantchemieq.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="text-rcq-teal shrink-0" size={18} />
              <span>www.ramakantchemieq.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="container mx-auto max-w-7xl px-4 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <p>© 2026 Ramakant Chemiequelle. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
