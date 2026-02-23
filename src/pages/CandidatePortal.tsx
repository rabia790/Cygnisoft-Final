import { motion } from "motion/react";
import { Upload, Send, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function CandidatePortal() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[2rem] shadow-2xl text-center max-w-md mx-4"
        >
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-brand-green" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
          <p className="text-gray-500 mb-8">
            Our talent acquisition team will review your profile and get back to you within 48 hours if there's a match.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-brand-dark text-white py-4 rounded-xl font-bold hover:bg-black transition-all"
          >
            Back to Portal
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Join the <span className="text-brand-orange">Elite</span>.
              </h1>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                Connect with global innovation. We don't just find jobs; we build careers at the world's most innovative companies.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Global Opportunities</h4>
                    <p className="text-gray-500 text-sm">Access roles in Canada, USA, Europe, and India's top tech hubs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Fast-Track Hiring</h4>
                    <p className="text-gray-500 text-sm">Our streamlined process gets you from application to offer faster.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-xl border border-gray-100">
              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                    <input required type="text" className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                    <input required type="text" className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input required type="email" className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Primary Skillset</label>
                  <select className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all appearance-none">
                    <option>Full-Stack Development</option>
                    <option>Cloud Architecture</option>
                    <option>Data Engineering</option>
                    <option>Manufacturing Automation</option>
                    <option>Healthcare Tech</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Resume / CV</label>
                  <div className="relative group">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                    <div className="w-full border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center group-hover:border-brand-orange group-hover:bg-orange-50 transition-all">
                      <Upload className="w-8 h-8 text-gray-400 group-hover:text-brand-orange mb-4" />
                      <span className="text-sm font-bold text-gray-500 group-hover:text-brand-orange">Click to upload or drag and drop</span>
                      <span className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-widest">PDF, DOCX (Max 5MB)</span>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-orange-600 transition-all shadow-xl shadow-orange-100 group">
                  <span>Submit Application</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Icons needed for the page
function Globe(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  )
}

function Zap(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  )
}
