import { ExternalLink, Github } from 'lucide-react';

// Projects component - showcases your work
const Projects = () => {

  const projects = [
    {
      title: "Green Chats Application",
      description: "A real-time chat application with modern UI design, supporting image and emoji sharing with attractive user interface.",
      technologies: ["TailwindCSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
      features: ["Real-time chatting", "Image and emoji sending", "Attractive design"],
      liveLink: "https://green-chat-app.onrender.com/",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "To-Do List with Weather",
      description: "A productivity app that combines task management with live weather information, featuring full CRUD operations and weather API integration.",
      technologies: ["TailwindCSS", "JavaScript", "React.js", "OpenWeatherMap API"],
      features: ["Add, delete, rename and check/uncheck tasks", "Displays current date", "Shows weather data (temperature, description, humidity)"],
      liveLink: "https://to-do-list-with-weather.vercel.app/",
      image: "https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "GUB Fee Management System",
      description: "A comprehensive desktop application for managing university fee records with advanced search, filtering, and reporting capabilities.",
      technologies: ["Java (Swing)", "MySQL", "XAMPP"],
      features: ["Add, edit, and delete fee records", "Manage course information and pricing", "Search and filter fee records", "Generate printable reports and export to Excel or PDF"],
      sourceLink: "https://github.com/israil-fakir/Fee_Management_System.git",
      image: "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "YouTube Downloader using YT-DLP",
      description: "A lightweight batch-based tool for downloading YouTube videos and playlists in MP4 format using YT-DLP and FFmpeg. Designed for Windows 11 with a simple setup and user-friendly execution.",
      technologies: ["Batch Script", "YT-DLP", "FFmpeg", "Python"],
      features: [
        "Download single videos or entire playlists",
        "Supports MP4 format output",
        "Simple double-click batch execution",
        "Setup guide for Python, YT-DLP, and FFmpeg integration"
      ],
      sourceLink: "https://github.com/israil-fakir/youtube_downloader_using_YT-DLP",
      image: "https://images.pexels.com/photos/5077060/pexels-photo-5077060.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Group Chat App in Go",
      description: "A terminal-based multi-user chat application built with Go. Supports real-time messaging over TCP with username registration, broadcast system, and join/leave notifications.",
      technologies: ["Go (Golang)", "TCP", "Goroutines", "Channels", "Mutex"],
      features: [
        "Multi-client support via TCP",
        "Username-based messaging",
        "Broadcast messages to all users",
        "Real-time communication in terminal",
        "Join/leave notifications for active users"
      ],
      sourceLink: "https://github.com/israil-fakir/group_chat_go",
      image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "GUB Hostel Management System",
      description: "A web-based hostel management system developed for Green University of Bangladesh. Handles student registration, login, and admin dashboard with database integration and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      features: [
        "Student registration and login system",
        "Admin dashboard with student info management",
        "Database creation and interaction via PHP",
        "Responsive UI with custom CSS",
        "Basic form validation using JavaScript"
      ],
      sourceLink: "https://github.com/israil-fakir/gub_hostal_management",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "8 Puzzle Game – AI Lab Project",
      description: "A classic 8-tile puzzle game built with Pygame for an Artificial Intelligence Lab course. Includes manual gameplay and an automated solver using Breadth-First Search (BFS). Tracks time and high scores for performance analysis.",
      technologies: ["Python", "Pygame", "BFS Algorithm"],
      features: [
        "Manual tile movement via mouse",
        "Automated solution using Breadth-First Search",
        "Timer and high score tracking",
        "Randomized puzzle generation",
        "Simple UI built with Pygame"
      ],
      sourceLink: "https://github.com/israil-fakir/8-puzzle-game",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Auto Attendance System using AI",
      description: "An AI-powered attendance system that uses facial recognition to automate student check-ins. Developed as a collaborative project, with frontend UI designed for smooth user interaction and real-time feedback.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "OpenCV", "Face Recognition"],
      features: [
        "Facial recognition-based attendance logging",
        "Live camera feed integration",
        "Frontend UI for student and admin interaction",
        "Real-time attendance status display",
        "CSV-based record storage and export"
      ],
      sourceLink: "https://github.com/israil-fakir/auto-attendence-system-AI",
      image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "ATM System in Assembly Language",
      description: "A low-level simulation of an ATM interface built using x86 Assembly. Demonstrates core banking operations like balance inquiry, deposit, and withdrawal through text-based interaction.",
      technologies: ["Assembly Language", "x86 Architecture", "EMU8086"],
      features: [
        "User authentication via PIN",
        "Balance inquiry and update",
        "Deposit and withdrawal operations",
        "Text-based menu navigation",
        "Built and tested on EMU8086 emulator"
      ],
      sourceLink: "https://github.com/israil-fakir/ATM_System_in_assembly_language",
      image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "RIOS – Rakibul and Israil Operating System",
      description: "A custom-built operating system developed as a collaborative academic project. Demonstrates low-level system design concepts including bootloader setup, interrupt handling, and basic shell interface.",
      technologies: ["Assembly Language", "C", "x86 Architecture", "Operating System Concepts"],
      features: [
        "Custom bootloader and kernel initialization",
        "Basic shell interface for command execution",
        "Interrupt handling and memory management",
        "Built using Assembly and C for x86 systems",
        "Collaborative development with modular structure"
      ],
      sourceLink: "https://github.com/israil-fakir/RIOS_-Rakibul_and_Israil_operating_system",
      image: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=800"
    }

    
  ];

  return (
    <section id="projects" className="py-24 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-16"></div>
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