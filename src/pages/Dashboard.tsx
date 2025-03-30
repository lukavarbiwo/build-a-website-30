
import { Navbar } from "@/components/layout/Navbar";
import { StatCard } from "@/components/dashboard/StatCard";
import { ResourceItem } from "@/components/dashboard/ResourceItem";
import { TaskItem } from "@/components/dashboard/TaskItem";
import { BookOpen, FileText, Users, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-500 mb-8">Welcome back! Here's what's happening today.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Resources" 
            value="128" 
            icon={<BookOpen size={24} className="text-blue-500" />} 
          />
          <StatCard 
            title="Assignments" 
            value="42" 
            icon={<FileText size={24} className="text-orange-500" />} 
          />
          <StatCard 
            title="Students" 
            value="96" 
            icon={<Users size={24} className="text-purple-500" />} 
          />
          <StatCard 
            title="Insights" 
            value="12" 
            icon={<BarChart2 size={24} className="text-cyan-500" />} 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen size={20} className="text-blue-500" />
                <h2 className="text-xl font-bold">Recent Resources</h2>
              </div>
              <p className="text-sm text-gray-500">Your most recently accessed teaching materials</p>
            </div>
            
            <div className="divide-y">
              <ResourceItem 
                title="Algebra Fundamentals" 
                type="Worksheet" 
                timeLabel="Today" 
              />
              <ResourceItem 
                title="Solar System Quiz" 
                type="Assessment" 
                timeLabel="Yesterday" 
              />
              <ResourceItem 
                title="Literary Devices PowerPoint" 
                type="Presentation" 
                timeLabel="3 days ago" 
              />
            </div>

            <div className="mt-4">
              <Link to="/resources" className="text-blue-500 text-sm hover:underline">
                View All Resources
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText size={20} className="text-orange-500" />
                <h2 className="text-xl font-bold">Upcoming Tasks</h2>
              </div>
              <p className="text-sm text-gray-500">Tasks and deadlines on your schedule</p>
            </div>
            
            <div className="divide-y">
              <TaskItem 
                title="Grade 10th Grade Essays" 
                dueDate="Today, 5:00 PM" 
              />
              <TaskItem 
                title="Create Physics Quiz" 
                dueDate="Tomorrow, 9:00 AM" 
              />
              <TaskItem 
                title="Department Meeting" 
                dueDate="Wed, 3:30 PM" 
              />
            </div>

            <div className="mt-4">
              <Link to="/tasks" className="text-orange-500 text-sm hover:underline">
                View All Tasks
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
