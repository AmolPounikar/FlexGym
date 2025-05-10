import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const trainers = [
  {
    name: "Kete Morgan",
    role: "Strength & Conditioning",
    bio: "With over 10 years of experience in strength training and sports conditioning, Alex helps clients build power and endurance.",
    image:
      "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sara Johnson",
    role: "Yoga & Flexibility",
    bio: "A certified yoga instructor with expertise in flexibility training, Sara focuses on mind-body connection and mobility.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    name: "Daniel Wilson",
    role: "HIIT & Cardio",
    bio: "Specializing in high-intensity workouts and cardio training, Daniel helps clients achieve maximum fat loss and endurance.",
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
  },
];

const Trainers = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleJoinNowClick = () => {
    setIsMobileMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="trainers" className="py-20 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gym-teal">
            Meet Our Expert Trainers
          </h2>
          <p className="text-lg text-white-600 max-w-2xl mx-auto">
            Our certified fitness professionals are dedicated to helping you
            achieve your fitness goals safely and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <Card className="overflow-hidden transition-all duration-300 card-effect">
                <div className="h-80 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{trainer.name}</CardTitle>
                  <CardDescription className="text-gym-purple font-medium">
                    {trainer.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{trainer.bio}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleJoinNowClick}
                    variant="outline"
                    className="w-full border-gym-purple text-gym-purple hover:bg-gym-purple hover:text-white"
                  >
                    Book a Session
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
