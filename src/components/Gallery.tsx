import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GalleryHorizontal } from "lucide-react";

// Gallery images with descriptions and categories
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Modern Equipment",
    description:
      "State-of-the-art fitness equipment for all your training needs",
    category: "equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Zumba Classes",
    description:
      "High-energy dance fitness classes led by certified instructors",
    category: "zumba",
  },
  {
    src: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Strength Training",
    description:
      "Comprehensive weight training area with free weights and machines",
    category: "equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Spacious Environment",
    description: "Clean, open spaces designed for optimal workout experience",
    category: "gym",
  },
  {
    src: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Group Fitness",
    description:
      "Energizing group classes to keep you motivated and accountable",
    category: "zumba",
  },
  {
    src: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
    title: "Personal Training",
    description:
      "One-on-one sessions with expert trainers tailored to your goals",
    category: "gym",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    title: "Yoga & Pilates",
    description:
      "Dedicated spaces for mindful movement and flexibility training",
    category: "gym",
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Advanced Training",
    description: "Specialized equipment for athletic performance enhancement",
    category: "equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Cardio Dance",
    description: "Fun, energetic dance workouts combining fitness and rhythm",
    category: "zumba",
  },
];

const Gallery = () => {
  // For image zoom effect on click
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredImages = activeFilter
    ? galleryImages.filter((image) => image.category === activeFilter)
    : galleryImages;

  const handleJoinNowClick = () => {
    setIsMobileMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-gym-dark to-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gym-teal/10 p-2 px-4 rounded-full mb-4">
              <div className="flex items-center space-x-2">
                <GalleryHorizontal size={18} className="text-gym-teal" />
                <span className="text-gym-teal font-medium">Photo Gallery</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Experience Our{" "}
              <span className="text-gym-teal">Premium Facilities</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Take a visual tour of our state-of-the-art gym facilities,
              equipment, and energetic classes.
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === null
                ? "bg-gym-teal text-white"
                : "bg-black/40 text-white border border-gym-teal/30 hover:border-gym-teal"
            }`}
            onClick={() => setActiveFilter(null)}
          >
            All
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === "gym"
                ? "bg-gym-teal text-white"
                : "bg-black/40 text-white border border-gym-teal/30 hover:border-gym-teal"
            }`}
            onClick={() => setActiveFilter("gym")}
          >
            Gym
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === "equipment"
                ? "bg-gym-teal text-white"
                : "bg-black/40 text-white border border-gym-teal/30 hover:border-gym-teal"
            }`}
            onClick={() => setActiveFilter("equipment")}
          >
            Equipment
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === "zumba"
                ? "bg-gym-teal text-white"
                : "bg-black/40 text-white border border-gym-teal/30 hover:border-gym-teal"
            }`}
            onClick={() => setActiveFilter("zumba")}
          >
            Zumba & Dance
          </button>
        </motion.div>

        {/* Featured Gallery - Mobile Carousel */}
        <div className="block md:hidden mb-10">
          <Carousel className="w-full">
            <CarouselContent>
              {filteredImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="overflow-hidden rounded-xl shadow-lg cursor-pointer">
                          <motion.img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-64 object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="p-4 bg-gym-dark/80 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold text-white">
                              {image.title}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {image.description}
                            </p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="bg-gym-dark/95 border-gym-teal/20 text-white p-0 max-w-4xl">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-auto rounded-t-lg"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white">
                            {image.title}
                          </h3>
                          <p className="text-gray-300">{image.description}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative static translate-y-0 border-gym-teal text-gym-teal hover:bg-gym-teal hover:text-white" />
              <CarouselNext className="relative static translate-y-0 border-gym-teal text-gym-teal hover:bg-gym-teal hover:text-white" />
            </div>
          </Carousel>
        </div>

        {/* Desktop Gallery Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(14, 165, 233, 0.2)",
              }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer h-full">
                    <motion.img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-80 object-cover transition-all duration-700"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-5">
                      <h3 className="text-xl font-semibold text-white">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-gym-dark/95 border-gym-teal/20 text-white p-0 max-w-5xl">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {image.title}
                    </h3>
                    <p className="text-gray-300 mt-2">{image.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        {/* Gallery Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gym-teal text-xl font-medium mb-4">
            Want to see more?
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Book a tour and experience FlexGym in person
          </h3>
          <button
            onClick={handleJoinNowClick}
            className="bg-gym-teal hover:bg-gym-teal/80 transition-all duration-300 transform hover:-translate-y-1 text-white font-medium py-3 px-8 rounded-full shadow-lg shadow-gym-teal/20"
          >
            Schedule Tour
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
