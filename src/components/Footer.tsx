import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin } from 'lucide-react';
import logoImg from '../assets/images/rcq_bold_trading_logo_1781463447576.jpg';

export default function Footer() {
  return (
    <footer className="bg-rcq-navy text-slate-300 pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
        
        {/* Column 1: Brand */}
        <div className="space-y-6">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-700 flex items-center justify-center bg-white">
                <img src={logoImg} alt="Ramakant Chemiequelle Logo" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              Ramakant Chemiequelle
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Your trusted partner for global chemical sourcing and procurement. Reliable & hassle-free product delivery worldwide.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rcq-teal text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rcq-teal text-white transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rcq-teal text-white transition-colors">
              <Twitter size={18} />
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
            <li><Link to="/industries" className="hover:text-rcq-teal transition-colors">Industries</Link></li>
            <li><Link to="/contact" className="hover:text-rcq-teal transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Product Categories */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Product Categories</h3>
          <ul className="space-y-4">
            <li><Link to="/products?category=industrial" className="hover:text-rcq-teal transition-colors">Industrial Chemicals</Link></li>
            <li><Link to="/products?category=specialty" className="hover:text-rcq-teal transition-colors">Specialty Chemicals</Link></li>
            <li><Link to="/products?category=water-treatment" className="hover:text-rcq-teal transition-colors">Water Treatment</Link></li>
            <li><Link to="/products?category=agro" className="hover:text-rcq-teal transition-colors">Agro Chemicals</Link></li>
            <li><Link to="/products?category=food" className="hover:text-rcq-teal transition-colors">Food Ingredients</Link></li>
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
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-rcq-teal shrink-0" size={18} />
              <span>sales@ramakantchemiequelle.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="text-rcq-teal shrink-0" size={18} />
              <span>www.ramakantchemiequelle.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="container mx-auto max-w-7xl px-4 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <p>© 2026 Ramakant Chemiequelle. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
