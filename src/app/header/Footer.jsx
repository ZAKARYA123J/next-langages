import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaAt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto">
        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Services Section */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="text-gray-300 space-y-2">
              {[
                'Learn English',
                'Learn French',
                'Learn Spanish',
                'Learn Italian',
                'Learn German',
                'Learn For Kids',
                'Consulting',
                'Exam preparation',
                'Online learning',
              ].map((service, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-yellow-400 mr-2">•</span>
                  <a href="#" className="hover:text-white">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold mb-4">Useful Links</h4>
            <ul className="text-gray-300 space-y-2">
              {[
                'About Us',
                'Announcements',
                'Knowledgebase',
                'Privacy Policy',
                'Terms of Use',
                'Network Status',
                'Testimonial',
                'Support',
                'Contact Us',
              ].map((link, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-yellow-400 mr-2">•</span>
                  <a href="#" className="hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center mb-4">
              <img
                src="https://howdycode.com/templates/howdycode/img/flags/morocco-map.png"
                alt="Morocco Map"
                className="w-35 h-35"
              />
              <p className="text-center text-gray-300">Proudly based in Morocco!</p>
            </div>

            <div className="relative bg-white text-blue-900 p-4 rounded-lg shadow-md w-full text-center">
              <p className="text-xs font-bold">EMAIL US:</p>
              <p className="text-sm">oceanconnecting.ma@gmail.com</p>
              <FaAt className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-200 text-4xl" />
            </div>

            <div className="relative bg-white text-blue-900 p-4 rounded-lg shadow-md w-full text-center">
              <p className="text-xs font-bold">CALL US:</p>
              <p className="text-sm">+212-704309787</p>
              <FaPhoneAlt className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-200 text-4xl" />
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8 mb-4">
          {[
            { href: 'https://www.linkedin.com/company/ocean-connecting/mycompany/', icon: <FaLinkedin size={24} />, label: 'LinkedIn' },
            { href: 'https://www.facebook.com/the.ocean.connecting/', icon: <FaFacebookF size={24} />, label: 'Facebook' },
            { href: 'https://www.instagram.com/oceanconnecting.ma/', icon: <FaInstagram size={24} />, label: 'Instagram' },
            { href: 'https://x.com/OceanConnecting', icon: <FaTwitter size={24} />, label: 'Twitter' },
            { href: 'https://api.whatsapp.com/send/?phone=%2B212704309787', icon: <FaWhatsapp size={24} />, label: 'WhatsApp' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-gray-300 hover:text-white"
              aria-label={`Visit our ${social.label} page`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-center text-gray-500 mt-8">
          <p>Copyright © 2024 Ocean Connecting. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
