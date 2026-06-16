import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Users, Leaf, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import waterTreatmentImg from '../assets/images/water_treatment_facility_1781461303495.jpg';
import industrialChemicalsImg from '../assets/images/industrial_chemicals_plant_1781461322775.jpg';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-rcq-navy overflow-hidden">
        {/* Abstract shapes/background (using CSS instead of image for clean look) */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-rcq-teal blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] rounded-full bg-blue-500 blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white space-y-8"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-rcq-teal font-medium text-sm border border-white/10">
                Trusted Global Chemical Sourcing Partner
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                One Source for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rcq-teal to-blue-400">All Chemicals</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
                Connecting buyers with reliable manufacturers and suppliers worldwide. 
                <span className="block mt-2 font-medium text-white/80">Specialty • Water Treatment • Industrial • Agro</span>
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/quote" className="bg-rcq-teal hover:bg-rcq-teal-dark text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(0,166,166,0.3)] hover:shadow-[0_0_30px_rgba(0,166,166,0.5)]">
                  Request a Quote
                </Link>
                <Link to="/products" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all backdrop-blur-sm">
                  Explore Products
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <img 
                  src="https://images.unsplash.com/photo-1614935151651-0bea6508abb0?q=80&w=2670&auto=format&fit=crop" 
                  alt="Chemical Laboratory Facility" 
                  className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                />
                {/* Floating badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">ISO Certified</p>
                    <p className="text-rcq-navy font-bold">100% Quality Assured</p>
                  </div>
                </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-rcq-navy mb-4">Why Global Buyers Trust Us</h2>
            <div className="w-20 h-1 bg-rcq-teal mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: ShieldCheck, title: "Premium Quality", desc: "Verified suppliers & quality assurance." },
              { icon: Globe, title: "Global Delivery", desc: "Worldwide sourcing & logistics support." },
              { icon: Users, title: "Customer-Centric", desc: "Dedicated account management." },
              { icon: Leaf, title: "Sustainable", desc: "Responsible sourcing commitment." },
              { icon: Shield, title: "Compliance", desc: "International standards strictly met." },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-xl hover:bg-white transition-all border border-slate-100 group"
              >
                <div className="w-16 h-16 mx-auto bg-rcq-navy/5 text-rcq-teal rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rcq-teal group-hover:text-white transition-colors">
                  <feature.icon size={32} />
                </div>
                <h3 className="font-bold text-rcq-navy mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-rcq-gray">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-rcq-navy mb-4">Our Product Portfolio</h2>
              <div className="w-20 h-1 bg-rcq-teal rounded-full"></div>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-rcq-teal font-medium hover:text-rcq-navy transition-colors">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Water Treatment", desc: "Cooling water, boiler, RO chemicals.", img: waterTreatmentImg },
              { name: "Industrial Chemicals", desc: "Solvents, acids, alkalis.", img: industrialChemicalsImg },
              { name: "Specialty Chemicals", desc: "High-performance formulations.", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop" },
              { name: "Agro Chemicals", desc: "Crop protection and nutrients.", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2670&auto=format&fit=crop" },
              { name: "Food & Pharma", desc: "Approved raw materials & ingredients.", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2669&auto=format&fit=crop" },
              { name: "Mining & Process", desc: "Industrial process solutions.", img: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2574&auto=format&fit=crop" },
            ].map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">{cat.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-6">{cat.desc}</p>
                  <Link to={`/products`} className="text-rcq-teal font-medium flex items-center gap-2 group-hover:text-rcq-navy transition-colors">
                    View Products <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center gap-2 text-rcq-teal font-medium hover:text-rcq-navy transition-colors">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl font-bold text-rcq-navy mb-4">Industries We Serve</h2>
            <div className="w-20 h-1 bg-rcq-teal mx-auto rounded-full mb-12"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Water Treatment", "Pharmaceuticals", "Food Processing", "Agriculture", 
                "Textiles", "Paints & Coatings", "Mining", "Oil & Gas"
              ].map((ind, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-rcq-gray rounded-xl p-6 flex items-center justify-center text-center font-medium text-rcq-navy border border-slate-200 hover:border-rcq-teal transition-colors cursor-default"
                >
                  {ind}
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-rcq-navy py-16 text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
         <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              {[
                { val: "15+", label: "Years Experience" },
                { val: "500+", label: "Happy Customers" },
                { val: "1000+", label: "Products" },
                { val: "35+", label: "Countries Served" },
                { val: "99%", label: "On-Time Delivery" },
                { val: "24/7", label: "Support" },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-rcq-teal">{stat.val}</div>
                  <div className="text-sm text-slate-300 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-rcq-gray">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-rcq-navy mb-4">Our Streamlined Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">How we handle your international chemical procurement from end to end.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
             {/* Desktop connecting line */}
             <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-slate-300 z-0"></div>

             {[
               { no: "1", title: "Submit Requirement" },
               { no: "2", title: "Source Product" },
               { no: "3", title: "Verify Supplier" },
               { no: "4", title: "Quality Inspection" },
               { no: "5", title: "Logistics & Docs" },
               { no: "6", title: "Global Delivery" },
             ].map((step, idx) => (
               <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center relative z-10"
               >
                 <div className="w-24 h-24 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-3xl font-bold text-rcq-teal mb-4 relative">
                   {step.no}
                   {idx < 5 && <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-slate-300 lg:hidden"><ArrowRight size={20}/></div>}
                 </div>
                 <h3 className="font-bold text-rcq-navy">{step.title}</h3>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-rcq-navy mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: "Procurement Manager", quote: "Reliable supplier with excellent communication and on-time delivery across multiple continents." },
              { role: "Water Treatment Company", quote: "Consistent quality and strong technical support. They handle our complex sourcing needs flawlessly." },
              { role: "Manufacturing Company", quote: "Our trusted sourcing partner for specialty chemicals. They significantly reduced our procurement stress." },
            ].map((test, idx) => (
              <div key={idx} className="bg-rcq-gray p-8 rounded-2xl relative">
                <div className="text-rcq-teal mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-slate-600 mb-6 italic">"{test.quote}"</p>
                <div className="font-bold text-rcq-navy">{test.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-rcq-teal text-white text-center">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-4xl font-bold mb-6">Looking for Reliable Chemical Sourcing?</h2>
          <p className="text-xl mb-10 text-white/90">Get competitive quotations from verified global suppliers handled by experts.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/quote" className="bg-rcq-navy hover:bg-rcq-navy-light text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg text-lg">
              Request Quote
            </Link>
            <Link to="/contact" className="bg-white hover:bg-slate-50 text-rcq-navy px-8 py-4 rounded-full font-medium transition-all shadow-lg text-lg border border-transparent">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
