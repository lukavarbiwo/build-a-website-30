
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 შეცდომა: მომხმარებელმა სცადა არ არსებული გვერდის ნახვა:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
      <div className="mb-8">
        <div className="bg-blue-500 text-white p-4 rounded-full inline-block mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="9" x2="15" y2="15"></line>
            <line x1="15" y1="9" x2="9" y2="15"></line>
          </svg>
        </div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">თქვენ მიერ მოთხოვნილი გვერდი არ არსებობს.</p>
        <Button asChild size="lg">
          <Link to="/">მთავარ გვერდზე დაბრუნება</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
