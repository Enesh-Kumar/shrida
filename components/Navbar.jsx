// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Founder', href: '/founder' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Query', href: '/query' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-green-900/5'
          : 'bg-white/95 backdrop-blur-xl shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-15 h-15 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo.jpg"
                alt="Shri-Da Chemicals"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-green-800 transition-colors duration-300">
                Shri-Da
              </span>
              <span className="text-sm block -mt-1 text-green-600 transition-colors duration-300">
                Chemicals Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                  pathname === link.href
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50/50'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                    pathname === link.href
                      ? 'w-3/4 bg-green-600'
                      : 'w-0 group-hover:w-3/4 bg-green-600'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/query"
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-green-600 to-emerald-500 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-gray-800 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-gray-800 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-gray-800 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                pathname === link.href
                  ? 'text-green-700 bg-green-50'
                  : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              href="/distributor"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-3 text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold shadow-lg shadow-green-500/30"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;