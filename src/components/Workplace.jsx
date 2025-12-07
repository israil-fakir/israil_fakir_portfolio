import React from "react";
import * as Icons from "lucide-react";
import workExperience from "../data/workExperience.json";

const Workplace = () => {
  return (
    <section id="workplace" className="py-16 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-blue-400">Work Experience</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My professional journey and contributions in the tech industry
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-7xl mx-auto space-y-8">
          {workExperience.map((work, index) => {
            // ✅ Convert icon string → actual React component
            const IconComponent = Icons[work.icon];

            return (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                    {/* Left Column */}
                    <div className="flex-1">
                      {/* Icon + Title */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                          {IconComponent && (
                            <IconComponent className="w-6 h-6" />
                          )}
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {work.position}
                          </h3>

                          <div className="flex items-center gap-2 text-lg text-blue-400 font-semibold">
                            <Icons.Building2 className="w-5 h-5" />
                            {work.company}

                            {work.companyUrl && (
                              <a
                                href={work.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-blue-400 transition-colors"
                              >
                                <Icons.ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Period + Location */}
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-2 text-slate-300">
                          <Icons.Calendar className="w-4 h-4 text-blue-400" />
                          <span>{work.period}</span>
                        </div>

                        <div className="flex items-center gap-2 text-slate-300">
                          <Icons.MapPin className="w-4 h-4 text-blue-400" />
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

                    {/* Right Column - Achievements (Vertically Centered) */}
                    <div className="flex items-center justify-center lg:justify-end">
                      <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/30 w-full lg:max-w-md">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Icons.Rocket className="w-5 h-5 text-blue-400" />
                          Key Contributions
                        </h4>

                        <ul className="space-y-3">
                          {work.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start text-slate-300 text-sm leading-relaxed"
                            >
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workplace;