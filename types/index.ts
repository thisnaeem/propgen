// types/index.ts
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  features: string[];
  images: string[];
  virtualStagingImages: string[];
  marketPrediction: {
    expectedDays: number;
    interestLevel: 'High' | 'Medium' | 'Low';
    potentialBuyers: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  company?: string;
  subscription: 'free' | 'pro' | 'enterprise';
  createdAt: Date;
}

export interface GeneratedContent {
  description: string;
  suggestedPrice: number;
  virtualStaging: string[];
  marketAnalysis: {
    predictedDays: number;
    interestLevel: string;
    recommendedActions: string[];
  };
}