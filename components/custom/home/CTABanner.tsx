import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <section className="py-24 bg-gradient-cta relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <Rocket className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
            </motion.div>

            <h2 className="text-xl md:text-2xl lg:text-5xl font-bold text-white mb-8  leading-10 max-w-5xl mx-auto">
              Install Upwork JobPilot today and take control of your freelancing
              journey!
            </h2>

            <p className="text-xl text-primary-foreground/90 max-w-2xl  mx-auto">
              Join thousands of successful freelancers who've transformed their
              workflow with JobPilot.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-white  text-green-600 rounded-[.5rem] px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:bg-white transform hover:scale-[1.01]"
            >
              <Download className="w-6 h-6 mr-3" />
              Install Extension Its Free
            </Button>

            <div className="text-primary-foreground/80 text-sm">
              ⭐ 4.8/5 stars on Chrome Web Store
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-primary-foreground/70">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span className="text-sm">10,000+ Active Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span className="text-sm">No Login Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              <span className="text-sm">100% Private & Secure</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-foreground/5 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-foreground/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-foreground/3 rounded-full"></div>
      </div>
    </section>
  );
};

export default CTABanner;
