"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  DollarSign,
  Image,
  TrendingUp,
  User,
} from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Home className="h-6 w-6 text-blue-600" />
                <span className="font-bold text-xl">PropGen</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2"
              >
                {isSidebarOpen ? <X /> : <Menu />}
              </button>

              <div className="hidden md:flex items-center space-x-4">
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </Link>
                <Link
                  href="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-20 bg-gray-900 bg-opacity-50 md:hidden">
          <div className="fixed inset-y-0 right-0 w-64 bg-white p-6">
            <div className="space-y-4">
              <Link
                href="/pricing"
                className="block text-gray-600 hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link
                href="/login"
                className="block text-gray-600 hover:text-gray-900"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default Layout;
