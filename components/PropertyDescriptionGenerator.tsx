// components/PropertyDescriptionGenerator.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Send,
  Plus,
  Home,
  Loader2,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface PropertyDetails {
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  squareFeet: string;
  location: string;
  price: string;
  features: string[];
  style: string;
  yearBuilt: string;
  description: string;
  additionalNotes: string;
}

const PropertyDescriptionGenerator = () => {
  const [propertyDetails, setPropertyDetails] = useState<PropertyDetails>({
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    squareFeet: "",
    location: "",
    price: "",
    features: [],
    style: "",
    yearBuilt: "",
    description: "",
    additionalNotes: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [tone, setTone] = useState(50); // For tone slider
  const [isLuxury, setIsLuxury] = useState(false);

  const propertyStyles = [
    "Modern",
    "Traditional",
    "Contemporary",
    "Colonial",
    "Mediterranean",
    "Craftsman",
    "Victorian",
    "Ranch",
  ];

  const commonFeatures = [
    "Hardwood Floors",
    "Updated Kitchen",
    "Central AC",
    "Garden",
    "Pool",
    "Garage",
    "Smart Home",
    "Solar Panels",
    "Home Office",
    "Walk-in Closets",
    "Fireplace",
    "High Ceilings",
  ];

  const handleFeatureToggle = (feature: string) => {
    setPropertyDetails((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleGenerateDescription = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Example generated description
      const description = `
        Discover this stunning ${propertyDetails.propertyType.toLowerCase()} in the heart of ${
        propertyDetails.location
      }. 
        Boasting ${propertyDetails.bedrooms} bedrooms and ${
        propertyDetails.bathrooms
      } bathrooms across ${propertyDetails.squareFeet} square feet, 
        this ${propertyDetails.style.toLowerCase()} home built in ${
        propertyDetails.yearBuilt
      } offers the perfect blend of comfort and style.
        
        ${
          propertyDetails.features.length > 0
            ? `Featured amenities include ${propertyDetails.features.join(
                ", "
              )}.`
            : ""
        }
        
        ${
          isLuxury
            ? "This luxury property showcases premium finishes and exceptional attention to detail throughout."
            : ""
        }
        
        ${propertyDetails.additionalNotes}
      `.trim();

      setGeneratedDescription(description);
    } catch (error) {
      console.error("Error generating description:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-blue-600" />
          <span>Property Description Generator</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleGenerateDescription} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Property Type
              </label>
              <Select
                onValueChange={(value) =>
                  setPropertyDetails((prev) => ({
                    ...prev,
                    propertyType: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Condo">Condo</SelectItem>
                  <SelectItem value="Townhouse">Townhouse</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Location
              </label>
              <Input
                placeholder="Enter location"
                value={propertyDetails.location}
                onChange={(e) =>
                  setPropertyDetails((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Bedrooms
              </label>
              <Select
                onValueChange={(value) =>
                  setPropertyDetails((prev) => ({
                    ...prev,
                    bedrooms: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, "6+"].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "bedroom" : "bedrooms"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Bathrooms
              </label>
              <Select
                onValueChange={(value) =>
                  setPropertyDetails((prev) => ({
                    ...prev,
                    bathrooms: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select bathrooms" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 1.5, 2, 2.5, 3, 3.5, 4, "4+"].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "bathroom" : "bathrooms"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Square Feet
              </label>
              <Input
                type="number"
                placeholder="Enter square footage"
                value={propertyDetails.squareFeet}
                onChange={(e) =>
                  setPropertyDetails((prev) => ({
                    ...prev,
                    squareFeet: e.target.value,
                  }))
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Price</label>
              <Input
                type="number"
                placeholder="Enter price"
                value={propertyDetails.price}
                onChange={(e) =>
                  setPropertyDetails((prev) => ({
                    ...prev,
                    price: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          {/* Advanced Options Toggle */}
          <div>
            <Button
              type="button"
              variant="ghost"
              className="flex items-center space-x-2"
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              {showAdvanced ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
              <span>Advanced Options</span>
            </Button>
          </div>

          {/* Advanced Options */}
          {showAdvanced && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Property Style
                  </label>
                  <Select
                    onValueChange={(value) =>
                      setPropertyDetails((prev) => ({
                        ...prev,
                        style: value,
                      }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyStyles.map((style) => (
                        <SelectItem key={style} value={style}>
                          {style}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Year Built
                  </label>
                  <Input
                    type="number"
                    placeholder="Enter year built"
                    value={propertyDetails.yearBuilt}
                    onChange={(e) =>
                      setPropertyDetails((prev) => ({
                        ...prev,
                        yearBuilt: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Features
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {commonFeatures.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Switch
                        checked={propertyDetails.features.includes(feature)}
                        onCheckedChange={() => handleFeatureToggle(feature)}
                      />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tone Slider */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Description Tone
                </label>
                <Slider
                  value={[tone]}
                  onValueChange={(value) => setTone(value[0])}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Professional</span>
                  <span>Casual</span>
                </div>
              </div>

              {/* Luxury Toggle */}
              <div className="flex items-center space-x-2">
                <Switch checked={isLuxury} onCheckedChange={setIsLuxury} />
                <label className="text-sm font-medium text-gray-700">
                  Luxury Property
                </label>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Additional Notes
                </label>
                <Textarea
                  placeholder="Enter any additional property details..."
                  value={propertyDetails.additionalNotes}
                  onChange={(e) =>
                    setPropertyDetails((prev) => ({
                      ...prev,
                      additionalNotes: e.target.value,
                    }))
                  }
                  className="h-24"
                />
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full rounded-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Generate Description
              </>
            )}
          </Button>
        </form>

        {/* Generated Description */}
        {generatedDescription && (
          <div className="mt-6">
            <Alert>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="font-medium">Description Generated!</span>
              </div>
              <AlertDescription className="mt-4">
                <Textarea
                  value={generatedDescription}
                  readOnly
                  className="min-h-[200px]"
                />
              </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PropertyDescriptionGenerator;
