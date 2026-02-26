import React from "react";
import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-brand-midnight mb-12"
        >
          Privacy Policy
        </motion.h1>
        
        <div className="prose prose-lg text-brand-midnight/70 space-y-8 font-medium">
          <section>
            <h2 className="text-2xl font-bold text-brand-midnight mb-4">1. Data Collection</h2>
            <p>At CygniSoft Staffing, we collect information necessary to provide recruitment services, including names, contact details, and professional backgrounds provided via our Strategic Consultation forms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-midnight mb-4">2. Use of Information</h2>
            <p>Your data is used specifically to facilitate talent advisory services and improve our global footprint operations between Canada and India.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-midnight mb-4">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information from unauthorized access.</p>
          </section>
        </div>
      </div>
    </div>
  );
}