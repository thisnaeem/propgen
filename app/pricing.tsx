// pages/pricing.tsx
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out PropGen",
      features: [
        "5 property descriptions per month",
        "Basic price predictions",
        "Standard virtual staging",
        "Email support",
      ],
      button: "Get Started",
      featured: false,
    },
    {
      name: "Pro",
      price: "$49",
      description: "Ideal for real estate professionals",
      features: [
        "Unlimited property descriptions",
        "Advanced price predictions",
        "Premium virtual staging",
        "Market interest analytics",
        "Priority support",
        "Custom branding",
      ],
      button: "Start Pro Trial",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large teams and agencies",
      features: [
        "Everything in Pro",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Training sessions",
        "SLA guarantee",
      ],
      button: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your real estate needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.featured
                  ? "border-2 border-blue-500 shadow-xl"
                  : "border border-gray-200"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-600">/month</span>
                  )}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full rounded-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  {plan.button}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
