import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../asset/israil_fakir_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY < 10 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);

      const sections = [
        "home", "about", "workplace", "skills",
        "projects", "education", "certificates", "resume", "contact"
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
    setIsOpen(false);
  };

  const navItem = (id, label) => (
    <li key={id}>
      <button
        onClick={(e) => handleNavClick(e, id)}
        className={`text-lg px-4 py-2 rounded-full transition-all duration-300 hover:text-base ${
          activeSection === id
            ? "font-semibold backdrop-blur-md text-white"
            : "font-normal hover:backdrop-blur-md hover:text-white text-slate-300"
        }`}
        style={{
          backgroundColor: activeSection === id ? "rgba(59, 130, 246, 0.2)" : "transparent",
        }}
      >
        {label}
      </button>
    </li>
  );

  const navItems = [
    "home", "about", "workplace", "skills",
    "projects", "education", "certificates", "resume"
  ];

  const mobileNavItems = [...navItems, "contact"];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } px-4 sm:px-6 py-2 sm:py-3`}
      style={{ background: "transparent" }}
    >
      <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-2">

        {/* Mobile Top Row */}
        <div className="w-full flex items-center justify-between lg:hidden">

          {/* Mobile Menu Button */}
          <button
            className="btn btn-ghost hover:bg-blue-500/10 transition-all duration-300 p-2 text-blue-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Centered Logo */}
          <button onClick={(e) => handleNavClick(e, "home")} className="mx-auto">
            <img src={logo} alt="Logo" className="h-auto w-24" />
          </button>

          {/* Contact Button */}
          <button
            onClick={(e) => handleNavClick(e, "contact")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl py-2 px-3 text-sm hover:scale-105 transition-all"
          >
            Contact
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="w-full mt-2 rounded-xl shadow-lg border border-slate-700 p-3 z-50 lg:hidden backdrop-blur-xl"
               style={{ background: "rgba(15, 23, 42, 0.6)" }}>
            <ul className="flex flex-col gap-2">
              {mobileNavItems.map((id) => navItem(id, id.charAt(0).toUpperCase() + id.slice(1)))}
            </ul>
          </div>
        )}

        {/* Desktop Navbar */}
        <div className="hidden lg:flex w-full items-center justify-between">

          {/* Logo */}
          <button onClick={(e) => handleNavClick(e, "home")} className="hover:scale-105 transition-transform cursor-pointer">
            <img src={logo} alt="Logo" className="h-auto w-24" />
          </button>

          {/* Navigation */}
          <div
            className="border rounded-full backdrop-blur-sm px-2"
            style={{
              borderColor: "rgba(59, 130, 246, 0.3)",
              background: "rgba(15, 23, 42, 0.4)"
            }}
          >
            <ul className="menu menu-horizontal px-1 gap-1 flex items-center">
              {navItems.map((id) => navItem(id, id.charAt(0).toUpperCase() + id.slice(1)))}
            </ul>
          </div>

          {/* Contact Button */}
          <button
            onClick={(e) => handleNavClick(e, "contact")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl py-2 px-4 hover:scale-105 transition-all"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
