import { motion } from "motion/react";
import { MapPin, Globe, Award, ShieldCheck } from "lucide-react";

import globalOpsImg from "../img/globalOperations.jpg";
import talentDevImg from "../img/talentDeve.jpg";

const hubs = [
  {
    city: "Etobicoke, Ontario",
    country: "Canada",
    address: "Global Operations Hub",
    desc: "Our North American headquarters focusing on client relations and strategic staffing for the US and Canadian markets.",
    image: globalOpsImg
  },
  {
    city: "Vadodara, Gujarat",
    country: "India",
    address: "Talent & Development Center",
    desc: "Our primary talent hub and software development center, bridging the gap between Indian engineering excellence and global projects.",
    image: talentDevImg
  }
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Our <span className="text-brand-orange">Global</span> Footprint.
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            CygniSoft Staffing operates at the intersection of innovation and talent, with strategic hubs positioned to serve global markets with agility and precision.
          </p>
        </div>
      </section>

      {/* Hubs Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {hubs.map((hub, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="group"
              >
                <div className="relative h-80 rounded-[2rem] overflow-hidden mb-8 shadow-xl">
                  <img src={hub.image} alt={hub.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-5 h-5 text-brand-orange" />
                      <span className="font-bold text-xl">{hub.city}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">{hub.country}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{hub.address}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {hub.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <Award className="w-12 h-12 text-brand-orange mb-6" />
              <h4 className="text-xl font-bold mb-4">Excellence</h4>
              <p className="text-gray-400 text-sm leading-relaxed">We maintain the highest standards in talent vetting and software delivery, ensuring every placement is a success.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <Globe className="w-12 h-12 text-brand-orange mb-6" />
              <h4 className="text-xl font-bold mb-4">Global Reach</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Our network spans continents, allowing us to source specialized talent that local markets often lack.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <ShieldCheck className="w-12 h-12 text-brand-orange mb-6" />
              <h4 className="text-xl font-bold mb-4">Integrity</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Transparency and trust are the cornerstones of our client and candidate relationships.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
