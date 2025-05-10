import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef } from "react";

const Contact = () => {
  const { toast } = useToast();
  const mapRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  // Initialize Google Maps

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gym-dark to-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about our services, memberships, or anything else?
            Reach out and we'll get back to you soon!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gym-teal/20">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 font-medium text-gray-200"
                    >
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 font-medium text-gray-200"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      required
                      className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 font-medium text-gray-200"
                    >
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      required
                      className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 font-medium text-gray-200"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-gym-teal hover:bg-gym-teal/80 w-full transition-all transform hover:scale-105"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="h-full flex flex-col justify-between gap-6">
              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg h-64 sm:h-80 border border-gym-teal/20">
                <div ref={mapRef} className="w-full h-full" />
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-gym-teal/20">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gym-teal/10 rounded-full p-3 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gym-teal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg text-white">
                        Location
                      </h4>
                      <p className="text-gray-300 mt-1">
                        123 Fitness Street, Gym City, GC 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gym-teal/10 rounded-full p-3 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gym-teal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg text-white">Email</h4>
                      <p className="text-gray-300 mt-1">info@flexgym.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gym-teal/10 rounded-full p-3 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gym-teal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg text-white">Phone</h4>
                      <p className="text-gray-300 mt-1">(123) 456-7890</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-gym-teal/20">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Hours of Operation
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="font-medium text-white">
                      5:00 AM - 10:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="font-medium text-white">
                      7:00 AM - 8:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="font-medium text-white">
                      8:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
