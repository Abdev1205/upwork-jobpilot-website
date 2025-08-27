"use client";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Search,
  Star,
  Clock,
  Shield,
  Database,
  TrendingUp,
} from "lucide-react";
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

const Feature = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Powerful Features for Freelancers
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to dominate the Upwork marketplace and land your
            dream projects.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Search,
              title: "Custom Filters by Time & Keywords",
              description:
                "Advanced filtering system to find exactly what you're looking for in seconds.",
            },
            {
              icon: Star,
              title: "Save Multiple Searches",
              description:
                "Create and save your favorite search combinations for instant access.",
            },
            {
              icon: Clock,
              title: "Real-Time Job Discovery",
              description:
                "Get notified of new opportunities as they're posted to stay ahead of competition.",
            },
            {
              icon: Shield,
              title: "No Login Required",
              description:
                "Works seamlessly with your existing Upwork session without additional authentication.",
            },
            {
              icon: Database,
              title: "Private & Secure",
              description:
                "All data is stored locally on your device. Your privacy is our priority.",
            },
            {
              icon: TrendingUp,
              title: "Designed for Freelancers",
              description:
                "Built specifically to help you save time and discover more opportunities.",
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl cursor-pointer hover:scale-[1.015] border-[1px] border-transparent  hover:border-green-600  transition-all duration-300  shadow-md rounded-[.5rem] hover:bg-green-200/10 group  ">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 group-hover:bg-green-200 transition-all duration-300 rounded-[.5rem] flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
