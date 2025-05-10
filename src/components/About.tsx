
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gym-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="FlexGym interior" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gym-teal rounded-lg p-6 w-48 h-48 flex flex-col justify-center items-center text-center animate-pulse-glow">
                <h3 className="text-4xl font-bold">10+</h3>
                <p className="mt-2">Years of Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gym-teal">Story</span>
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              Founded in 2013, FlexGym began with a simple vision: to create a fitness environment where anyone could achieve their health goals with proper guidance and motivation.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              What started as a small studio with just a few equipment pieces has grown into a state-of-the-art fitness center with multiple locations. We've helped thousands of members transform their bodies and lives through personalized training programs, innovative classes, and a supportive community.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gym-teal">15,000+</span>
                <span className="text-gray-300">Happy Members</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gym-teal">50+</span>
                <span className="text-gray-300">Expert Trainers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gym-teal">12</span>
                <span className="text-gray-300">Locations</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gym-teal">100+</span>
                <span className="text-gray-300">Weekly Classes</span>
              </div>
            </div>
            <Button className="bg-gym-teal hover:bg-gym-teal/80 text-white transition-colors text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
