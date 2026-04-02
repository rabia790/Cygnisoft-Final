import { useState, useEffect } from  "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Factory, Cpu, Truck, HeartPulse, Briefcase, Code, GraduationCap, Users } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
// @ts-ignore
import logo from "../img/cygnisoftstaffing.png";

const industries = [
  { name: "Manufacturing", path: "/industries/manufacturing", icon: Factory, desc: "Industrial automation and workforce solutions." },
  { name: "Technology", path: "/industries/technology", icon: Cpu, desc: "High-end software and hardware engineering talent." },
  { name: "Logistics", path: "/industries/logistics", icon: Truck, desc: "Supply chain management and operational excellence." },
  { name: "Healthcare", path: "/industries/healthcare", icon: HeartPulse, desc: "Specialized medical staffing and health-tech." },
];

const solutions = [
  { name: "Elite Tech Staffing", path: "/solutions/tech-staffing", icon: Briefcase, desc: "Connecting you with the top 1% of tech talent." },
  { name: "Bespoke Software Development", path: "/solutions/software-dev", icon: Code, desc: "Custom solutions built for your unique needs." },
  { 
    name: "Enterprise ERP Solutions", 
    path: "/solutions/erp", 
    icon: Cpu, 
    desc: "Transforming operations with Dynamics 365 and Odoo expertise." 
  },
  { name: "Global Training Programs", path: "/solutions/training", icon: GraduationCap, desc: "Upskilling teams for the digital frontier." },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-[9999] transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-gray-100 py-3 shadow-sm" 
          : "bg-white/80 backdrop-blur-sm border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative h-14 w-auto group-hover:scale-105 transition-transform duration-300">
            <img
              src={logo} 
              alt="CygniSoft Staffing" 
              className="h-full w-auto object-contain"
            />
          </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link to="/" className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-midnight hover:text-brand-orange transition-colors">Home</Link>
            
            {/* Industries Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("industries")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center space-x-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-brand-midnight hover:text-brand-orange transition-colors py-2">
                <span>Industries</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === "industries" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "industries" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full w-[600px] bg-white shadow-2xl rounded-sm border border-gray-100 p-8 grid grid-cols-2 gap-6"
                  >
                    {industries.map((item) => (
                      <Link key={item.name} to={item.path} className="group p-4 hover:bg-brand-light transition-colors rounded-sm">
                        <div className="flex items-start space-x-4">
                          <item.icon className="w-5 h-5 text-brand-orange mt-1" />
                          <div>
                            <div className="font-display font-bold text-xs uppercase tracking-wider text-brand-midnight">{item.name}</div>
                            <div className="text-[10px] text-brand-midnight/50 mt-1 font-medium leading-relaxed">{item.desc}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("solutions")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center space-x-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-brand-midnight hover:text-brand-orange transition-colors py-2">
                <span>Solutions</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === "solutions" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "solutions" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full w-[450px] bg-white shadow-2xl rounded-sm border border-gray-100 p-8 flex flex-col space-y-4"
                  >
                    {solutions.map((item) => (
                      <Link key={item.name} to={item.path} className="group p-4 hover:bg-brand-light transition-colors rounded-sm">
                        <div className="flex items-start space-x-4">
                          <item.icon className="w-5 h-5 text-brand-orange mt-1" />
                          <div>
                            <div className="font-display font-bold text-xs uppercase tracking-wider text-brand-midnight">{item.name}</div>
                            <div className="text-[10px] text-brand-midnight/50 mt-1 font-medium leading-relaxed">{item.desc}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-midnight hover:text-brand-orange transition-colors">About Us</Link>
            <Link to="/candidate-portal" className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-midnight hover:text-brand-orange transition-colors">Careers</Link>
            
            <Link 
              to="/candidate-portal" 
              className="bg-brand-orange text-white px-8 py-3 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-midnight transition-all shadow-lg shadow-brand-orange/10"
            >
              Submit Resume
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-brand-midnight hover:text-brand-orange transition-colors" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-8 space-y-8">
              <Link to="/" className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-midnight">Home</Link>
              
              <div className="space-y-4">
                <div className="text-[8px] font-black text-brand-orange uppercase tracking-[0.4em] border-b border-gray-50 pb-2">Industries</div>
                <div className="grid grid-cols-1 gap-4 pl-4">
                  {industries.map(i => (
                    <Link key={i.name} to={i.path} className="text-[10px] font-bold text-brand-midnight/60 hover:text-brand-orange transition-colors">{i.name}</Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-[8px] font-black text-brand-orange uppercase tracking-[0.4em] border-b border-gray-50 pb-2">Solutions</div>
                <div className="grid grid-cols-1 gap-4 pl-4">
                  {solutions.map(s => (
                    <Link key={s.name} to={s.path} className="text-[10px] font-bold text-brand-midnight/60 hover:text-brand-orange transition-colors">{s.name}</Link>
                  ))}
                </div>
              </div>

              <Link to="/about" className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-midnight">About Us</Link>
              <Link to="/candidate-portal" className="block text-[10px] font-black uppercase tracking-[0.2em] text-brand-midnight">Careers</Link>
              
              <Link 
                to="/candidate-portal" 
                className="block w-full bg-brand-orange text-white text-center py-4 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-brand-orange/20"
              >
                Submit Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
