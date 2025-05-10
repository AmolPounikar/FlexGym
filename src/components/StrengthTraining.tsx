import { motion } from "framer-motion";
import { Dumbbell, TrendingUp, Star } from "lucide-react";

const StrengthTraining = () => {
  const strengthPrograms = [
    {
      title: "Beginner Strength",
      description:
        "Learn proper form and build a foundation with basic compound movements.",
      duration: "8 weeks",
      intensity: "Low to Moderate",
    },
    {
      title: "Hypertrophy Focus",
      description:
        "Designed to maximize muscle growth through volume and progressive overload.",
      duration: "12 weeks",
      intensity: "Moderate to High",
    },
    {
      title: "Power & Performance",
      description:
        "Enhance strength, power, and athletic performance with advanced training methods.",
      duration: "10 weeks",
      intensity: "High",
    },
  ];

  return (
    <section
      id="strength-training"
      className="py-20 bg-gradient-to-b from-gym-dark to-black"
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
            Strength <span className="text-gym-teal">Training</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Build muscle, increase power, and transform your physique with our
            comprehensive strength training programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gym-teal/20 rounded-full p-3 mr-4">
                  <Dumbbell className="h-6 w-6 text-gym-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    World-Class Equipment
                  </h3>
                  <p className="text-gray-300">
                    Access to premium free weights, machines, and specialized
                    training equipment for every type of strength workout.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gym-teal/20 rounded-full p-3 mr-4">
                  <TrendingUp className="h-6 w-6 text-gym-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Progressive Programs
                  </h3>
                  <p className="text-gray-300">
                    Our structured programs are designed to progressively
                    challenge you, ensuring continued growth and results.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gym-teal/20 rounded-full p-3 mr-4">
                  <Star className="h-6 w-6 text-gym-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Expert Coaching
                  </h3>
                  <p className="text-gray-300">
                    Learn from coaches who specialize in strength development,
                    proper technique, and injury prevention.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Strength Training"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Featured Strength Programs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengthPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6 border border-gray-800"
            >
              <h4 className="text-xl font-bold text-gym-teal mb-3">
                {program.title}
              </h4>
              <p className="text-gray-300 mb-4">{program.description}</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">
                  Duration:{" "}
                  <span className="text-white">{program.duration}</span>
                </span>
                <span className="text-gray-400">
                  Intensity:{" "}
                  <span className="text-white">{program.intensity}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthTraining;
