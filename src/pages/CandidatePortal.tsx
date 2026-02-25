import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle, Briefcase, MapPin, Globe, Zap } from "lucide-react";

export default function CandidatePortal() {
  const [submitted, setSubmitted] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Jobs from WordPress API
  useEffect(() => {
    const API_URL = 'https://staging-0446-cygnisoft-zadxc.wpcomstaging.com/wp-json/flowd/v1/india-jobs';
    
    fetch(API_URL)
      .then(res => res.json())
      .then(response => {
        setJobs(response.data || response); 
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const recipient = "hr@cygnisoft.com";
    const subject = encodeURIComponent(`Elite Application: ${formData.get("firstName")} ${formData.get("lastName")}`);
    
    const body = encodeURIComponent(
      `Candidate Application Details:\n\n` +
      `Name: ${formData.get("firstName")} ${formData.get("lastName")}\n` +
      `Email: ${formData.get("email")}\n` +
      `Primary Skillset: ${formData.get("skillset")}\n\n` +
      `IMPORTANT: Please attach your resume file to this email before sending.`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

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
          <h2 className="text-3xl font-bold mb-4">Draft Created!</h2>
          <p className="text-gray-500 mb-8">
            We've opened your email client to send your application. Please ensure you click "Send" in your email app.
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
          
          {/* TOP SECTION: Full-width Job Openings */}
          <div className="mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-brand-orange" />
              Immediate Career Opportunities
            </h3>
            
            {loading ? (
              <div className="grid md:grid-cols-3 gap-6 animate-pulse">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-32 bg-gray-100 rounded-2xl" />
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.length > 0 ? jobs.map((job: any) => (
                  <div 
                    key={job.id} 
                    className="p-6 rounded-2xl bg-gray-50 border border-transparent hover:border-brand-orange/30 hover:bg-white hover:shadow-md transition-all cursor-pointer group"
                    onClick={() => {
                      const subject = encodeURIComponent(`Application for ${job.title}`);
                      window.location.href = `mailto:hr@cygnisoft.com?subject=${subject}&body=Please attach your resume manually.`;
                    }}
                  >
                    <h4 className="font-bold text-xl text-gray-900 group-hover:text-brand-orange transition-colors mb-2">{job.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="mt-4 text-brand-orange font-bold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Quick Apply →
                    </div>
                  </div>
                )) : (
                  <p className="text-gray-400">No openings currently listed. Please use the general application below.</p>
                )}
              </div>
            )}
          </div>

          {/* BOTTOM SECTION: Two-column Info & Form */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Join the <span className="text-brand-orange">Elite</span>.
              </h1>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                Connect with global innovation. We build careers at the world's most innovative companies.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Global Opportunities</h4>
                    <p className="text-gray-500 text-sm">Access roles in Canada, USA, and India's top hubs.</p>
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
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                    <input name="firstName" required type="text" className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                    <input name="lastName" required type="text" className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input name="email" required type="email" className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Primary Skillset</label>
                  <select name="skillset" className="w-full px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/10 outline-none transition-all appearance-none">
                    <option>Full-Stack Development</option>
                    <option>Cloud Architecture</option>
                    <option>Data Engineering</option>
                    <option>Manufacturing Automation</option>
                    <option>Healthcare Tech</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-orange-600 transition-all shadow-xl shadow-orange-100 group">
                  <span>Submit General Application</span>
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