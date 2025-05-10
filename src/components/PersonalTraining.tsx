import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const PersonalTraining = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleJoinNowClick = () => {
    setIsMobileMenuOpen(false);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Customized workout plans tailored to your specific goals",
    "One-on-one guidance from certified fitness professionals",
    "Regular progress assessments and plan adjustments",
    "Proper form and technique instruction to prevent injuries",
    "Accountability and motivation to stay consistent",
  ];

  return (
    <section
      id="personal-training"
      className="py-20 bg-gradient-to-b from-black to-gym-dark"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Personal <span className="text-gym-teal">Training</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get the dedicated attention you deserve with our expert personal
            trainers who will guide you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Personal Training Session"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Why Choose Personal Training?
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <CheckCircle className="h-6 w-6 text-gym-teal mr-3 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <button
                className="bg-gym-teal hover:bg-gym-teal/80 text-white py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-gym-teal/20"
                onClick={handleJoinNowClick}
              >
                Book Your First Session
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalTraining;
