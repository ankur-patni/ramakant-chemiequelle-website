import { Link } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';
import logoImg from '../assets/images/rcq_bold_trading_logo_1781463447576.jpg';

export default function Login() {
  return (
    <div className="bg-rcq-gray min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-rcq-navy p-8 text-center">
          <div className="w-12 h-12 rounded-lg bg-white overflow-hidden flex items-center justify-center mx-auto mb-4 border border-slate-700">
            <img src={logoImg} alt="Ramakant Chemiequelle Logo" className="w-full h-full object-cover mix-blend-multiply" />
          </div>
          <h2 className="text-2xl font-bold text-white">B2B Portal Login</h2>
          <p className="text-slate-300 text-sm mt-2">Access your quotes, orders, and documents.</p>
        </div>
        
        <div className="p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="email" required className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal" placeholder="admin@company.com" />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <a href="#" className="text-xs text-rcq-teal hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="password" required className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal" placeholder="••••••••" />
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="remember" className="rounded text-rcq-teal focus:ring-rcq-teal" />
              <label htmlFor="remember" className="ml-2 text-sm text-slate-600">Remember me for 30 days</label>
            </div>

            <button type="button" className="w-full py-3 bg-rcq-teal hover:bg-rcq-teal-dark text-white rounded-lg font-bold transition-all shadow-md">
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-600 border-t border-slate-100 pt-6">
            <p className="mb-2">Don't have an account?</p>
            <Link to="/contact" className="text-rcq-navy font-bold hover:text-rcq-teal transition-colors">Request Portal Access</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
