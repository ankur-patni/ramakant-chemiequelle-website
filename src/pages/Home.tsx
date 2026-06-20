import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Users, Leaf, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import waterTreatmentImg from '../assets/images/water_treatment_facility_1781461303495.jpg';
import industrialChemicalsImg from '../assets/images/industrial_chemicals_plant_1781461322775.jpg';
import heroImg from '../assets/images/hero_chemical_plant_1781533156372.jpg';
import specialtyImg from '../assets/images/specialty_chemicals_img_1781533175180.jpg';
import foodPharmaImg from '../assets/images/food_pharma_customer_1781550101209.jpg';
import homePersonalCareImg from '../assets/images/home_care_customer_1781550084518.jpg';
import flavourFragranceImg from '../assets/images/flavour_fragrance_customer_1781550116302.jpg';
import paintRubberImg from '../assets/images/paint_rubber_customer_1781550130681.jpg';
import bulkChemicalsImg from '../assets/images/bulk_chemicals_customer_1781550144600.jpg';

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
                <span className="block mt-2 font-medium text-white/80">Specialty • Water Treatment • Industrial • Home & Personal Care</span>
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
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
                  src={heroImg} 
                  alt="Chemical Laboratory Facility" 
                  className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Water Treatment", desc: "Cooling water, boiler, RO chemicals.", img: waterTreatmentImg },
              { name: "Industrial Chemicals", desc: "Solvents, acids, alkalis.", img: industrialChemicalsImg },
              { name: "Specialty Chemicals", desc: "High-performance formulations.", img: specialtyImg },
              { name: "Home & Personal Care", desc: "Cosmetics and detergent raw materials.", img: homePersonalCareImg },
              { name: "Food, Feed & Pharmaceuticals", desc: "Approved raw materials & ingredients.", img: foodPharmaImg },
              { name: "Flavour & Fragrance", desc: "Aromatic compounds & essential oils.", img: flavourFragranceImg },
              { name: "Paint & Rubber Chemicals", desc: "Industrial processing materials.", img: paintRubberImg },
              { name: "Bulk Chemical Industries", desc: "Large scale chemical supply.", img: bulkChemicalsImg },
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

      {/* Testimonials (Hidden) */}

      {/* CTA */}
      <section className="py-24 bg-rcq-teal text-white text-center">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-4xl font-bold mb-6">Looking for Reliable Chemical Sourcing?</h2>
          <p className="text-xl mb-10 text-white/90">Get competitive quotations from verified global suppliers handled by experts.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white hover:bg-slate-50 text-rcq-navy px-8 py-4 rounded-full font-medium transition-all shadow-lg text-lg border border-transparent">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
