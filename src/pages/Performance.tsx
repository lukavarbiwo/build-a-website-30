
import { Navbar } from "@/components/layout/Navbar";
import { ChartSection } from "@/components/performance/ChartSection";
import { DistributionChart } from "@/components/performance/DistributionChart";
import { AlertItem } from "@/components/performance/AlertItem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Performance = () => {
  const subjectData = [
    { name: 'Math', value: 82 },
    { name: 'English', value: 89 },
    { name: 'Science', value: 76 },
    { name: 'History', value: 85 },
    { name: 'Languages', value: 73 },
  ];

  const distributionData = [
    { name: 'Excellent', value: 35, color: '#4ade80' },
    { name: 'Good', value: 45, color: '#4766ff' },
    { name: 'Average', value: 15, color: '#ffb246' },
    { name: 'Needs Help', value: 5, color: '#ff4d6e' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">Performance Tracker</h1>
        <p className="text-gray-500 mb-8">Track student progress and identify improvement opportunities</p>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="outline" className="bg-white">By Subject</Button>
          <Button variant="outline" className="bg-white">By Class</Button>
        </div>

        <div className="mb-8">
          <ChartSection 
            title="Subject Performance Overview"
            data={subjectData}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DistributionChart 
            title="Student Distribution"
            data={distributionData}
          />

          <Card className="p-6">
            <div className="flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-orange-500">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <h2 className="text-xl font-bold">Performance Alerts</h2>
            </div>
            
            <div>
              <AlertItem
                title="Attendance in Class 9B"
                change={8}
                trend="down"
              />
              <AlertItem
                title="Math scores in Class 10A"
                change={12}
                trend="up"
              />
              <AlertItem
                title="Reading in Class 11A"
                change={6}
                trend="down"
              />
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Performance;
