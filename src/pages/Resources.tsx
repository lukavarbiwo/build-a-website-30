
import { Navbar } from "@/components/layout/Navbar";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, ImageIcon, Video, Plus, Filter } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Resource Center</h1>
            <p className="text-gray-500">Organize, analyze and share your teaching materials</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={18} />
            <span>Add New Resource</span>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <Input 
              placeholder="Search resources..." 
              className="pl-10"
            />
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={18} />
              <span>Category</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={18} />
              <span>Type</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard 
            title="Algebra Fundamentals" 
            type="Mathematics"
            color="blue"
            date="2023 March 15"
            downloads={128}
            icon={<FileText size={48} />}
          />
          <ResourceCard 
            title="Photosynthesis Diagram" 
            type="Biology"
            color="purple"
            date="2023 February 22"
            downloads={89}
            icon={<ImageIcon size={48} />}
          />
          <ResourceCard 
            title="Literary Analysis Guide" 
            type="English"
            color="orange"
            date="2023 April 3"
            downloads={201}
            icon={<FileText size={48} />}
          />
          <ResourceCard 
            title="Physics Practice Problems" 
            type="Physics"
            color="green"
            date="2023 January 12"
            downloads={156}
            icon={<FileText size={48} />}
          />
          <ResourceCard 
            title="World War II Video" 
            type="History"
            color="cyan"
            date="2023 March 28"
            downloads={73}
            icon={<Video size={48} />}
          />
          <ResourceCard 
            title="Grammar Worksheets" 
            type="English"
            color="pink"
            date="2023 April 10"
            downloads={119}
            icon={<FileText size={48} />}
          />
        </div>
      </main>
    </div>
  );
};

export default Resources;
