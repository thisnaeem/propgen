// components/PricePredictionTool.tsx
import { useState } from "react";
import { DollarSign, TrendingUp } from "lucide-react";

interface PriceFactors {
  location: string;
  squareFeet: number;
  bedrooms: number;
  bathrooms: number;
  yearBuilt: number;
  recentSales: boolean;
}

const PricePredictionTool = () => {
  const [priceFactors, setPriceFactors] = useState<PriceFactors>({
    location: "",
    squareFeet: 0,
    bedrooms: 0,
    bathrooms: 0,
    yearBuilt: 2000,
    recentSales: false,
  });
  const [predictedPrice, setPredictedPrice] = useState<number | null>(null);

  const handlePrediction = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your pricing ML model
    setPredictedPrice(450000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
          Price Prediction Tool
        </h2>

        <form onSubmit={handlePrediction} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={priceFactors.location}
                onChange={(e) =>
                  setPriceFactors({
                    ...priceFactors,
                    location: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Square Feet
              </label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={priceFactors.squareFeet}
                onChange={(e) =>
                  setPriceFactors({
                    ...priceFactors,
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
                value={priceFactors.yearBuilt}
                onChange={(e) =>
                  setPriceFactors({
                    ...priceFactors,
                    yearBuilt: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center space-x-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span>Calculate Predicted Price</span>
          </button>
        </form>

        {predictedPrice && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Predicted Price Range:</h3>
            <div className="text-2xl font-bold text-blue-600">
              ${(predictedPrice - 25000).toLocaleString()} - $
              {(predictedPrice + 25000).toLocaleString()}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Based on recent market data and comparable properties
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricePredictionTool;
