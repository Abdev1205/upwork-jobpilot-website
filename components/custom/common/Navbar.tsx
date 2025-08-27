"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import assets from "@/public/assetsManager";
import { AnimatePresence, motion } from "framer-motion";

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
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={assets.common.Logo}
              alt="JobPilot Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-semibold tracking-tight text-slate-800">
              Upwork JobPilot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#features"
              className="text-slate-600 hover:text-green-600 transition-colors"
            >
              Features
            </Link>

            <Link
              href="/#why"
              className="text-slate-600 hover:text-green-600 transition-colors"
            >
              Why Install
            </Link>
            <Link
              href="/#contact"
              className="text-slate-600 hover:text-green-600 transition-colors"
            >
              Contact
            </Link>
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
              className="rounded-[.5rem] "
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
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-200 py-4 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="flex flex-col space-y-4 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                <Link
                  href="/#features"
                  className="text-slate-600 hover:text-green-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/#install"
                  className="text-slate-600 hover:text-green-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Install
                </Link>
                <Link
                  href="/#contact"
                  className="text-slate-600 hover:text-green-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                  Install Now
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
