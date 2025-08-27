"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { TrendingUp, CheckCircle2, Download } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Why = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Thousands of Freelancers Choose JobPilot
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Join the community of successful freelancers who've transformed
              their Upwork experience.
            </p>

            <div className="space-y-4">
              {[
                "Stop wasting hours on repetitive searches",
                "Get highly relevant jobs instantly",
                "Save and reuse favorite filters",
                "Keep your data private and secure",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg text-slate-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 border-0 shadow-2xl rounded-md bg-gradient-to-br from-green-50 to-blue-50">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Ready to Level Up?
                </h3>
                <p className="text-slate-600 mb-6">
                  Start finding better projects and winning more proposals
                  today.
                </p>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white rounded-[.5rem] px-8 py-4 text-lg shadow-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Install JobPilot Now
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Why;
