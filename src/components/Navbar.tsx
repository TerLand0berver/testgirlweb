'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaPenNib } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: '首页' },
    { href: '/problem', label: '看见“偏爱”' },
    { href: '/reality', label: '数据警示' },
    { href: '/stories', label: '故事墙' },
    { href: '/about', label: '关于我们' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors">
              打破偏见
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                {link.label}
              </Link>
            ))}
            <Link href="/action" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <FaPenNib className="mr-2" />
              立即行动
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
               <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-700 hover:bg-gray-100 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/action" 
              className="bg-purple-50 text-purple-700 font-bold block px-3 py-3 rounded-md text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              立即行动
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

