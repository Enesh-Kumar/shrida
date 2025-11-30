// components/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Mail, Phone, MapPin, Clock, Facebook, Twitter, 
  Instagram, Linkedin, Youtube, Send, ArrowRight, Leaf
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Founder', href: '/founder' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/query' },
  ];

  const products = [
    { name: 'Fertilizers', href: '/products#fertilizers' },
    { name: 'Pesticides', href: '/products#pesticides' },
    { name: 'Growth Enhancers', href: '/products#growth' },
    { name: 'Organic Solutions', href: '/products#organic' },
    { name: 'Drone Services', href: '/products#drone' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
  ];

  return (
    <footer className="bg-gray-900 pt-12 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.jpg"
                  alt="Shri-Da Chemicals"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-xl text-white">Shri-Da</span>
                <span className="text-sm block text-green-400">Chemicals Pvt. Ltd.</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering Indian agriculture with innovative chemical solutions and cutting-edge drone technology since 2020.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white group`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-green-500 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-green-500 rounded-full" />
              Our Products
            </h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <Leaf className="w-4 h-4 text-green-500" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-green-500 rounded-full" />
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">+91 7535926751</p>
                  <p className="text-gray-400 text-sm">+91 XXXXX XXXXX</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">shridachemicalspvtltd@gmail.com</p>
                  <p className="text-gray-400 text-sm">support@shridachemicals.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">
                  Kashipur, Near Gais Godam<br />
                  Udham Singh Nagar, Uttarakhand - 244713<br />
                  India
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-400 text-sm">Sunday: Closed</p>
                  <p className="text-gray-400 text-sm">Calling time: 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

       
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Shri-Da Chemicals Pvt. Ltd. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;