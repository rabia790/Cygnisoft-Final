import React from "react"; 
import { motion } from "motion/react";
import { CheckCircle2, Send } from "lucide-react"; // Removed unused ArrowRight

interface Role {
  title: string;
  desc: string;
}

interface IndustryPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  roles: Role[];
  stats: { label: string; value: string }[];
  methodology?: { title: string; desc: string }[];
}

export default function IndustryTemplate({ title, subtitle, heroImage, description, roles, stats, methodology }: IndustryPageProps) {
  
  const handleEmailDraft = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Collecting data via the 'name' attributes added to the inputs below
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("fullname");
    const email = formData.get("workemail");
    const company = formData.get("company");
    const message = formData.get("message");
    
    const subject = encodeURIComponent(`Inquiry for ${title} Team - ${company}`);
    const body = encodeURIComponent(
      `Hello CygniSoft Team,\n\n` +
      `My name is ${name} (${email}) from ${company}.\n\n` +
      `I am interested in scaling our ${title} team. ${message}\n\n` +
      `Looking forward to hearing from you.`
    );

    // This triggers the mail application
    window.location.href = `mailto:hr@cygnisoft.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={title} 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-orange/20 backdrop-blur-md border border-brand-orange/30 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">{subtitle}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-brand-orange mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-brand-grey uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* NEW: Strategic Service Blueprint */}
      <section className="py-24 bg-brand-midnight text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Strategic <span className="text-brand-orange">Methodology</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How we ensure excellence and ROI for every {title} engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-0 border border-gray-800 rounded-2xl overflow-hidden">
            {/* These would be passed as a new prop 'methodology' or hardcoded per type */}
            {methodology?.map((step, idx) => (
              <div key={idx} className="p-10 border-r border-gray-800 last:border-r-0 hover:bg-brand-orange/5 transition-colors group">
                <div className="text-brand-orange text-5xl font-black opacity-20 group-hover:opacity-100 transition-opacity mb-6">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Roles Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Roles We Hire</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">{role.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Gen Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center text-white">
              <h2 className="text-4xl font-bold mb-6 text-brand-orange"> 
                Ready to Scale Your {title} Team?
              </h2>              
              <p className="text-gray-400 text-lg mb-8">
                Partner with CygniSoft to access a global pool of vetted professionals. Our agile blueprint ensures you get the right talent, right when you need it.
              </p>
              <ul className="space-y-4">
                {['24-Hour Response Time', 'Vetted Technical Talent', 'Global Compliance Support'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-brand-green/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-brand-green rounded-full" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 bg-white p-12 lg:p-20">
              {/* FIXED: Form now uses handleEmailDraft */}
              <form className="space-y-6" onSubmit={handleEmailDraft}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    {/* ADDED: name="fullname" */}
                    <input name="fullname" type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Work Email</label>
                    {/* ADDED: name="workemail" */}
                    <input name="workemail" type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="john@company.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Company Name</label>
                  {/* ADDED: name="company" */}
                  <input name="company" type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="Acme Corp" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                  {/* ADDED: name="message" */}
                  <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none" placeholder="Tell us about your hiring needs..." required />
                </div>
                {/* FIXED: Ensured type="submit" */}
                <button type="submit" className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-orange-600 transition-all group">
                  <span>Send Inquiry</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}