"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import Image from "next/image";
import ContactUs from "./ContactUs";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('section-hero');
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to determine which section is currently in view
  const getCurrentSection = () => {
    const sections = navItems.map(item => item.id);
    const headerHeight = 80; // Approximate header height
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        
        // Check if the section is in the viewport with some tolerance
        if (elementTop <= headerHeight + 50 && elementBottom > headerHeight) {
          return sections[i];
        }
      }
    }
    return 'section-hero';
  };

  // Update active section on scroll
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrolled = scrollY > 2;
      console.log('Scroll Y:', scrollY, 'Is Scrolled:', scrolled, 'Active Section:', activeSection);
      setIsScrolled(scrolled);
      
      // Debounce section detection for performance
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const currentSection = getCurrentSection();
        setActiveSection(currentSection);
      }, 10);
    };

    // Initial check
    const initialScrollY = window.scrollY;
    const initialScrolled = initialScrollY > 2;
    console.log('Initial Scroll Y:', initialScrollY, 'Initial Is Scrolled:', initialScrolled);
    setIsScrolled(initialScrolled);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Debug effect to log state changes
  useEffect(() => {
    console.log('State changed - isScrolled:', isScrolled, 'activeSection:', activeSection);
  }, [isScrolled, activeSection]);
  
  const navItems = [
    { name: "Home", id: "section-hero" },
    { name: "Why Us?", id: "why-choose" },
    { name: "Our Products", id: "our-products" },
    { name: "About Us", id: "about-us" },
    { name: "Testimonials", id: "testimonials-section" },
    { name: "FAQ", id: "faq-section" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      
      // Calculate position with header offset
      const yOffset = -headerHeight;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      // Fallback: scroll to approximate position based on section order
      const sections = [
        'section-hero',
        'why-choose', 
        'our-products',
        'about-us',
        'testimonials-section',
        'faq-section'
      ];
      const index = sections.indexOf(sectionId);
      if (index !== -1) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const scrollPosition = index * window.innerHeight;
        window.scrollTo({ top: scrollPosition - headerHeight, behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId); // Immediately update active section for better UX
    scrollToSection(sectionId);
    setMenuOpen(false); // Close mobile menu
  };

  const handleContactClick = () => {
    setContactModalOpen(true);
    setMenuOpen(false); // Close mobile menu
  };

  return (
    <>
      <ContactUs isOpen={isContactModalOpen} onClose={() => setContactModalOpen(false)} />
      {/* Floating Header */}
      <header className="fixed top-0 left-0 w-full z-[9999] transition-all duration-300" style={{
        width: '100%',
        height: '64px',
        opacity: 1,
        paddingTop: '8px',
        paddingRight: 'clamp(16px, 4vw, 80px)',
        paddingBottom: '8px',
        paddingLeft: 'clamp(16px, 4vw, 80px)',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(56px)',
        boxShadow: '0px 6.65px 5.32px 0px #00000007, 0px 22.34px 17.87px 0px #0000000B, 0px 100px 80px 0px #00000012'
      }}>
        <div className="max-w-full mx-auto flex items-stretch justify-between relative">
          {/* Logo */}
          <Image
            src="/img/logo.svg"
            alt="SniperThink Logo"
            width={371}
            height={44}
            className="cursor-pointer flex-shrink-0 lg:w-auto h-auto"
            onClick={() => scrollToSection('section-hero')}
          />

          {/* Desktop Nav - Centered */}
          <nav className="hidden lg:flex pt-[7px] items-center space-x-8 absolute left-1/2 transform -translate-x-1/2 pl-2000">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`nav-item transition-all height duration-300 hover:scale-105 font-medium cursor-pointer whitespace-nowrap pb-2 ${
                  activeSection === item.id 
                    ? 'text-white active' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              type="button"
              className="text-gray-300 hover:text-[#91C499] hover:bg-[#1A6262]/10 px-4 py-2 rounded transition-all duration-300"
            >
      
            </button>
            <button
              type="button"
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-4 py-2 rounded-60px cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Hamburger Icon - Mobile Only */}
          <div className="lg:hidden flex-shrink-0 w-12 h-12 flex items-center justify-center pr-[120px]">
            <button
              className="flex items-center justify-center w-full h-full rounded focus:outline-none bg-transparent border-none cursor-pointer"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              style={{
                WebkitAppearance: 'none',
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              {menuOpen ? (
                <X className="w-7 h-7 text-gray-300 stroke-2" />
              ) : (
                <Menu className="w-7 h-7 text-gray-300 stroke-2" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Transition */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[600px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
          }`}
          style={{
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="bg-[#0F0F11]/95 backdrop-blur-lg border-b border-gray-700/50 shadow-lg">
            <nav className="flex flex-col items-center space-y-6 py-8 px-4 border-gray-700/50 backdrop-blur-lg bg-[#0F0F11]/80">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="text-gray-300 hover:text-[#91C499] transition-all duration-300 font-medium text-xl cursor-pointer w-full text-center py-2"
                >
                  {item.name}
                </a>
              ))}
              <button
                type="button"
                onClick={handleContactClick}
                className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 py-3 rounded-60px cursor-pointer text-lg font-medium w-full max-w-xs"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Push page content down so it's not hidden under fixed header */}
      <div className="pt-[80px]"></div>
    </>
  );
}