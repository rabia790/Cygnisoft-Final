import React, {useState, useRef} from "react";
import { motion } from "motion/react";
import { ArrowRight, Globe, Factory, Cpu, Truck, HeartPulse, Building2, Phone, Mail, ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
// @ts-ignore
import heroStaffing from "../img/bannerimg.png";
// @ts-ignore
import logoOne from "../img/1.png";
import logoTwo from "../img/2.png";

const industries = [
  { 
    name: "Manufacturing", 
    icon: Factory, 
    specializations: ["Industrial Automation", "Supply Chain Optimization", "Plant Management", "Operational Excellence"],
    path: "/industries/manufacturing"
  },
  { 
    name: "Technology", 
    icon: Cpu, 
    specializations: ["Cloud Infrastructure", "Enterprise Software", "AI & Machine Learning", "Cybersecurity Strategy"],
    path: "/industries/technology"
  },
  { 
    name: "Logistics", 
    icon: Truck, 
    specializations: ["Global Freight Management", "Warehouse Automation", "Last-Mile Delivery", "Fleet Optimization"],
    path: "/industries/logistics"
  },
  { 
    name: "Healthcare", 
    icon: HeartPulse, 
    specializations: ["Health-Tech Integration", "Clinical Staffing", "Regulatory Compliance", "Patient Data Security"],
    path: "/industries/healthcare"
  },
];

const blueprint = [
  { 
    step: "01", 
    title: "Strategic Discovery", 
    desc: "We conduct an exhaustive analysis of your organizational DNA and technical requirements to define precision-led talent profiles." 
  },
  { 
    step: "02", 
    title: "Global Sourcing", 
    desc: "Leveraging our Canada-India bridge, we source elite professionals who align with your strategic goals and project timelines." 
  },
  { 
    step: "03", 
    title: "3-Stage Technical Vetting", 
    desc: "Every candidate undergoes a rigorous 3-stage assessment: Technical Proficiency, Problem-Solving Agility, and Cultural Leadership Fit." 
  },
  { 
    step: "04", 
    title: "Seamless Deployment", 
    desc: "We manage the entire onboarding lifecycle, including global compliance and logistics, ensuring immediate operational impact." 
  },
];

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    topic: "Global Talent Strategy"
  });

  // 2. Create the submission handler
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = "hr@cygnisoft.com";
    const subject = encodeURIComponent(`Consultation Request: ${formData.topic}`);
    
    // Constructing the email body with form values
    const body = encodeURIComponent(
      `Strategic Consultation Request\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Work Email: ${formData.email}\n` +
      `Topic: ${formData.topic}\n\n` +
      `Please contact me to discuss this further.`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  // 3. Create a helper to update state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col bg-white">
      {/* 1. The "Premier" Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-3 mb-8">
                <div className="w-12 h-px bg-brand-orange" />
                <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.4em]">Premier Recruitment Advisory</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-brand-midnight leading-[1.05] mb-10 tracking-tighter">
                Strategic Human Capital.<br />
                <span className="text-brand-orange">The Pulse of Industry.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-midnight/60 max-w-xl mb-12 leading-relaxed font-medium">
                Bridging elite Indian talent with global innovation through precision-led recruitment and technical excellence.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Left Button: Navigates to Candidate Portal */}
                <Link 
                  to="/candidate-portal" 
                  className="bg-brand-orange text-white px-10 py-5 rounded-none font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-midnight transition-all shadow-2xl shadow-brand-orange/20 flex items-center justify-center group"
                >
                  Request Talent Advisory
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Right Button: Now scrolls to the bottom Consultation section */}
                <button 
                  onClick={scrollToContact}
                  className="bg-white border border-brand-midnight text-brand-midnight px-10 py-5 rounded-none font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-midnight hover:text-white transition-all flex items-center justify-center"
                >
                  Our Global Strategy
                </button>
              </div>
            </motion.div>

      <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative hidden lg:block"
    >
      <div className="relative z-10 rounded-none overflow-hidden shadow-2xl border border-gray-100 bg-white">
        <img 
          src={heroStaffing}
          alt="Executive Leadership" 
          className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </div>
        <motion.div
          onClick={scrollToContact}
          animate={{ 
            scale: [1, 1.1, 1], 
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
className="absolute -bottom-56 -left-48 z-20 w-[450px] h-[450px] flex items-center justify-center cursor-pointer pointer-events-auto"        >
          <img 
            src={logoOne} 
            alt="CygniSoft Massive Logo" 
            className="w-full h-auto object-contain drop-shadow-[0_60px_60px_rgba(0,0,0,0.35)]" 
          />
        </motion.div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-light rounded-full blur-3xl -z-10" />
        </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-brand-midnight py-16 mt-0 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 text-center">
            <div className="py-10 md:py-0 space-y-3">
              <div className="text-6xl font-display font-black text-brand-orange">200+</div>
              <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">Global Placements</div>
            </div>
            <div className="py-10 md:py-0 space-y-3 border-y md:border-y-0 md:border-x border-white/10">
              <div className="text-6xl font-display font-black text-brand-orange">95%</div>
              <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">Client Retention</div>
            </div>
            <div className="py-10 md:py-0 space-y-3">
              <div className="text-6xl font-display font-black text-brand-orange">15+</div>
              <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">Core Industries</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Industry Practices (Modern Grid) */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-black text-brand-orange uppercase tracking-[0.5em] mb-6">Practice Areas</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold text-brand-midnight tracking-tighter">Specialized Industry Verticals</h3>
            </div>
            <Link to="/about" className="group flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-brand-midnight hover:text-brand-orange transition-colors">
              <span>View All Practices</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white border border-gray-100 hover:border-brand-orange transition-all duration-500 group shadow-sm hover:shadow-2xl flex flex-col h-full rounded-none"
              >
                <div className="mb-12">
                  <industry.icon className="w-12 h-12 text-brand-midnight group-hover:text-brand-orange transition-colors stroke-[1.25]" />
                </div>
                <h4 className="text-2xl font-display font-bold text-brand-midnight mb-8">{industry.name}</h4>
                <ul className="space-y-4 mb-12 flex-grow">
                  {industry.specializations.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-start text-sm text-brand-midnight/60 font-medium leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-4 mt-1.5 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link to={industry.path} className="text-[10px] font-black uppercase tracking-widest text-brand-orange hover:text-brand-midnight transition-colors inline-flex items-center pt-8 border-t border-gray-50">
                  Explore Practice <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The "India-Global Bridge" Strategy */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-black text-brand-orange uppercase tracking-[0.5em] mb-8">Global Strategy</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold text-brand-midnight mb-10 leading-tight tracking-tighter">
                Local Expertise.<br />
                Global Standards.
              </h3>
              <p className="text-lg text-brand-midnight/60 mb-12 leading-relaxed font-medium">
                CygniSoft operates a high-precision bridge between our North American headquarters in Toronto and our primary delivery hub in Vadodara, India. This model ensures global quality standards with local talent depth.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 bg-white border border-gray-100 rounded-none shadow-sm">
                  <Building2 className="w-8 h-8 text-brand-orange mb-6" />
                  <h5 className="font-display font-bold text-brand-midnight text-lg mb-3">Canada HQ</h5>
                  <p className="text-xs text-brand-midnight/50 leading-relaxed font-medium">Strategic oversight and North American client relations (Etobicoke, Ontario).</p>
                </div>
                <div className="p-8 bg-white border border-gray-100 rounded-none shadow-sm">
                  <Globe className="w-8 h-8 text-brand-orange mb-6" />
                  <h5 className="font-display font-bold text-brand-midnight text-lg mb-3">India Delivery Hub</h5>
                  <p className="text-xs text-brand-midnight/50 leading-relaxed font-medium">Elite talent sourcing and technical vetting (Vadodara, Gujarat).</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-white p-12 rounded-none shadow-2xl flex items-center justify-center border border-gray-100 overflow-hidden group">
                <div className="relative w-full h-full border border-dashed border-gray-200 rounded-full flex items-center justify-center group-hover:border-brand-orange/30 transition-colors duration-700">
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-orange rounded-full animate-ping" />
                  <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-brand-orange rounded-full animate-ping" />
                  <div className="text-center">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-midnight mb-3">The Bridge</div>
                    <div className="w-16 h-px bg-brand-orange mx-auto" />
                  </div>
                </div>
                {/* Decorative Map Background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  <img src="https://picsum.photos/seed/map/1000/1000" alt="World Map" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. The Agile Blueprint */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-xs font-black text-brand-orange uppercase tracking-[0.5em] mb-6">Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-brand-midnight tracking-tighter">The Agile Blueprint</h3>
            <p className="text-brand-midnight/50 mt-8 text-xl font-medium leading-relaxed">Our proprietary 4-stage framework for global talent acquisition and technical vetting.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {blueprint.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="text-9xl font-display font-black text-brand-midnight/[0.03] absolute -top-16 left-0 select-none group-hover:text-brand-orange/[0.05] transition-colors duration-500">
                  {item.step}
                </div>
                <div className="relative z-10 pt-6">
                  <h4 className="text-2xl font-display font-bold text-brand-midnight mb-6 group-hover:text-brand-orange transition-colors duration-300">{item.title}</h4>
                  <p className="text-brand-midnight/60 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Strategy (Request a Consultation) */}
      <section 
      ref={contactRef}
      className="py-20 md:py-32 relative overflow-hidden bg-brand-midnight text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 p-12 md:p-24 rounded-none relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-20 relative z-10">
              <div>
                <h2 className="text-xs font-black text-brand-orange uppercase tracking-[0.5em] mb-8">Talent Advisory</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-10 tracking-tighter">Request a Strategic Consultation</h3>
                <p className="text-white/60 mb-12 text-lg leading-relaxed font-medium">
                  Partner with CygniSoft to architect your global workforce strategy. Our advisors are ready to discuss your specific technical and operational requirements in a high-level briefing.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 rounded-none flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                      <Mail className="w-5 h-5 text-brand-orange group-hover:text-white" />
                    </div>
                    <span className="text-sm font-bold tracking-[0.2em] uppercase">hr@cygnisoft.com</span>
                  </div>
                  <div className="flex items-center space-x-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 rounded-none flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                      <Phone className="w-5 h-5 text-brand-orange group-hover:text-white" />
                    </div>
                    <span className="text-sm font-bold tracking-[0.2em] uppercase">+91 (846) 016-0882</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-10 md:p-12 rounded-none shadow-2xl">
                <form className="space-y-8" onSubmit={handleEmailSubmit}>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-midnight/40">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-none border border-gray-100 bg-brand-light focus:bg-white focus:border-brand-orange outline-none transition-all text-brand-midnight font-bold text-sm" 
                      placeholder="Full Name" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-midnight/40">Work Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-none border border-gray-100 bg-brand-light focus:bg-white focus:border-brand-orange outline-none transition-all text-brand-midnight font-bold text-sm" 
                      placeholder="name@email.com" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-midnight/40">Consultation Topic</label>
                    <div className="relative">
                      <select 
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-none border border-gray-100 bg-brand-light focus:bg-white focus:border-brand-orange outline-none transition-all text-brand-midnight font-bold text-sm appearance-none cursor-pointer">
                        <option>Global Talent Strategy</option>
                        <option>Technical Vetting Advisory</option>
                        <option>Bespoke Software Delivery</option>
                        <option>Other Strategic Inquiry</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown className="w-4 h-4 text-brand-midnight/40" />
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-brand-orange text-white py-5 rounded-none font-bold text-xs uppercase tracking-[0.3em] hover:bg-brand-midnight transition-all shadow-xl shadow-brand-orange/20">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-[120px] -z-0" />
          </div>
        </div>
      </section>
    </div> 
  );
}


