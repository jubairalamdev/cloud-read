"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png"
import { authClient } from "@/lib/auth-client";
import { logoutUser } from "@/lib/authentication/logoutUser";

const NavbarComponent = () => {

  const { data: session, isPending } = authClient.useSession()
  const user = session?.user;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links =
    <>
      <Link href="/" className="text-default-500 hover:text-foreground text-sm font-medium transition-colors">
        Home
      </Link>
      <Link href="/books" className="text-default-500 hover:text-foreground text-sm font-medium transition-colors">
        All Books
      </Link>
      <Link href="/profile" className="text-default-500 hover:text-foreground text-sm font-medium transition-colors">
        My Profile
      </Link>
    </>


  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className="relative flex flex-col w-full max-w-300 bg-background/50 backdrop-blur-md border border-default-100 shadow-lg rounded-xl transition-all duration-300 overflow-hidden">

        <div className="flex items-center justify-between h-16 px-6">
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold text-foreground tracking-tight cursor-pointer">
              <Image
                src={logo}
                alt="logo"
                height={60}
              />
            </Link>
          </div>
          <div className="hidden md:flex gap-8">
            {links}
          </div>
          <div className="flex items-center gap-4">
            {isPending
              ? <div>
                <span className="skeleton skeleton-text">Authenticating...</span>
                <span className="loading loading-infinity loading-lg"></span>
              </div>

              : user ? (
                <button
                  className="bg-[#1a535c] text-white hover:opacity-90 px-5 py-2 rounded-full text-sm font-medium transition-all"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              ) : (
                <Link href="/login">
                  <button className="bg-[#1a535c] text-white hover:opacity-90 px-5 py-2 rounded-full text-sm font-medium transition-all">
                    Login
                  </button>
                </Link>
              )}
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
                {
                  isMenuOpen
                    ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    )
                    : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
              </svg>
            </button>
          </div>
        </div>
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
              href="/books"
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
            <Link href="/login">
              <button className="bg-primary text-primary-foreground hover:opacity-90 px-5 py-2 text-sm font-medium transition-all bg-[#1a535c] text-white">
                Login
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavbarComponent;