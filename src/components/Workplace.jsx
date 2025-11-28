import React from 'react';
import { Building2, Calendar, MapPin, ExternalLink, Code, Users, Rocket } from 'lucide-react';

const Workplace = () => {
  const workExperience = [
    {
      company: "Zensoft Lab",
      position: "Frontend Developer (Intership)",
      period: "Oct 2025 - Present",
      location: "Dhaka, Bangladesh",
      description: "Working as a Frontend Developer, contributing to modern web applications using cutting-edge technologies.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Next.js", "JavaScript"],
      achievements: [
        "Developing responsive and interactive user interfaces",
        "Collaborating with cross-functional teams",
        "Implementing modern UI/UX designs",
        "Optimizing application performance"
      ],
      companyUrl: "https://zensoftlab.com/",
      icon: <Code className="w-6 h-6" />
    },
    
  ];

  return (
    <section id="workplace" className="py-10 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-blue-400">Work Experience</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My professional journey and contributions in the tech industry
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {workExperience.map((work, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < workExperience.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-blue-400/30"></div>
              )}
              
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 p-8 ml-0 lg:ml-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left side - Company info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                        {work.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {work.position}
                        </h3>
                        <div className="flex items-center gap-2 text-lg text-blue-400 font-semibold mb-3">
                          <Building2 className="w-5 h-5" />
                          {work.company}
                          {work.companyUrl && (
                            <a
                              href={work.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-blue-400 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Period and Location */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span>{work.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        <span>{work.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      {work.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {work.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50 hover:bg-blue-600/20 hover:text-blue-300 hover:border-blue-400/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right side - Achievements */}
                  <div className="lg:w-80">
                    <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/30">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-blue-400" />
                        Key Contributions
                      </h4>
                      <ul className="space-y-3">
                        {work.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start text-slate-300 text-sm">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Current Status Indicator */}
          {/* <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-600/20 text-green-400 rounded-full border border-green-600/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Currently Employed</span>
            </div>
            <p className="text-slate-400 mt-4">
              Open to new opportunities and collaborations
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Workplace;