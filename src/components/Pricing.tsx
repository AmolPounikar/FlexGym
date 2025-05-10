import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "2000",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to gym floor equipment",
      "Basic fitness assessment",
      "2 group classes per month",
      "Locker room access",
      "Standard customer support",
    ],
    popular: false,
    color: "bg-white",
  },
  {
    name: "Premium",
    price: "5000",
    description: "Our most popular plan for fitness enthusiasts",
    features: [
      "Unlimited access to all equipment",
      "Full fitness assessment",
      "Unlimited group classes",
      "2 personal training sessions",
      "Exclusive app access",
      "Priority customer support",
    ],
    popular: true,
    color: "bg-white gradient-border",
    accentColor: "bg-gym-purple",
  },
  {
    name: "Elite",
    price: "10,000",
    description: "Comprehensive plan for serious fitness goals",
    features: [
      "24/7 unlimited access",
      "Advanced fitness assessment",
      "Unlimited group classes",
      "4 personal training sessions monthly",
      "Nutrition consultation",
      "Recovery spa access",
      "VIP customer support",
    ],
    popular: false,
    color: "bg-white",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gym-teal">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Choose the perfect plan that fits your fitness goals and budget
            without any hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <Card
                className={`h-full relative ${
                  plan.popular
                    ? "shadow-lg shadow-gym-purple/20 border-gym-purple/30 scale-105"
                    : ""
                } transition-all duration-300 card-effect`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 w-full flex justify-center">
                    <Badge className="bg-gym-purple hover:bg-gym-purple/90">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader
                  className={`${
                    plan.popular ? "bg-gym-purple/10 rounded-t-lg" : ""
                  }`}
                >
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-end mt-2">
                    <span className="text-4xl font-bold">₹{plan.price}</span>
                    <span className="ml-1 text-gray-600">/month</span>
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mt-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div
                          className={`rounded-full p-1 mr-3 ${
                            plan.popular ? "text-gym-purple" : "text-gym-teal"
                          }`}
                        >
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-8 ${
                      plan.popular
                        ? "bg-gym-purple hover:bg-gym-accent"
                        : "bg-gym-teal hover:bg-gym-teal/80"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
