import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleAnchorClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'How It Works', href: '/#how-it-works', anchor: 'how-it-works' },
    { name: 'For You', href: '/#personas', anchor: 'personas' },
    { name: 'Features', href: '/#features', anchor: 'features' },
    { name: 'Pricing', href: '/#pricing', anchor: 'pricing' },
    { name: 'About', href: '/about', anchor: null },
  ];

  const linkClass = (isActive: boolean) =>
    `text-gray-700 hover:text-mentra-blue transition-colors duration-200 font-medium relative px-1 focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 rounded-md ` +
    (isActive ? 'text-mentra-blue font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-mentra-blue after:rounded-full after:content-[""]' : '');

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
          <Link
            to="/"
            aria-label="Mentra - Return to homepage"
            className="focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 rounded-md"
          >
            <img
              src="/images/logos/mentra-logo-color.png"
              alt="Mentra Logo"
              width="200"
              height="80"
              className="h-12 w-auto sm:h-16 md:h-20 flex-shrink-0"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-shrink-0"
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            if (item.anchor) {
              const isActive = location.pathname === '/' && location.hash === `#${item.anchor}`;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleAnchorClick(item.anchor)}
                  className={linkClass(isActive)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </a>
              );
            }
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={linkClass(isActive)}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block flex-shrink-0">
          <Button
            className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:animate-glow focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
            aria-label="Start your journey with Mentra"
            onClick={handleAnchorClick('pricing')}
          >
            Start Journey
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
              if (item.anchor) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleAnchorClick(item.anchor)}
                    className="text-gray-700 hover:text-mentra-blue transition-colors duration-200 font-medium px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 rounded-md"
                  >
                    {item.name}
                  </a>
                );
              }
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-mentra-blue transition-colors duration-200 font-medium px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="px-4 pt-2">
              <Button
                className="w-full bg-mentra-blue hover:bg-mentra-blue/90 text-white px-6 py-2 rounded-full font-medium focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2"
                aria-label="Start your journey with Mentra"
                onClick={handleAnchorClick('pricing')}
              >
                Start Journey
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
