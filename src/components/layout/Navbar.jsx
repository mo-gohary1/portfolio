import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
          {/* Monogram Logo */}
          <div style={{
            position: 'relative',
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            {/* MO letters */}
            <span style={{
              fontSize: '18px',
              fontWeight: '900',
              letterSpacing: '-2px',
              lineHeight: 1,
              opacity: 0.15,
              userSelect: 'none',
            }}>MO</span>
            {/* ELGOHARY text across the middle */}
            <span style={{
              position: 'absolute',
              fontSize: '5.5px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              whiteSpace: 'nowrap',
            }}>ELGOHARY</span>
          </div>
          Portfolio
        </Link>

        {/* Navigation Links & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projects
            </Link>
          </div>

          {/* Theme Toggle */}
          <div className="pl-4 hidden md:block border-l border-gray-200 dark:border-gray-700">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
              <Link to="/" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-200">Home</Link>
              <Link to="/about" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-200">About</Link>
              <Link to="/projects" onClick={() => setOpen(false)} className="text-gray-700 dark:text-gray-200">Projects</Link>
              <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
