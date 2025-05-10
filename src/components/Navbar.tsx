import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTopArrow, setShowScrollTopArrow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleJoinNowClick = () => {
    setIsMobileMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      setShowScrollTopArrow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-white/20 backdrop-blur-sm shadow-md"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gym-teal">
              FLEX<span className="text-white">GYM</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="font-bold hover:text-gym-teal transition-colors text-white"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-bold hover:text-gym-teal transition-colors text-white"
            >
              About
            </a>
            <a
              href="#services"
              className="font-bold hover:text-gym-teal transition-colors text-white"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="font-bold hover:text-gym-teal transition-colors text-white"
            >
              Pricing
            </a>
            <a
              href="#trainers"
              className="font-bold hover:text-gym-teal transition-colors text-white"
            >
              Trainers
            </a>
            <a
              href="#contact"
              className="font-bold hover:text-gym-teal transition-colors text-white"
            >
              Contact
            </a>
          </div>

          {/* Join Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              className="bg-gym-teal hover:bg-gym-teal/80 text-white transition-colors"
              onClick={handleJoinNowClick}
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gym-dark shadow-lg animate-fade-in absolute w-full">
            <div className="container mx-auto py-4 flex flex-col space-y-4">
              {[
                "home",
                "about",
                "services",
                "pricing",
                "trainers",
                "contact",
              ].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="font-medium hover:text-gym-teal transition-colors px-4 py-2 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
              <div className="px-4 py-2">
                <Button
                  className="w-full bg-gym-teal hover:bg-gym-teal/80 text-white transition-colors"
                  onClick={handleJoinNowClick}
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTopArrow && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gym-teal text-white shadow-lg hover:bg-gym-teal/80 transition-all duration-300 z-50"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default Navbar;
