import React from 'react';
import { Heart, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How it Works', href: '/how-it-works' },
      { name: 'Educators', href: '/educators' },
      { name: 'Parents', href: '/parents' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Security', href: '#security' }
    ],
    resources: [
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
    <footer 
      className="bg-gray-900 text-white relative overflow-hidden"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
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
            <ul className="space-y-3" role="list">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-mentra-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-1"
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
            <ul className="space-y-3" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-growth-green transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-growth-green focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-1"
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
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-curiosity-coral transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-curiosity-coral focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-5 h-5 text-mentra-blue" aria-hidden="true" />
              <span className="text-gray-300">hello@mentra.ai</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-growth-green" aria-hidden="true" />
              <span className="text-gray-300">San Francisco, CA</span>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <Heart className="w-5 h-5 text-curiosity-coral" aria-hidden="true" />
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
            <a 
              href="#privacy" 
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-1"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-1"
            >
              Terms of Service
            </a>
            <a 
              href="#cookies" 
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-1"
            >
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Social Links (desktop only) */}
        <div 
          className="hidden md:flex items-center space-x-4 mt-4"
          role="navigation"
          aria-label="Social media links"
        >
          <a 
            href="https://github.com/your-org" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visit our GitHub page"
            className="focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1"
          >
            <svg width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-mentra-blue transition-colors" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a 
            href="https://twitter.com/yourhandle" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Follow us on X (Twitter)"
            className="focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1"
          >
            {/* X (Twitter) Logo SVG */}
            <svg width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-mentra-blue transition-colors" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.53 2.47A6.5 6.5 0 0 0 12 0a6.5 6.5 0 0 0-5.53 2.47A6.5 6.5 0 0 0 0 12a6.5 6.5 0 0 0 2.47 5.53A6.5 6.5 0 0 0 12 24a6.5 6.5 0 0 0 5.53-2.47A6.5 6.5 0 0 0 24 12a6.5 6.5 0 0 0-2.47-5.53zM19.07 19.07A8.5 8.5 0 1 1 4.93 4.93a8.5 8.5 0 0 1 14.14 14.14zm-9.07-3.07h2.5l2.5-3.5-2.5-3.5h-2.5l2.5 3.5-2.5 3.5z"/>
            </svg>
          </a>
          <a 
            href="https://instagram.com/yourhandle" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Follow us on Instagram"
            className="focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1"
          >
            {/* Instagram Logo SVG */}
            <svg width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-pink-500 transition-colors" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37 2.668 2.337 2.396 3.51 2.338 4.788.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.33 2.45 1.297 3.417.967.967 2.14 1.239 3.417 1.297C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.33 3.417-1.297.967-.967 1.239-2.14 1.297-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.33-2.45-1.297-3.417-.967-.967-2.14-1.239-3.417-1.297C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
          </a>
          <a 
            href="https://linkedin.com/company/yourcompany" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Connect with us on LinkedIn"
            className="focus:outline-none focus:ring-2 focus:ring-mentra-blue focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1"
          >
            <svg width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-mentra-blue transition-colors" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.6v5.596z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
