import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Send, Facebook, Youtube, Instagram, X } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

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
    { name: "LinkedIn", icon: <Linkedin className="w-6 h-6" />, url: "https://www.linkedin.com/in/israil-fakir/", color: "hover:text-blue-400" },
    { name: "GitHub", icon: <Github className="w-6 h-6" />, url: "https://github.com/israil-fakir", color: "hover:text-slate-300" },
    { name: "Facebook", icon: <Facebook className="w-6 h-6" />, url: "https://www.facebook.com/keyfakir/", color: "hover:text-slate-300" },
    { name: "Youtube", icon: <Youtube className="w-6 h-6" />, url: "https://www.youtube.com/@ifakir", color: "hover:text-slate-300" },
    { name: "Instagram", icon: <Instagram className="w-6 h-6" />, url: "https://www.instagram.com/israil_fakir_robin/", color: "hover:text-slate-300" },
    { name: "X", icon: <X className="w-6 h-6" />, url: "https://x.com/israil_fakir", color: "hover:text-slate-300" }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'Contact from Portfolio',
      message: formData.message,
      to_name: 'Israil Fakir',
      reply_to: formData.email
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, (error) => {
      console.error('Email send failed:', error);
      alert('Failed to send message. Please try again or contact me directly at israilfakirrobin@gmail.com');
    })
    .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="py-10 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-blue-400">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or just having a chat about technology. 
            Feel free to reach out!
          </p>
        </div>

        {/* Main content - two columns */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - first on mobile, right on desktop */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-8 text-white">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div data-error={!!errors.name}>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div data-error={!!errors.email}>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div data-error={!!errors.message}>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 ${
                  isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 hover:scale-105'
                }`}
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information - second on mobile, left on desktop */}
          <div className="order-2 lg:order-1">
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

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800 rounded-lg border border-slate-700 text-slate-400 ${social.color} transition-colors hover:scale-110 transform duration-300`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
