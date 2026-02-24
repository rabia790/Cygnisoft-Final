import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import CandidatePortal from "./pages/CandidatePortal";
// @ts-ignore
import IndustryTemplate from "./pages/IndustryTemplate";
import manufacturingImg from "./img/manufacturing.jpg";
import techImg from "./img/technology.jpg";
import logisticsImg from "./img/logistics.jpg";
import healthcareImg from "./img/healthcare.jpg"; 
import { log } from "console";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const industryData = {
  manufacturing: {
    title: "Manufacturing",
    subtitle: "Industrial Excellence",
    heroImage: manufacturingImg,
    description: "Empowering the next generation of industrial automation with elite engineering and operational talent.",
    stats: [
      { label: "Placements", value: "85+" },
      { label: "Efficiency Gain", value: "30%" },
      { label: "Retention", value: "98%" },
      { label: "Global Clients", value: "12" }
    ],
    roles: [
      { title: "Automation Engineer", desc: "Specialists in PLC programming, robotics integration, and SCADA systems." },
      { title: "Plant Manager", desc: "Experienced leaders for large-scale manufacturing operations and supply chain." },
      { title: "Quality Assurance", desc: "Experts in Six Sigma, Lean Manufacturing, and ISO compliance standards." },
      { title: "CNC Programmer", desc: "Precision experts in G-code, CAD/CAM software, and advanced multi-axis machining operations." }
    ]
  },
  technology: {
    title: "Technology",
    subtitle: "Digital Innovation",
    heroImage: techImg,
    description: "Bridging the gap between complex technical challenges and the world's most talented developers.",
    stats: [
      { label: "Engineers", value: "120+" },
      { label: "Tech Stack", value: "50+" },
      { label: "Fill Rate", value: "92%" },
      { label: "Time to Hire", value: "48h" }
    ],
    roles: [
      { title: "Full-Stack Developer", desc: "Proficient in modern frameworks like React, Node.js, and Python." },
      { title: "Cloud Architect", desc: "AWS, Azure, and GCP certified professionals for scalable infrastructure." },
      { title: "AI/ML Specialist", desc: "Data scientists and engineers focused on neural networks and predictive modeling." }
    ]
  },
  logistics: {
    title: "Logistics",
    subtitle: "Supply Chain Mastery",
    heroImage: logisticsImg,
    description: "Optimizing global trade routes with specialized talent in logistics, warehousing, and distribution.",
    stats: [
      { label: "Operations", value: "45+" },
      { label: "Cost Reduction", value: "15%" },
      { label: "Network", value: "Global" },
      { label: "Uptime", value: "99.9%" }
    ],
    roles: [
      { title: "Supply Chain Analyst", desc: "Data-driven experts optimizing inventory and distribution networks." },
      { title: "Warehouse Director", desc: "Strategic leaders for large-scale fulfillment and distribution centers." },
      { title: "Freight Coordinator", desc: "Specialists in international shipping, customs, and multi-modal transport." }
    ]
  },
  healthcare: {
    title: "Healthcare",
    subtitle: "Medical Innovation",
    heroImage: healthcareImg,
    description: "Supporting the healthcare industry with specialized medical staffing and health-tech professionals.",
    stats: [
      { label: "Placements", value: "60+" },
      { label: "Compliance", value: "100%" },
      { label: "Satisfaction", value: "96%" },
      { label: "Response", value: "24h" }
    ],
    roles: [
      { title: "Health-Tech Developer", desc: "Engineers building HIPAA-compliant software and telemedicine platforms." },
      { title: "Medical Administrator", desc: "Leaders for clinical operations and healthcare facility management." },
      { title: "Data Privacy Officer", desc: "Experts in medical data security and regulatory compliance." }
    ]
  }
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/candidate-portal" element={<CandidatePortal />} />
          
          {/* Industry Routes */}
          <Route path="/industries/manufacturing" element={<IndustryTemplate {...industryData.manufacturing} />} />
          <Route path="/industries/technology" element={<IndustryTemplate {...industryData.technology} />} />
          <Route path="/industries/logistics" element={<IndustryTemplate {...industryData.logistics} />} />
          <Route path="/industries/healthcare" element={<IndustryTemplate {...industryData.healthcare} />} />
          
          {/* Solutions Routes (Placeholder for now, using template for demo) */}
          <Route path="/solutions/tech-staffing" element={<IndustryTemplate {...industryData.technology} title="Elite Tech Staffing" />} />
          <Route path="/solutions/software-dev" element={<IndustryTemplate {...industryData.technology} title="Bespoke Software Development" />} />
          <Route path="/solutions/training" element={<IndustryTemplate {...industryData.technology} title="Global Training Programs" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
