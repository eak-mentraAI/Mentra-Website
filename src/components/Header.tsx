import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header className={`sticky top-0 w-full z-50 h-16 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        {/* Logo - Made bigger */}
        <div className="flex items-center space-x-2">
          <a href="/" aria-label="Home">
            <img 
              src="/lovable-uploads/f05d5e11-f8b1-4798-ba3d-a85133efccfd.png" 
              alt="Mentra Logo" 
              className="h-16 w-auto md:h-20 flex-shrink-0"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-shrink-0">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href || (item.href !== '/' && location.hash === item.href);
            return (
              <a
                key={item.name}
                href={item.href}
                className={
                  `text-gray-700 hover:text-mentra-blue transition-colors duration-200 font-medium relative px-1 ` +
                  (isActive ? 'text-mentra-blue font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-mentra-blue after:rounded-full after:content-[""]' : '')
                }
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block flex-shrink-0">
          <Button className="bg-mentra-blue hover:bg-mentra-blue/90 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:animate-glow focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2">
            Start Learning
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-12 h-12 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-mentra-blue transition-colors duration-200 font-medium px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button className="w-full bg-mentra-blue hover:bg-mentra-blue/90 text-white px-6 py-2 rounded-full font-medium">
                Start Learning
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
