
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-500 text-white p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 16 4-4-4-4"/>
                <path d="m6 8-4 4 4 4"/>
                <path d="m14.5 4-5 16"/>
              </svg>
            </div>
            <span className="text-xl font-bold">EduFlow</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">დაფა</Link>
          <Link to="/resources" className="text-gray-600 hover:text-gray-900">რესურსები</Link>
          <Link to="/performance" className="text-gray-600 hover:text-gray-900">შედეგები</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-900">
            <Bell size={20} />
          </button>
          <div className="hidden sm:flex gap-2">
            <Link to="/login">
              <Button variant="outline">შესვლა</Button>
            </Link>
            <Link to="/signup">
              <Button>რეგისტრაცია</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
