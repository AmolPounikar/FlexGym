import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Heart, Clock } from "lucide-react";

const CardioSessions = () => {
  const cardioOptions = [
    {
      title: "Treadmill Sessions",
      icon: Activity,
      description:
        "State-of-the-art treadmills with personalized programs for walking, jogging, or high-intensity sprinting.",
    },
    {
      title: "Elliptical Workouts",
      icon: Heart,
      description:
        "Low-impact, full-body cardio on premium elliptical machines suitable for all fitness levels.",
    },
    {
      title: "Stair Climbers",
      icon: Activity,
      description:
        "Effective lower-body workout that elevates your heart rate while building leg strength and endurance.",
    },
    {
      title: "Indoor Cycling",
      icon: Clock,
      description:
        "High-energy cycling sessions on professional-grade bikes with performance tracking technology.",
    },
    {
      title: "Rowing Machines",
      icon: Activity,
      description:
        "Full-body cardiovascular workout that engages over 86% of your muscles while being gentle on joints.",
    },
    {
      title: "HIIT Cardio Area",
      icon: Heart,
      description:
        "Dedicated space for high-intensity interval training with battle ropes, sleds, and more.",
    },
  ];

  return (
    <section
      id="cardio-sessions"
      className="py-20 bg-gradient-to-b from-black to-gym-dark -mb-16"
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
            Cardio <span className="text-gym-teal">Sessions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Elevate your heart rate and boost your endurance with our variety of
            cardio equipment and specialized sessions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardioOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full bg-gradient-to-br from-black to-gym-dark/80 border-transparent hover:border-gym-teal/30 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gym-teal/20 rounded-full p-3 mr-4">
                      <option.icon className="h-6 w-6 text-gym-teal" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {option.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{option.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center glass-card p-8 rounded-xl mx-auto max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Cardio Quick Start Guide
          </h3>
          <p className="text-gray-300 mb-6">
            New to cardio training? Our expert trainers have designed a 4-week
            progressive cardio program to help you build endurance safely and
            effectively.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CardioSessions;
