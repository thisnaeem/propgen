// components/TopNav.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home } from "lucide-react";

const TopNav = () => {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">PropGen</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/app/pricing">
              <Button variant="ghost" className="rounded-full">
                Pricing
              </Button>
            </Link>
            <Link href="/login">
              <Button className="rounded-full">Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
