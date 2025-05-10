import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  // Button handlers
  const handleGetStarted = () => {
    // Smooth scroll to personal training section
    document.getElementById("personal-training")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleViewPlans = () => {
    // Smooth scroll to pricing section
    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gym-dark text-white pt-20"
    >
      <div
        className="absolute inset-0 bg-black opacity-70 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="w-full lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Body,
              <span className="text-gym-teal block mt-2">
                Transform Your Life
              </span>
            </h1>
            <p className="text-xl mb-10 max-w-lg opacity-90">
              Join our state-of-the-art fitness center with expert trainers and
              premium equipment. Start your fitness journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleGetStarted}
                className="bg-gym-teal hover:bg-gym-teal/80 text-white transition-colors text-lg py-6 px-8 transform hover:scale-105 transition-transform duration-300"
              >
                Get Started
              </Button>
              <Button
                onClick={handleViewPlans}
                variant="ghost"
                className="border-white text-white hover:bg-white/70 transition-colors text-lg py-6 px-8 transform hover:scale-105 transition-transform duration-300"
              >
                View Plans
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 lg:pl-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Woman exercising at gym"
                  className="w-full h-auto"
                />
              </div>
              <motion.div
                className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-xl p-6 max-w-xs"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-2">
                  <div className="bg-gym-teal rounded-full h-10 w-10 flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-black font-bold text-xl">100+</h3>
                </div>
                <p className="text-gray-700">
                  Active members got results in just 8 weeks
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
