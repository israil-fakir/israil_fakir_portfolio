import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Phone, Youtube, Facebook, Instagram, X } from 'lucide-react';
// import profileImg from './image/';
import profileImg from '../image/profile.png';
// src\image\Adobe Express - file.png
// Hero component - the main landing section
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Simple background */}
      <div className="absolute inset-0 bg-blue-900/5"></div>

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-stretch">
        
        {/* Left side: text + buttons + socials anchored at bottom */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left md:pr-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-blue-400">Md. Israil Fakir</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-6">
              MERN Stack Developer
            </h2>

            {/* Image for mobile only - shown after title */}
            <div className="md:hidden flex justify-center mb-8">
              <img
                src="src/image/Adobe Express - file.png"
                alt="Profile"
                className="w-48 h-48 object-contain"
              />
            </div>

            <p className="text-lg text-slate-400 max-w-3xl mx-auto md:mx-0 mb-8">
              Computer Science and Engineering student passionate about creating beautiful, 
              functional web applications using modern technologies like React, TailwindCSS, NodeJS, ExpressJS, and MongoDB.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
              
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                View Projects
              </a>
            </div>

            {/* Contact information */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-slate-400 mb-12">
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
            <div className="flex justify-center md:justify-start space-x-6 mb-12">
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
            
        {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">
            <ArrowDown className="w-8 h-8" />
          </a>
        </div> */}

          </div>
        </div>

        {/* Right side: image - hidden on mobile, shown on desktop */}
        <div className="hidden md:flex flex-1 justify-center md:justify-end items-center">
          <img src={profileImg} alt="Profile" className="w-64 h-170 md:w-80 lg:w-96 object-contain"/>
          {/* <img
            src="src/image/Adobe Express - file.png"
            alt="Profile"
            className="w-64 h-170 md:w-80 lg:w-96 object-contain"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;