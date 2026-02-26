import React from "react";
import { motion } from "motion/react";
import { Shield, Globe2, Scale, FileCheck } from "lucide-react";

export default function GlobalCompliance() {
  const standards = [
    {
      icon: Shield,
      title: "Data Protection",
      desc: "We adhere to PIPEDA (Canada) and the Digital Personal Data Protection Act (India) to ensure candidate privacy across borders."
    },
    {
      icon: Globe2,
      title: "Cross-Border Employment",
      desc: "Compliance with international labor laws and visa regulations to facilitate seamless talent mobility."
    },
    {
      icon: Scale,
      title: "Ethical Sourcing",
      desc: "Zero-tolerance policy for unfair labor practices, ensuring transparent and fair recruitment cycles."
    },
    {
      icon: FileCheck,
      title: "Regulatory Filings",
      desc: "Maintaining active registrations and compliance filings in Ontario and Gujarat jurisdictions."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-brand-midnight mb-8"
          >
            Global Compliance & Ethics
          </motion.h1>
          <p className="text-xl text-brand-midnight/60 font-medium leading-relaxed">
            Our operational framework is built on a foundation of international legal standards, 
            ensuring trust and security for our global partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {standards.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 border border-gray-100 bg-gray-50/50 rounded-none hover:border-brand-orange transition-all duration-500"
            >
              <item.icon className="w-10 h-10 text-brand-orange mb-6" />
              <h3 className="text-2xl font-bold text-brand-midnight mb-4">{item.title}</h3>
              <p className="text-brand-midnight/60 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}