import { Link } from "react-router-dom";
// 1. Added X and Instagram to the imports
import { Linkedin, X, Instagram, Facebook, Mail, Phone, MapPin, Globe } from "lucide-react";
// @ts-ignore
import logo from "../img/cygnisoftstaffing.png";

export default function Footer() {
  return (
    <footer className="bg-brand-midnight text-white pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand & Mission */}
          <div className="space-y-10">
            <Link to="/" className="flex items-center space-x-3">
             <div className="relative h-14 w-auto group-hover:scale-105 transition-transform duration-300">
                <img
                  src={logo} 
                  alt="CygniSoft Staffing" 
                  className="h-full w-auto object-contain"
                  />
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              The definitive bridge between elite Indian talent and global innovation. We deliver precision-led recruitment strategies for the world's most ambitious enterprises.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/showcase/cygnisoft-india/" target="_blank" rel="noreferrer" className="text-white/20 hover:text-brand-orange transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              {/* 3. Added Instagram icon */}
              <a href="https://www.instagram.com/cygnisoftstaffingindia" target="_blank" rel="noreferrer" className="text-white/20 hover:text-brand-orange transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/people/CygniSoft-Staffing-India/61588040461783/" target="_blank" rel="noreferrer" className="text-white/20 hover:text-brand-orange transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-orange mb-12">Practice Areas</h4>
            <ul className="space-y-6 text-xs font-bold uppercase tracking-widest text-white/40">
              <li><Link to="/industries/manufacturing" className="hover:text-white transition-colors">Manufacturing & Automation</Link></li>
              <li><Link to="/industries/technology" className="hover:text-white transition-colors">Technology & Software</Link></li>
              <li><Link to="/industries/logistics" className="hover:text-white transition-colors">Logistics & Supply Chain</Link></li>
              <li><Link to="/industries/healthcare" className="hover:text-white transition-colors">Healthcare & Life Sciences</Link></li>
            </ul>
          </div>

          {/* Global Hubs */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-orange mb-12">Global Hubs</h4>
            <div className="space-y-10">
              <div className="flex items-start space-x-5">
                <MapPin className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                <div className="text-xs font-bold text-white/40 leading-relaxed uppercase tracking-widest">
                  <span className="text-white block mb-2">North America HQ</span>
                  Etobicoke, Ontario, Canada
                </div>
              </div>
              <div className="flex items-start space-x-5">
                <Globe className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                <div className="text-xs font-bold text-white/40 leading-relaxed uppercase tracking-widest">
                  <span className="text-white block mb-2">Global Delivery Center</span>
                  Vadodara, Gujarat, India
                </div>
              </div>
            </div>
          </div>

          {/* Contact Advisory */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-orange mb-12">Contact Advisory</h4>
            <ul className="space-y-8 text-xs font-bold uppercase tracking-widest text-white/40">
              <li className="flex items-center space-x-5">
                <Phone className="w-6 h-6 text-brand-orange flex-shrink-0" />
                <span>+91 (846) 016-0882</span>
              </li>
              <li className="flex items-center space-x-5">
                <Mail className="w-6 h-6 text-brand-orange flex-shrink-0" />
                <span>hr@cygnisoft.com</span>
              </li>
            </ul>
            <div className="mt-12">
              <Link to="/candidate-portal" className="inline-block bg-white/5 border border-white/10 text-white px-8 py-4 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-brand-orange hover:border-brand-orange transition-all">
                Submit Resume
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
          <p>© 2026 CygniSoft Staffing Solutions. All Rights Reserved.</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
            <a href="#" className="hover:text-white transition-colors">Global Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}