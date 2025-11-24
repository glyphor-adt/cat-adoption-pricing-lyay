import React from 'react';
import { Mail, Phone, Twitter, GitHub, LinkedIn } from 'lucide-react';
import { Link } from '@remix-run/react';

const Footer = () => {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 py-12 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2 text-neutral-500 dark:text-neutral-400" />
              <a href="mailto:info@example.com" className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                info@example.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-neutral-500 dark:text-neutral-400" />
              <a href="tel:+15551234567" className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <GitHub className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <LinkedIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Legal Disclaimers */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 text-center text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;