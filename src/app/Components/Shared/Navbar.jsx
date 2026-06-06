"use client"; // Required for useState
import { useState } from "react";
import Link from "next/link";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className="relative flex flex-col w-full max-w-[1200px] bg-background/70 backdrop-blur-md border border-default-200 shadow-lg rounded-xl transition-all duration-300 overflow-hidden">
        
        {/* Top Bar: Logo, Links (Desktop), Login, Hamburger */}
        <div className="flex items-center justify-between h-16 px-6">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-foreground tracking-tight">
              Cloud Read
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop Only) */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-default-500 hover:text-foreground text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/" className="text-default-500 hover:text-foreground text-sm font-medium transition-colors">
              All Books
            </Link>
            <Link href="/profile" className="text-default-500 hover:text-foreground text-sm font-medium transition-colors">
              My Profile
            </Link>
          </div>

          {/* Right: Login Button & Hamburger Icon */}
          <div className="flex items-center gap-4">
            <Link href="/login">
              <button className="bg-primary text-primary-foreground hover:opacity-90 px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md">
                Login
              </button>
            </Link>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground focus:outline-none"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-2 p-4 bg-background/95 border-t border-default-100 animate-in slide-in-from-top-2">
            <Link 
              href="/" 
              className="block px-4 py-2 text-default-600 hover:text-primary hover:bg-default-100 rounded-lg text-sm font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/" 
              className="block px-4 py-2 text-default-600 hover:text-primary hover:bg-default-100 rounded-lg text-sm font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              All Books
            </Link>
            <Link 
              href="/profile" 
              className="block px-4 py-2 text-default-600 hover:text-primary hover:bg-default-100 rounded-lg text-sm font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              My Profile
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarComponent;