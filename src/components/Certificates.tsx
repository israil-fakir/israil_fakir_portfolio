import { useState } from 'react';
import {
  Calendar,
  ExternalLink,
  Shield,
  Network,
  TerminalSquare,
  Code,
  BrainCircuit
} from 'lucide-react';

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Certificates');

  const categoryColors: Record<string, string> = {
    "System Administration": "bg-red-600/20 text-red-400",
    "Artificial Intelligence": "bg-indigo-600/20 text-indigo-400",
    "Version Control": "bg-green-600/20 text-green-400",
    "Cybersecurity": "bg-yellow-600/20 text-yellow-400",
    "Data Science": "bg-indigo-600/20 text-indigo-400",
    "Web Development" :  "bg-cyan-600/20 text-cyan-400"
  };

  const certificates = [
    {
      title: "Full Stack Development with MERN",
      issuer: "Grameenphone Academy",
      date: "2025",
      description: "Completed a hands-on MERN stack program by Grameenphone Academy in collaboration with CodersTrust, focusing on building responsive full-stack web applications using MongoDB, Express.js, React, and Node.js.",
      link: "https://www.grameenphone.academy/cert/299f0ba21f35",
      icon: <Shield className="w-6 h-6" />,
      category: "Web Development"
    }, 
    {
      title: "Certificate of Excellence in AI & ML Fundamentals",
      issuer: "Grameenphone Academy",
      date: "2025",
      description: "Recognized for completing the AI & ML Fundamentals course, covering core concepts, ethical aspects, and practical applications through project-based learning.",
      link: "https://www.grameenphone.academy/cert/509fa8b707fa",
      icon: <Shield className="w-6 h-6" />,
      category: "Artificial Intelligence"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "2025",
      description: "Validated foundational knowledge of AI concepts, including machine learning, neural networks, and ethical use cases across industries.",
      link: "https://www.credly.com/org/ibm-skillsbuild/badge/artificial-intelligence-fundamentals",
      icon: <Shield className="w-6 h-6" />,
      category: "Artificial Intelligence"
    },
    {
      title: "Data Science Essentials With Python",
      issuer: "Cisco",
      date: "2025",
      description: "Gained foundational skills in data science using Python, covering data analysis, visualization, and basic machine learning through hands-on labs.",
      link: "https://www.credly.com/badges/a6396aa4-a036-433b-887a-68b5b35788e4",
      icon: <Shield className="w-6 h-6" />,
      category: "AI / ML / Data Science"
    },
    {
      title: "Red Hat System Administration Certificate I (RH124 - RHA) - Ver. 9.3",
      issuer: "Red Hat",
      date: "2025",
      description: "Comprehensive certification in Linux system administration, covering user management, file systems, and network configuration.",
      link: "https://www.credly.com/badges/ae5a0d48-7e5d-4777-8254-760d58d7d105/public_url",
      icon: <Shield className="w-6 h-6" />,
      category: "System Administration"
    },
    {
      title: "AI+ Prompt Engineer Level 1",
      issuer: "AI Certification Board",
      date: "2025",
      description: "Advanced certification in AI prompt engineering, covering natural language processing and AI model optimization techniques.",
      link: "https://drive.google.com/file/d/1EcTjAc7hqLM_2K7VUoMD6RhobtAQ9lKh/view?usp=drive_link",
      icon: <BrainCircuit className="w-6 h-6" />,
      category: "Artificial Intelligence"
    },
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Red Hat Academy & UIU",
      date: "2025",
      description: "Completed a career path course on Linux system administration, covering user management, networking, file systems, and system security. Organized by CENTeR and Red Hat Academy at United International University.",
      link: "https://drive.google.com/file/d/1y59gC5BruMNZN7lx6lTl1_yugS7NRBxi/view?usp=drive_link",
      icon: <Network className="w-6 h-6" />,
      category: "System Administration"
    },
    {
      title: "Master Git and GitHub – Beginner to Expert",
      issuer: "Udemy · Instructor: Anisul Islam",
      date: "2024",
      description: "Completed a 4-hour hands-on course covering Git fundamentals, GitHub workflows, branching, merging, pull requests, and collaborative version control practices.",
      link: "https://ude.my/UC-043f5287-907b-4828-887b-fb41c63ad7b5",
      icon: <Code className="w-6 h-6" />,
      category: "Version Control"
    },
    {
      title: "Basic Ethical Hacking Course Certificate",
      issuer: "Cybersecurity Institute",
      date: "2023",
      description: "Fundamental understanding of ethical hacking principles, penetration testing methodologies, and security assessment techniques.",
      link: "https://drive.google.com/file/d/1pswfLZ5lGI00sdk9JXC42FDCgQlaTuuL/view?usp=drive_link",
      icon: <TerminalSquare className="w-6 h-6" />,
      category: "Cybersecurity"
    }
  ];

  const categories = [...new Set(certificates.map(cert => cert.category))];

  const filteredCertificates = selectedCategory === 'All Certificates'
    ? certificates
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certificates" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-blue-400">Certificates & Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Professional certifications and credentials that validate my expertise in various technology domains.
          </p>
        </div>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('All Certificates')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'All Certificates'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            All Certificates
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-blue-400">{cert.icon}</div>
                <div className="flex items-center text-slate-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {cert.date}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-400 font-medium mb-2">{cert.issuer}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${categoryColors[cert.category] || 'bg-slate-700/20 text-slate-300'}`}>
                  {cert.category}
                </span>
              </div>

              <p className="text-slate-300 text-sm mb-6">{cert.description}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
