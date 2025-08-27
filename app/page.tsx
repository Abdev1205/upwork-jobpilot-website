"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Star,
  Clock,
  Shield,
  Database,
  TrendingUp,
  CheckCircle2,
  Download,
  Play,
  Mail,
  FileText,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";
import Hero from "@/components/custom/home/Hero";
import CTABanner from "@/components/custom/home/CTABanner";
import Navbar from "@/components/custom/common/Navbar";
import Footer from "@/components/custom/common/Footer";
import Why from "@/components/custom/home/Why";
import Feature from "@/components/custom/home/Feature";

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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Feature />

      {/* Why Install Section */}
      <Why />

      {/* CTA Banner */}
      <CTABanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}
