import { Code, Database, Globe, Zap } from 'lucide-react';

// About component - tells visitors about you
const About = () => {

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following OOP principles"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Modern Web",
      description: "Building responsive applications with React, Next.js, and TailwindCSS"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Full Stack",
      description: "Experience with Node.js, MongoDB, MySQL, and cloud deployment"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    }
  ];

  return (
    <section id="about" className="py-10 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-blue-400">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-16"></div>
        </div>

        {/* Main content - two columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About text */}
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm Md. Israil Fakir, a Computer Science and Engineering student at Green University of Bangladesh, 
              passionate about programming, hardware, ethical hacking, and system design. I enjoy building projects 
              and learning through hands-on experience, applying object-oriented programming (OOP) to write clean, 
              maintainable code.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I have skills in C, C++, Java, JavaScript, TailwindCSS, React, Node.js, and Go, and I actively 
              use Docker for containerized development and deployment. My interests also extend to electrical devices, 
              with practical knowledge of electronic components and DC circuit design.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I love meeting new people and thrive in environments that challenge me to grow personally and professionally.
            </p>
          </div>

          {/* Right side - Skills highlights */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-colors"
                >
                  <div className="text-blue-400 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;