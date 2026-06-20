import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, User, PackageSearch, Search, Menu, X, ArrowRight, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/images/rcq_tagline_logo_1781552129560.jpg';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-rcq-navy text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="mailto:sales@ramakantchemieq.com" className="flex items-center gap-2 hover:text-rcq-teal transition-colors">
              <Mail size={14} /> Email Us
            </a>
            <a href="tel:+918511439259" className="flex items-center gap-2 hover:text-rcq-teal transition-colors">
              <Phone size={14} /> Call Us
            </a>
            <span className="flex items-center gap-2">
              <Globe size={14} /> Global Presence
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto max-w-7xl px-4 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 overflow-hidden bg-white hover:shadow-md transition-shadow p-1 rounded-full border border-slate-100">
              <img src={logoImg} alt="Ramakant ChemieQuelle Logo" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mt-0.5 hidden md:block">
              Reliable & Hassle-Free Product Delivery
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="font-medium hover:text-rcq-teal transition-colors">Home</Link>
            <Link to="/about" className="font-medium hover:text-rcq-teal transition-colors">About Us</Link>
            <Link to="/products" className="font-medium hover:text-rcq-teal transition-colors">Products</Link>
            <Link to="/contact" className="font-medium hover:text-rcq-teal transition-colors">Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search Products..."
                className="pl-10 pr-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-rcq-teal transition-all w-48 group-focus-within:w-64"
              />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-rcq-navy p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
               <Link to="/" className="font-medium hover:text-rcq-teal transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link to="/about" className="font-medium hover:text-rcq-teal transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                <Link to="/products" className="font-medium hover:text-rcq-teal transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                <Link to="/contact" className="font-medium hover:text-rcq-teal transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
