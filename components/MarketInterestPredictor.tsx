// components/MarketInterestPredictor.tsx
import { useState, useEffect } from "react";
import {
  TrendingUp,
  Clock,
  Users,
  Calendar,
  DollarSign,
  Building,
  ChevronUp,
  ChevronDown,
  Info,
} from "lucide-react";

interface MarketFactors {
  price: number;
  location: string;
  propertyType: string;
  season: string;
  squareFeet: number;
  yearBuilt: number;
  condition: string;
  amenities: string[];
}

interface MarketPrediction {
  expectedDays: number;
  interestLevel: "High" | "Medium" | "Low";
  potentialBuyers: number;
  priceCompetitiveness: string;
  seasonalTrend: string;
  comparablesSold: number;
  recommendedActions: string[];
  confidenceScore: number;
}

interface CompetitiveAnalysis {
  averagePrice: number;
  medianDays: number;
  totalListings: number;
  pricePerSqFt: number;
}

const MarketInterestPredictor = () => {
  const [marketFactors, setMarketFactors] = useState<MarketFactors>({
    price: 0,
    location: "",
    propertyType: "",
    season: "",
    squareFeet: 0,
    yearBuilt: 2000,
    condition: "",
    amenities: [],
  });

  const [prediction, setPrediction] = useState<MarketPrediction | null>(null);
  const [competitiveAnalysis, setCompetitiveAnalysis] =
    useState<CompetitiveAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const amenityOptions = [
    "Pool",
    "Garage",
    "Updated Kitchen",
    "Smart Home",
    "Solar Panels",
    "Home Office",
    "Garden",
    "View",
  ];

  const handleAmenityToggle = (amenity: string) => {
    setMarketFactors((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock prediction data
      setPrediction({
        expectedDays: 45,
        interestLevel: "High",
        potentialBuyers: 12,
        priceCompetitiveness: "Competitive",
        seasonalTrend: "Upward",
        comparablesSold: 8,
        recommendedActions: [
          "Consider hosting an open house within first week",
          "Highlight smart home features in listing",
          "Price is well-positioned for quick sale",
        ],
        confidenceScore: 85,
      });

      setCompetitiveAnalysis({
        averagePrice: 450000,
        medianDays: 38,
        totalListings: 24,
        pricePerSqFt: 225,
      });
    } catch (error) {
      console.error("Prediction error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate confidence color
  const getConfidenceColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
          Market Interest Predictor
        </h2>

        <form onSubmit={handlePredict} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Listing Price
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  className="pl-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={marketFactors.price}
                  onChange={(e) =>
                    setMarketFactors({
                      ...marketFactors,
                      price: parseInt(e.target.value),
                    })
                  }
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={marketFactors.location}
                onChange={(e) =>
                  setMarketFactors({
                    ...marketFactors,
                    location: e.target.value,
                  })
                }
                placeholder="Enter location"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Property Type
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={marketFactors.propertyType}
                onChange={(e) =>
                  setMarketFactors({
                    ...marketFactors,
                    propertyType: e.target.value,
                  })
                }
              >
                <option value="">Select type</option>
                <option value="single-family">Single Family Home</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                <option value="multi-family">Multi-Family</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Season
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={marketFactors.season}
                onChange={(e) =>
                  setMarketFactors({
                    ...marketFactors,
                    season: e.target.value,
                  })
                }
              >
                <option value="">Select season</option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="fall">Fall</option>
                <option value="winter">Winter</option>
              </select>
            </div>
          </div>

          {/* Advanced Options Toggle */}
          <div>
            <button
              type="button"
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              {showAdvanced ? (
                <ChevronUp className="h-4 w-4 mr-1" />
              ) : (
                <ChevronDown className="h-4 w-4 mr-1" />
              )}
              Advanced Options
            </button>
          </div>

          {/* Advanced Options */}
          {showAdvanced && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Square Feet
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={marketFactors.squareFeet}
                    onChange={(e) =>
                      setMarketFactors({
                        ...marketFactors,
                        squareFeet: parseInt(e.target.value),
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Year Built
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={marketFactors.yearBuilt}
                    onChange={(e) =>
                      setMarketFactors({
                        ...marketFactors,
                        yearBuilt: parseInt(e.target.value),
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amenities
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {amenityOptions.map((amenity) => (
                    <label
                      key={amenity}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={marketFactors.amenities.includes(amenity)}
                        onChange={() => handleAmenityToggle(amenity)}
                      />
                      <span>{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <span>Analyzing Market...</span>
            ) : (
              <>
                <TrendingUp className="h-4 w-4" />
                <span>Predict Market Interest</span>
              </>
            )}
          </button>
        </form>

        {/* Results Section */}
        {prediction && (
          <div className="mt-8 space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Clock className="h-4 w-4" />
                  <span>Expected Days on Market</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  {prediction.expectedDays} days
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Users className="h-4 w-4" />
                  <span>Potential Buyers</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  {prediction.potentialBuyers}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Interest Level</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  {prediction.interestLevel}
                </div>
              </div>
            </div>

            {/* Competitive Analysis */}
            {competitiveAnalysis && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-4">
                  Market Competition Analysis
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">Average Price</div>
                    <div className="text-lg font-semibold">
                      ${competitiveAnalysis.averagePrice.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      Median Days Listed
                    </div>
                    <div className="text-lg font-semibold">
                      {competitiveAnalysis.medianDays} days
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Active Listings</div>
                    <div className="text-lg font-semibold">
                      {competitiveAnalysis.totalListings}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Price per Sq.Ft</div>
                    <div className="text-lg font-semibold">
                      ${competitiveAnalysis.pricePerSqFt}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Recommended Actions */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-4">Recommended Actions</h3>
              <ul className="space-y-2">
                {prediction.recommendedActions.map((action, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Confidence Score */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Info className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  Prediction Confidence
                </span>
              </div>
              <div
                className={`font-semibold ${getConfidenceColor(
                  prediction.confidenceScore
                )}`}
              >
                {prediction.confidenceScore}%
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketInterestPredictor;
