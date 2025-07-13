import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) &&
          menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Educators', href: '/educators' },
    { name: 'Parents', href: '/parents' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header 
      className={`sticky top-0 w-full z-50 h-16 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a 
            href="/" 
            aria-label="Mentra - Return to homepage"
            className="focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 rounded-md"
          >
            <img 
              src="/lovable-uploads/f05d5e11-f8b1-4798-ba3d-a85133efccfd.png" 
              alt="Mentra Logo" 
              className="h-16 w-auto md:h-20 flex-shrink-0"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-shrink-0"
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.href || (item.href !== '/' && location.hash === item.href);
            if (item.name === 'Features') {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={e => {
                    if (location.pathname !== '/') {
                      e.preventDefault();
                      window.location.href = '/#features';
                    }
                  }}
                  className={
                    `text-gray-700 hover:text-mentra-blue transition-colors duration-200 font-medium relative px-1 focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 rounded-md ` +
                    (location.pathname === '/' && location.hash === '#features' ? 'text-mentra-blue font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-mentra-blue after:rounded-full after:content-["\""]' : '')
                  }
                  aria-current={location.pathname === '/' && location.hash === '#features' ? 'page' : undefined}
                >
                  {item.name}
                </a>
              );
            }
            return (
              <a
                key={item.name}
                href={item.href}
                className={
                  `text-gray-700 hover:text-mentra-blue transition-colors duration-200 font-medium relative px-1 focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 rounded-md ` +
                  (isActive ? 'text-mentra-blue font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-mentra-blue after:rounded-full after:content-["\""]' : '')
                }
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block flex-shrink-0">
          <Button 
            className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:animate-glow focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
            aria-label="Start your journey with Mentra"
            asChild
          >
            <a href="/pricing">
              Start Journey
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="md:hidden w-12 h-12 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          ref={mobileMenuRef}
          id="mobile-menu"
          className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href || (item.href !== '/' && location.hash === item.href);
              if (item.name === 'Features') {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={e => {
                      if (location.pathname !== '/') {
                        e.preventDefault();
                        window.location.href = '/#features';
                      }
                    }}
                    className="text-gray-700 hover:text-mentra-blue transition-colors duration-200 font-medium px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 rounded-md"
                    aria-current={location.pathname === '/' && location.hash === '#features' ? 'page' : undefined}
                    onFocus={() => setIsMenuOpen(true)}
                    onBlur={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-mentra-blue transition-colors duration-200 font-medium px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="px-4 pt-2">
              <Button 
                className="w-full bg-mentra-blue hover:bg-mentra-blue/90 text-white px-6 py-2 rounded-full font-medium focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                aria-label="Start your journey with Mentra"
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <a href="/pricing">
                  Start Journey
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
