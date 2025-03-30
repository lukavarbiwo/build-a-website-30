
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="bg-blue-500 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Educational Institution Platform, Strengthened Teaching
            </h1>
            <p className="mb-8 text-lg opacity-90">
              Comprehensive platform that helps education professionals manage teaching materials easily and efficiently, making education more accessible to everyone.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/dashboard">View Demo</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg animate-fade-in">
              <div className="flex items-center mb-6 text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-blue-500">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                <h3 className="text-lg font-medium">Resource Card</h3>
              </div>
              <div className="space-y-4 mb-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="flex justify-between">
                <div className="bg-orange-100 p-3 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M9 13h6"></path>
                    <path d="M12 10v6"></path>
                  </svg>
                </div>
                <div className="bg-cyan-100 p-3 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" x2="12" y1="3" y2="15"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="resource-card">
              <div className="bg-blue-100 text-blue-500 p-4 inline-block rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M3 9h18"></path>
                  <path d="M9 21V9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Resource Management</h3>
              <p className="text-gray-600">Organize, share, and manage all your educational resources efficiently in one place.</p>
            </div>

            <div className="resource-card">
              <div className="bg-purple-100 text-purple-500 p-4 inline-block rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
              <p className="text-gray-600">Track student progress and get insights to improve teaching methods and outcomes.</p>
            </div>

            <div className="resource-card">
              <div className="bg-green-100 text-green-600 p-4 inline-block rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Task Reminders</h3>
              <p className="text-gray-600">Never miss deadlines with smart notifications and task management tools.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-blue-500 text-white p-2 rounded mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 16 4-4-4-4"/>
                  <path d="m6 8-4 4 4 4"/>
                  <path d="m14.5 4-5 16"/>
                </svg>
              </div>
              <span className="font-bold text-lg">EduFlow</span>
            </div>
            <div className="text-sm text-gray-500">
              &copy; 2023 EduFlow. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
