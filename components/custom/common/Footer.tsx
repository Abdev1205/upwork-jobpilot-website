"use client";

import { Button } from "@/components/ui/button";
import assets from "@/public/assetsManager";
import Link from "next/link";

import {
  Search,
  Download,
  Mail,
  FileText,
  HelpCircle,
  ChromeIcon,
  ExternalLink,
  ExternalLinkIcon,
} from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Footer = () => {
  return (
    <footer
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-0 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src={assets.common.Logo}
                alt="JobPilot Logo"
                className="h-10 w-10"
              />
              <span className="text-xl font-semibold tracking-tight text-white">
                Upwork JobPilot
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              The ultimate Chrome extension for Upwork freelancers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="#features"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#why"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Why Install
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=jjSF1CJIG9k"
                target="_blank"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Demo Video
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link
                href="/privacy-policy"
                className="flex items-center text-slate-400 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4 mr-2" />
                Privacy Policy
              </Link>
              <Link
                href="/privacy-policy"
                className="flex items-center text-slate-400 hover:text-white transition-colors"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Support
              </Link>
              <Link
                href="mailto:abhaym1205@gmail.com"
                className="flex items-center text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Email
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Install</h3>
            <Link
              href={
                "https://chromewebstore.google.com/detail/jcailleephcdfbjhbmcjmhelejgmcedn?utm_source=item-share-cb"
              }
              target="_blank"
            >
              <Button className="bg-gradient-to-r from-green-700 to-green-600 rounded-[.5rem] mb-4 w-fit">
                <Download className="w-4 h-4 mr-2" />
                Chrome Web Store
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-center md:text-left">
              © 2024 JobPilot. All rights reserved.
            </p>
            <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              ⚠️ We are not affiliated with Upwork.com. This is an independent
              tool to enhance your experience.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
