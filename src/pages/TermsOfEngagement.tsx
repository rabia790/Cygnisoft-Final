import React from "react";
import { motion } from "motion/react";

export default function TermsOfEngagement() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-brand-midnight mb-12"
        >
          Terms of Engagement
        </motion.h1>
        
        <div className="prose prose-lg text-brand-midnight/70 space-y-8 font-medium">
          <section>
            <h2 className="text-2xl font-bold text-brand-midnight mb-4">1. Scope of Services</h2>
            <p>CygniSoft Staffing provides high-precision recruitment advisory and technical vetting services, bridging the gap between North American enterprises and elite Indian talent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-midnight mb-4">2. Candidate Representation</h2>
            <p>We ensure all candidates undergo a rigorous 3-stage technical assessment: Proficiency, Problem-Solving, and Leadership Fit before being presented to clients.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-midnight mb-4">3. Confidentiality</h2>
            <p>Both parties agree to maintain strict confidentiality regarding proprietary technical requirements, organizational DNA, and candidate personal data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-midnight mb-4">4. Global Compliance</h2>
            <p>Our engagements comply with relevant labor laws and data protection regulations in both Ontario, Canada, and Gujarat, India.</p>
          </section>
        </div>
      </div>
    </div>
  );
}