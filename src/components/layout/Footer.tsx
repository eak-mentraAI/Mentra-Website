import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleAnchorClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer
      className="bg-gray-900 text-white"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <img
              src="/images/logos/mentra-logo-color.png"
              alt="Mentra Logo"
              width="200"
              height="80"
              className="h-12 w-auto sm:h-16 md:h-20"
              loading="lazy"
            />
            <p className="text-gray-400 leading-relaxed text-sm">
              AI that builds independent thinkers — not dependent users. Students grow, teachers lead, parents control.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Resources</h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <a href="/#faq" onClick={handleAnchorClick('faq')} className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/press" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Company</h3>
            <ul className="space-y-3" role="list">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <a href="mailto:hello@mentra.ai" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Get in touch</h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gray-500" aria-hidden="true" />
                <span className="text-gray-300 text-sm">hello@mentra.ai</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-gray-500" aria-hidden="true" />
                <span className="text-gray-300 text-sm">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Mentra. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
