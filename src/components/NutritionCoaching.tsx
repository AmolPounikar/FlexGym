import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, Clipboard, Heart } from "lucide-react";
import { useState } from "react";

const NutritionCoaching = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleJoinNowClick = () => {
    setIsMobileMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="nutrition-coaching"
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
            Nutrition <span className="text-gym-teal">Coaching</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Optimize your fitness results with personalized nutrition plans that
            complement your training regimen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="glass-card rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gym-teal/20 h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-6">
              <Clipboard className="h-8 w-8 text-gym-teal" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Custom Meal Plans
            </h3>
            <p className="text-gray-400">
              Receive tailored nutrition plans based on your specific goals,
              dietary preferences, and lifestyle requirements.
            </p>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gym-teal/20 h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-gym-teal" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Expert Guidance
            </h3>
            <p className="text-gray-400">
              Work with certified nutritionists who understand the relationship
              between proper nutrition and physical performance.
            </p>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gym-teal/20 h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-gym-teal" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Lifestyle Integration
            </h3>
            <p className="text-gray-400">
              Learn sustainable eating habits that fit your daily routine and
              enhance your overall health and wellbeing.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gym-dark to-black p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to transform your nutrition?
            </h3>
            <p className="text-gray-300 mb-6">
              Book a free consultation with one of our nutrition experts and
              take the first step towards optimal health.
            </p>
            <Button
              className="bg-gym-teal hover:bg-gym-teal/80 text-white py-6 px-8"
              onClick={handleJoinNowClick}
            >
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NutritionCoaching;
