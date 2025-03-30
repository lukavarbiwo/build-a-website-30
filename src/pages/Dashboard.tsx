
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
        <h1 className="text-2xl font-bold mb-2">მართვის პანელი</h1>
        <p className="text-gray-500 mb-8">კეთილი იყოს თქვენი დაბრუნება! აი, რა ხდება დღეს.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="რესურსები" 
            value="128" 
            icon={<BookOpen size={24} className="text-blue-500" />} 
          />
          <StatCard 
            title="დავალებები" 
            value="42" 
            icon={<FileText size={24} className="text-orange-500" />} 
          />
          <StatCard 
            title="მოსწავლეები" 
            value="96" 
            icon={<Users size={24} className="text-purple-500" />} 
          />
          <StatCard 
            title="ანალიტიკა" 
            value="12" 
            icon={<BarChart2 size={24} className="text-cyan-500" />} 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen size={20} className="text-blue-500" />
                <h2 className="text-xl font-bold">ბოლო რესურსები</h2>
              </div>
              <p className="text-sm text-gray-500">თქვენი ბოლოს გამოყენებული სასწავლო მასალები</p>
            </div>
            
            <div className="divide-y">
              <ResourceItem 
                title="ალგებრის საფუძვლები" 
                type="სამუშაო ფურცელი" 
                timeLabel="დღეს" 
              />
              <ResourceItem 
                title="მზის სისტემის ქვიზი" 
                type="შეფასება" 
                timeLabel="გუშინ" 
              />
              <ResourceItem 
                title="ლიტერატურული ხერხების პრეზენტაცია" 
                type="პრეზენტაცია" 
                timeLabel="3 დღის წინ" 
              />
            </div>

            <div className="mt-4">
              <Link to="/resources" className="text-blue-500 text-sm hover:underline">
                ყველა რესურსის ნახვა
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText size={20} className="text-orange-500" />
                <h2 className="text-xl font-bold">მომავალი დავალებები</h2>
              </div>
              <p className="text-sm text-gray-500">თქვენი განრიგის დავალებები და ვადები</p>
            </div>
            
            <div className="divide-y">
              <TaskItem 
                title="მე-10 კლასის ესეების შეფასება" 
                dueDate="დღეს, 17:00" 
              />
              <TaskItem 
                title="ფიზიკის ქვიზის შექმნა" 
                dueDate="ხვალ, 09:00" 
              />
              <TaskItem 
                title="დეპარტამენტის შეხვედრა" 
                dueDate="ოთხ, 15:30" 
              />
            </div>

            <div className="mt-4">
              <Link to="/tasks" className="text-orange-500 text-sm hover:underline">
                ყველა დავალების ნახვა
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
