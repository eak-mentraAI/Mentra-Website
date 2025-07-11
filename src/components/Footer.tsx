import React from 'react';
import { Heart, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Security', href: '#security' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Help Center', href: '#help' },
      { name: 'Parent Guide', href: '#parent-guide' },
      { name: 'Educator Resources', href: '#educators' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Contact', href: '#contact' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-mentra-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-growth-green/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/f05d5e11-f8b1-4798-ba3d-a85133efccfd.png" 
                alt="Mentra Logo" 
                className="h-16 w-auto md:h-20 mb-2 mx-auto"
              />
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Empowering students to grow through AI-powered learning and emotional intelligence with Sprig, your trusted companion.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-mentra-blue transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-growth-green transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
              <a href="/about" className="hover:underline text-gray-600 block py-2 md:py-0">About Us</a>
              <a href="#features" className="hover:underline text-gray-600 block py-2 md:py-0">Features</a>
              <a href="#how-it-works" className="hover:underline text-gray-600 block py-2 md:py-0">How it Works</a>
              <a href="#blog" className="hover:underline text-gray-600 block py-2 md:py-0">Blog</a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-5 h-5 text-mentra-blue" />
              <span className="text-gray-300">hello@mentra.ai</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-growth-green" />
              <span className="text-gray-300">San Francisco, CA</span>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <Heart className="w-5 h-5 text-curiosity-coral" />
              <span className="text-gray-300">Made with love for learners</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Mentra. All rights reserved. Built for the next generation of learners.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Social Links (desktop only) */}
        <div className="hidden md:flex items-center space-x-4 mt-4">
          <a href="https://github.com/your-org" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-mentra-blue transition-colors" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-mentra-blue transition-colors" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
          </a>
          <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-mentra-blue transition-colors" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.6v5.596z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
