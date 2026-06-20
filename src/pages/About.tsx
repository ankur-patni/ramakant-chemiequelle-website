import { motion } from 'motion/react';
import { Target, Lightbulb, Shield, Globe } from 'lucide-react';
import globalBusinessImg from '../assets/images/global_business_handshake_1781550318639.jpg';

export default function About() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-rcq-navy py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg px-4">
          Your trusted procurement partner connecting global buyers with reliable chemical manufacturers.
        </p>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-rcq-navy mb-6">Who We Are</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Ramakant Chemiequelle is a premier global B2B chemical sourcing and export company. 
                We specialize in bridging the gap between high-quality chemical manufacturers and 
                international buyers who demand reliability, compliance, and competitive pricing.
              </p>
              <p>
                With over a decade of industry expertise, we have built a robust network of verified 
                suppliers. We don't just trade chemicals; we provide end-to-end solutions including 
                quality assurance, regulatory documentation, and seamless global logistics.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src={globalBusinessImg} 
              alt="Global Business" 
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-rcq-teal text-white p-6 rounded-xl shadow-lg border-4 border-white">
              <div className="text-4xl font-bold">15+</div>
              <div className="font-medium">Years of Trust</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-rcq-gray p-10 rounded-2xl border border-slate-100">
            <div className="w-14 h-14 bg-rcq-navy text-white rounded-xl flex items-center justify-center mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-rcq-navy mb-4">Our Mission</h3>
            <p className="text-slate-600">
              To simplify global chemical procurement by providing reliable, high-quality, and compliant 
              sourcing solutions, enabling our clients to focus on their core business operations while 
              we handle the complexities of the supply chain.
            </p>
          </div>
          <div className="bg-rcq-gray p-10 rounded-2xl border border-slate-100">
            <div className="w-14 h-14 bg-rcq-teal text-white rounded-xl flex items-center justify-center mb-6">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-2xl font-bold text-rcq-navy mb-4">Our Vision</h3>
            <p className="text-slate-600">
              To be the world's most trusted and sustainable chemical sourcing partner, setting industry 
              standards for transparency, quality assurance, and customer-centric service in the global market.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-rcq-navy mb-4">Core Values</h2>
            <div className="w-20 h-1 bg-rcq-teal mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "Uncompromising honesty and ethical business practices in every transaction." },
              { icon: Target, title: "Quality", desc: "Rigorous verification and strict adherence to international standards." },
              { icon: Globe, title: "Reliability", desc: "Consistent performance and dependable delivery timelines." },
            ].map((val, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-slate-100 text-rcq-navy rounded-full flex items-center justify-center mb-6">
                  <val.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-rcq-navy mb-3">{val.title}</h4>
                <p className="text-slate-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
