"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Play } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Hero = () => {
  return (
    <div>
      <section className=" py-[3rem] pb-[9rem] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div {...fadeInUp}>
              <Badge className="mb-8 bg-green-50 text-green-700 border-green-200 px-6 py-3 text-sm font-semibold rounded-full">
                🚀 Chrome Extension for Upwork
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Upwork JobPilot – <br />
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Supercharge
                </span>{" "}
                Your Job Search
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Save time, find better projects, and land more clients – all
                inside Upwork. The ultimate tool for serious freelancers.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href={
                    "https://chromewebstore.google.com/detail/jcailleephcdfbjhbmcjmhelejgmcedn?utm_source=item-share-cb"
                  }
                  target="_blank"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-700 to-green-600  text-white rounded-[.5rem] px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    <Download className="w-6 h-6 mr-3" />
                    Install Extension
                  </Button>
                </Link>

                <Link
                  href="https://www.youtube.com/watch?v=jjSF1CJIG9k"
                  target="_blank"
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-[.5rem]  px-10 py-6 text-lg font-semibold"
                  >
                    <Play className="w-6 h-6 mr-3" />
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section
        id="demo"
        className="py-24 pt-0 px-4 sm:px-6 lg:px-8 mt-[-6rem] bg-transparent  "
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 p-2 rounded-3xl shadow-2xl">
              <div className="rounded-2xl overflow-hidden">
                <div className="aspect-video">
                  <video
                    src="/assets/common/demo.mp4"
                    className="w-full h-full"
                    controls={false}
                    autoPlay={true}
                    autoFocus
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            {/* <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
