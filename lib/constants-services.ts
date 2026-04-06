import { HardHat, Zap, Droplets } from 'lucide-react';

export const serviceDetails = [
  {
    id: "construction",
    title: "Residential Construction Services",
    subtitle: "Upgrades, Refurbishments & Repairs",
    description: "At ZK Construction Group, we deliver practical, high-quality building services tailored for residential properties and community housing across Queensland. We focus on reliable workmanship, fast turnaround, and solutions that hold up in harsh environments—especially in remote and regional areas.",
    features: [
      "Bathroom renovations and upgrades",
      "Kitchen supply, installation, and fit-offs",
      "Internal refurbishments and property upgrades",
      "Wall, ceiling, and flooring repairs",
      "Door and window replacements",
      "Structural rectification and general carpentry",
      "Wet area repairs and waterproofing works",
      "Damage repairs (water, wear and tear, ageing assets)",
      "Pre-start inspections and scope validation",
      "End-of-job quality checks and handover"
    ],
    icon: HardHat,
    image: "/Construction.jpeg"
  },
  {
    id: "electrical",
    title: "Electrical Services",
    subtitle: "Residential & Maintenance Focused",
    description: "All electrical work is carried out to Australian Standards with safety and long-term reliability front of mind. We don’t overcomplicate things. We get in, do the job properly, and make sure it lasts.",
    features: [
      "Fault finding and electrical diagnostics",
      "Power and lighting installations and upgrades",
      "Switchboard upgrades (including RCD/RCBO compliance)",
      "Replacement of damaged or unsafe wiring",
      "Smoke alarm installation and compliance upgrades",
      "Indoor and outdoor lighting (LED upgrades, battens, oyster lights)",
      "Appliance connections (cooktops, ovens, hot water systems)",
      "Safety inspections and defect rectification",
      "Moisture and corrosion-related electrical repairs",
      "Testing and commissioning of all installed works"
    ],
    icon: Zap,
    image: "/Electrician1.jpeg"
  },
  {
    id: "plumbing",
    title: "Plumbing Services",
    subtitle: "Practical, No-BS Plumbing Solutions",
    description: "We focus on practical, no-BS plumbing solutions—fix the issue properly, not patch it. Whether it's a minor leak or major system replacement, our work is built for regional conditions and real-world use.",
    features: [
      "Leak detection and pipe repairs",
      "Replacement of damaged or ageing pipework",
      "Tapware, fixtures, and fitting replacements",
      "Toilet repairs and installations",
      "Hot water system installation and replacement",
      "Drain clearing and blockage removal",
      "Stormwater and surface drainage repairs",
      "Bathroom and kitchen plumbing fit-offs",
      "Pressure testing and system checks",
      "Ongoing maintenance and preventative works"
    ],
    icon: Droplets,
    image: "/Plumber.jpeg"
  }
];

export const coreServices = [
  {
    title: "Construction",
    description: "Multi-trade construction, site work, and earthmoving. Built for remote conditions and high-quality residential standards.",
    icon: HardHat,
    accent: "#FF6B00",
    image: "/Construction.jpeg",
    link: "/services#construction"
  },
  {
    title: "Electrical",
    description: "Comprehensive electrical solutions from switchboard upgrades to fault finding, ensuring safety and compliance in all environments.",
    icon: Zap,
    accent: "#007AFF",
    image: "/Electrician1.jpeg",
    link: "/services#electrical"
  },
  {
    title: "Plumbing",
    description: "Reliable civil and maintenance plumbing. Practical solutions for drainage, hot water, and remote site infrastructure.",
    icon: Droplets,
    accent: "#00D2FF",
    image: "/Plumber.jpeg",
    link: "/services#plumbing"
  }
];

export const workProcess = [
  {
    title: "Fast Mobilisation",
    desc: "Including remote deployment and emergency response.",
    icon: "01"
  },
  {
    title: "In-House Logistics",
    desc: "All labour, materials, and logistics handled in-house for total control.",
    icon: "02"
  },
  {
    title: "Trade Coordination",
    desc: "Seamless coordination of multiple trades to avoid downtime.",
    icon: "03"
  },
  {
    title: "Clear Communication",
    desc: "Clear scope, no guesswork, and zero hidden extras on every job.",
    icon: "04"
  },
  {
    title: "Regional Built",
    desc: "Solutions built for harsh regional conditions and real-world use.",
    icon: "05"
  },
  {
    title: "Safety First",
    desc: "Full transparency and safety compliance on every site, every time.",
    icon: "06"
  }
];
