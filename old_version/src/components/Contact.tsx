import { Github, Linkedin, Mail, MapPin, Phone, Send, Facebook, Youtube, Instagram, X } from 'lucide-react';

// Contact component - contact information and form
const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "israilfakirrobin@gmail.com",
      link: "mailto:israilfakirrobin@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+880174-2143859",
      link: "tel:+8801742143859"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Narsingdi Sadar, Narsingdi, Dhaka",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/israil-fakir/",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/israil-fakir",
      color: "hover:text-slate-300"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://www.facebook.com/keyfakir/",
      color: "hover:text-slate-300"
    },
    {
      name: "Youtube",
      icon: <Youtube className="w-6 h-6" />,
      url: "https://www.youtube.com/@ifakir",
      color: "hover:text-slate-300"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/israil_fakir_robin/",
      color: "hover:text-slate-300"
    },
    {
      name: "X",
      icon: <X className="w-6 h-6" />,
      url: "https://x.com/israil_fakir",
      color: "hover:text-slate-300"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-blue-400">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or just having a chat about technology. 
            Feel free to reach out!
          </p>
        </div>

        {/* Main content - two columns */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group">
                  <div className="text-blue-400 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social media links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800 rounded-lg border border-slate-700 ${social.color} transition-colors`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Send Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;