import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, User, PackageSearch, Search, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/images/rcq_bold_trading_logo_1781463447576.jpg';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-rcq-navy text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="mailto:sales@ramakantchemiequelle.com" className="flex items-center gap-2 hover:text-rcq-teal transition-colors">
              <Mail size={14} /> Email Us
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-2 hover:text-rcq-teal transition-colors">
              <Phone size={14} /> Call Us
            </a>
            <span className="flex items-center gap-2">
              <Globe size={14} /> Global Presence
            </span>
          </div>
          <div className="flex gap-6">
            <Link to="/login" className="flex items-center gap-2 hover:text-rcq-teal transition-colors">
              <User size={14} /> Customer Login
            </Link>
            <Link to="/tracking" className="flex items-center gap-2 hover:text-rcq-teal transition-colors">
              <PackageSearch size={14} /> Order Tracking
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto max-w-7xl px-4 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-100 flex items-center justify-center bg-white shadow-sm">
                <img src={logoImg} alt="Ramakant Chemiequelle Logo" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-rcq-navy tracking-tight">Ramakant Chemiequelle</h1>
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
            <Link to="/industries" className="font-medium hover:text-rcq-teal transition-colors">Industries</Link>
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
            <Link to="/quote" className="bg-rcq-teal hover:bg-rcq-teal-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2">
              Request Quote <ArrowRight size={16} />
            </Link>
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
                <Link to="/industries" className="font-medium hover:text-rcq-teal transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
                <Link to="/quote" className="font-medium hover:text-rcq-teal transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Request Quote</Link>
                <Link to="/contact" className="font-medium hover:text-rcq-teal transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                <hr className="border-slate-100" />
                <Link to="/login" className="flex items-center gap-2 font-medium hover:text-rcq-teal transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <User size={16} /> Customer Login
                </Link>
                <Link to="/tracking" className="flex items-center gap-2 font-medium hover:text-rcq-teal transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <PackageSearch size={16} /> Order Tracking
                </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
