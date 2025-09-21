import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Phone, Youtube, Facebook, Instagram, X} from 'lucide-react';

// Hero component - the main landing section
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-16">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      
      {/* Main content container */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          {/* Name with gradient text */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Md. Israil Fakir  
            </span>
          </h1>
          
          {/* Job title */}
          <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-6">
            Frontend Developer
          </h2>
          
          {/* Description */}
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Computer Science and Engineering student passionate about creating beautiful, 
            functional web applications using modern technologies like React and TailwindCSS.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          {/* Contact button */}
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </a>
          
          {/* Projects button */}
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            View Projects
          </a>
        </div>

        {/* Contact information */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 mb-12">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+880174-2143859</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>israilfakirrobin@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Narsingdi, Dhaka</span>
          </div>
        </div>

        {/* Social media links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://www.linkedin.com/in/israil-fakir/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://github.com/israil-fakir" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="mailto:israilfakirrobin@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Mail className="w-8 h-8" />
          </a>
          <a href="https://www.youtube.com/@ifakir" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Youtube className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com/keyfakir/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Facebook className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/israil_fakir_robin/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="https://x.com/israil_fakir" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
            <X className="w-8 h-8" />
          </a>
        </div>

        {/* Scroll down arrow */}
        <div>
          <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">
            <ArrowDown className="w-8 h-8 mx-auto" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;