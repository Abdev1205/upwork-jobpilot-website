"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import assets from "@/public/assetsManager";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src={assets.common.Logo}
              alt="JobPilot Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-semibold tracking-tight text-slate-800">
              Upwork JobPilot
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-slate-600 hover:text-green-600 transition-colors"
            >
              Features
            </a>

            <a
              href="#install"
              className="text-slate-600 hover:text-green-600 transition-colors"
            >
              Install
            </a>
            <a
              href="#contact"
              className="text-slate-600 hover:text-green-600 transition-colors"
            >
              Contact
            </a>
            <Button className="bg-gradient-to-r from-green-700 to-green-600 text-white rounded-[.5rem] px-6">
              Install Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a
                href="#features"
                className="text-slate-600 hover:text-green-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#install"
                className="text-slate-600 hover:text-green-600 transition-colors"
              >
                Install
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-green-600 transition-colors"
              >
                Contact
              </a>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                Install Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
