import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Activity, Heart, Music } from "lucide-react";

const classes = [
  {
    title: "High-Intensity Interval Training",
    description:
      "Fast-paced workouts that alternate between intense bursts of exercise and short recovery periods.",
    icon: Activity,
    time: "Mon, Wed, Fri - 6:00 AM, 5:30 PM",
  },
  {
    title: "Zumba",
    description:
      "Dance fitness program that involves dance and aerobic movements to energetic Latin music.",
    icon: Music,
    time: "Tue, Thu - 6:30 PM, Sat - 10:00 AM",
  },
  {
    title: "Yoga Flow",
    description:
      "Combines breathing with movement through a series of poses to improve flexibility and mindfulness.",
    icon: Heart,
    time: "Mon, Wed, Fri - 7:30 AM, Sat - 8:00 AM",
  },
  {
    title: "Group Cycling",
    description:
      "High-energy indoor cycling workout with music that simulates outdoor riding experiences.",
    icon: Users,
    time: "Tue, Thu - 5:30 AM, 6:30 PM",
  },
];

const GroupClasses = () => {
  return (
    <section
      id="group-classes"
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
            Group <span className="text-gym-teal">Classes</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join our energetic group classes led by expert instructors and
            experience the power of community fitness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((classItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-black/40 backdrop-blur-sm border-transparent hover:border-gym-teal/30 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <motion.div
                    className="bg-gym-teal/10 rounded-full h-14 w-14 flex items-center justify-center mb-4"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(14, 165, 233, 0.3)",
                    }}
                  >
                    <classItem.icon className="h-6 w-6 text-gym-teal" />
                  </motion.div>
                  <CardTitle className="text-xl text-white">
                    {classItem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-300">
                    {classItem.description}
                  </CardDescription>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="font-medium text-gym-teal">Schedule:</p>
                    <p className="text-sm text-gray-400">{classItem.time}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupClasses;
