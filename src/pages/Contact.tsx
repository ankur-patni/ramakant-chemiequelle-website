import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-rcq-gray min-h-screen pb-20">
      <div className="bg-rcq-navy py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          Get in touch with our global team for inquiries, support, or partnership opportunities.
        </p>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-rcq-navy mb-6">Global Headquarters</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rcq-teal/10 text-rcq-teal flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-rcq-navy mb-1">Office Address</h4>
                    <p className="text-slate-600 text-sm">Vadodara, Gujarat<br/>India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rcq-teal/10 text-rcq-teal flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-rcq-navy mb-1">Call / WhatsApp</h4>
                    <p className="text-slate-600 text-sm">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rcq-teal/10 text-rcq-teal flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-rcq-navy mb-1">Email</h4>
                    <p className="text-slate-600 text-sm">sales@ramakantchemiequelle.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rcq-teal/10 text-rcq-teal flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-rcq-navy mb-1">Business Hours</h4>
                    <p className="text-slate-600 text-sm">Monday - Saturday<br/>9:00 AM - 6:00 PM (IST)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-rcq-navy mb-8">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal focus:border-transparent" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal focus:border-transparent" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal focus:border-transparent" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal focus:border-transparent" placeholder="Company Ltd." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal focus:border-transparent" placeholder="How can we help?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rcq-teal focus:border-transparent" placeholder="Provide details about your query..."></textarea>
                </div>

                <button type="button" className="w-full md:w-auto px-8 py-3 bg-rcq-teal hover:bg-rcq-teal-dark text-white rounded-lg font-medium transition-colors shadow-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 w-full h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-sm relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 flex-col">
             <MapPin size={48} className="mb-4 opacity-50" />
             <p className="font-medium">Map integration (Google Maps) will go here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
