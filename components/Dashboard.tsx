
"use client"

import { useState } from "react";
import { Home, DollarSign, Image, TrendingUp } from "lucide-react";
import PropertyDescriptionGenerator from "./PropertyDescriptionGenerator";
import PricePredictionTool from "./PricePredictionTool";
import VirtualStaging from "./VirtualStaging";
import MarketInterestPredictor from "./MarketInterestPredictor";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    {
      id: "description",
      name: "Description Generator",
      icon: Home,
      component: PropertyDescriptionGenerator,
    },
    {
      id: "pricing",
      name: "Price Prediction",
      icon: DollarSign,
      component: PricePredictionTool,
    },
    {
      id: "staging",
      name: "Virtual Staging",
      icon: Image,
      component: VirtualStaging,
    },
    {
      id: "market",
      name: "Market Interest",
      icon: TrendingUp,
      component: MarketInterestPredictor,
    },
  ];

  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component ||
    PropertyDescriptionGenerator;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-white rounded-lg shadow p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                        activeTab === tab.id
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <ActiveComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
