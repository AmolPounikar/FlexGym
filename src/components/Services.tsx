
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Users, Calendar, Clock } from "lucide-react";

const services = [
  {
    title: "Expert Training",
    description: "Personalized workout plans designed by certified fitness professionals to help you reach your goals faster.",
    icon: Dumbbell,
  },
  {
    title: "Group Classes",
    description: "Energetic group fitness sessions including HIIT, yoga, spinning, and more led by passionate instructors.",
    icon: Users,
  },
  {
    title: "Open 24/7",
    description: "Access our facilities any time of day or night. Your fitness doesn't have to wait for business hours.",
    icon: Clock,
  },
  {
    title: "Personal Schedule",
    description: "Flexible scheduling options that fit around your busy lifestyle. Book sessions when it works for you.",
    icon: Calendar,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-gym-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-gym-teal">Premium Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience fitness excellence with services designed to transform your body and elevate your wellness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all duration-300 border-transparent bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white hover:border-gym-teal hover:shadow-lg hover:shadow-gym-teal/20 transform hover:-translate-y-2">
                <CardHeader>
                  <motion.div 
                    className="bg-gym-teal/10 rounded-full h-14 w-14 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(14, 165, 233, 0.3)" }}
                  >
                    <service.icon className="h-6 w-6 text-gym-teal" />
                  </motion.div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-300">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
