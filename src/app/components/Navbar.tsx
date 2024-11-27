'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = null;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust for navbar height
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              College Financial Crisis
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#hero" active={activeSection === 'hero'}>
                Home
              </NavLink>
              <NavLink href="#cta" active={activeSection === 'cta'}>
                Take Action
              </NavLink>
              <NavLink href="#videos" active={activeSection === 'videos'}>
                Videos
              </NavLink>
              <NavLink
                href="#testimonials"
                active={activeSection === 'testimonials'}
              >
                Testimonials
              </NavLink>
              <NavLink href="#contact" active={activeSection === 'contact'}>
                Contact
              </NavLink>
              <NavLink
                href="https://mirror.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#hero" mobile active={activeSection === 'hero'}>
              Home
            </NavLink>
            <NavLink href="#cta" mobile active={activeSection === 'cta'}>
              Take Action
            </NavLink>
            <NavLink
              href="#videos"
              mobile
              active={activeSection === 'videos'}
            >
              Videos
            </NavLink>
            <NavLink
              href="#testimonials"
              mobile
              active={activeSection === 'testimonials'}
            >
              Testimonials
            </NavLink>
            <NavLink href="#contact" mobile active={activeSection === 'contact'}>
              Contact
            </NavLink>
            <NavLink
              href="https://mirror.xyz"
              target="_blank"
              rel="noopener noreferrer"
              mobile
            >
              Blog
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
  active,
  mobile,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
  mobile?: boolean;
}) => (
  <a
    href={href}
    className={`${
      mobile
        ? 'block px-3 py-2 rounded-md text-base font-medium'
        : 'px-3 py-2 rounded-md text-sm font-medium'
    } ${
      active
        ? 'text-white bg-gray-800'
        : 'text-gray-700 hover:bg-gray-700 hover:text-white'
    }`}
    {...props}
  >
    {children}
  </a>
);

export default Navbar;
