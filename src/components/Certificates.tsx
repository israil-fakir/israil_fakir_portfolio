import { useState } from 'react';
import { Calendar, ExternalLink, Shield, Network, TerminalSquare, Code, BrainCircuit} from 'lucide-react';

// Certificates component - shows your professional certifications
const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Certificates');

  const certificates = [
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
        link: "https://drive.google.com/file/d/1y59gC5BruMNZN7lx6lTl1_yugS7NRBxi/view?usp=drive_link", // replace with actual certificate link
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

  // Filter certificates based on selected category
  const filteredCertificates = selectedCategory === 'All Certificates' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certificates" className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certificates & Credentials
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
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
                <div className="text-blue-400">
                  {cert.icon}
                </div>
                <div className="flex items-center text-slate-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {cert.date}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-blue-400 font-medium mb-2">{cert.issuer}</p>
                <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                  {cert.category}
                </span>
              </div>

              <p className="text-slate-300 text-sm mb-6">
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificate
              </a>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info section */}
        <div className="mt-16">
          <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700/30 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Continuous Learning & Professional Development
            </h3>
            <p className="text-slate-400 mb-6 max-w-3xl mx-auto">
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my commitment to professional growth and expertise validation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span>• Industry Recognized</span>
              <span>• Skills Validated</span>
              <span>• Professional Growth</span>
              <span>• Continuous Learning</span>
            </div>
          </div>
        </div>   
    </section>
  );
};

export default Certificates;
