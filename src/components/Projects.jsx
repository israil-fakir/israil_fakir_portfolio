import { ExternalLink, Github } from 'lucide-react'; 
import projects from "../data/projects.json"


const Projects = () => { 
  return (
    <section id="projects" className="py-10 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-blue-400">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-16"></div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-400/50 transition-colors group"
            >
              {/* Project image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.sourceLink && (
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>

                {/* Technologies used */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-blue-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-blue-400 mb-2">Key Features:</h4>
                  <ul className="text-slate-400 text-sm space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.sourceLink && (
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;