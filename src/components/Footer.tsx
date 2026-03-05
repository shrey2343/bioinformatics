import { Dna, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dna className="w-8 h-8 text-teal-500" />
              <h3 className="text-xl font-bold text-white">
                <span>Bio</span>
                <span className="text-teal-500">tech</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Pioneering innovative biotechnology solutions for a healthier tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-teal-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/biotechnology" className="hover:text-teal-500 transition-colors">Biotechnology</Link>
              </li>
              <li>
                <Link to="/genetics" className="hover:text-teal-500 transition-colors">Genetics</Link>
              </li>
              <li>
                <Link to="/bioinformatics" className="hover:text-teal-500 transition-colors">Bioinformatics</Link>
              </li>
              <li>
                <Link to="/proteomics" className="hover:text-teal-500 transition-colors">Proteomics</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@biotech.com" className="hover:text-teal-500 transition-colors">
                    info@biotech.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+15551234567" className="hover:text-teal-500 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <div>
                  123 Biotech Avenue<br />
                  Science Park, CA 94025
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2026 Biotech. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm justify-center">
              <Link to="/privacy-policy" className="hover:text-teal-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="hover:text-teal-500 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/cookie-policy" className="hover:text-teal-500 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
