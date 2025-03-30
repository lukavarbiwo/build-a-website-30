
import { Navbar } from "@/components/layout/Navbar";
import { ChartSection } from "@/components/performance/ChartSection";
import { DistributionChart } from "@/components/performance/DistributionChart";
import { AlertItem } from "@/components/performance/AlertItem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Performance = () => {
  const subjectData = [
    { name: 'მათემატიკა', value: 82 },
    { name: 'ქართული', value: 89 },
    { name: 'საბუნებისმეტყველო', value: 76 },
    { name: 'ისტორია', value: 85 },
    { name: 'უცხო ენები', value: 73 },
  ];

  const distributionData = [
    { name: 'ფრიადი', value: 35, color: '#4ade80' },
    { name: 'კარგი', value: 45, color: '#4766ff' },
    { name: 'საშუალო', value: 15, color: '#ffb246' },
    { name: 'დამაკმაყოფილებელი', value: 5, color: '#ff4d6e' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">შედეგების ტრეკერი</h1>
        <p className="text-gray-500 mb-8">თვალყური ადევნეთ მოსწავლეთა პროგრესს და განსაზღვრეთ გაუმჯობესების შესაძლებლობები</p>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="outline" className="bg-white">საგნების მიხედვით</Button>
          <Button variant="outline" className="bg-white">კლასების მიხედვით</Button>
        </div>

        <div className="mb-8">
          <ChartSection 
            title="საგნების შედეგების მიმოხილვა"
            data={subjectData}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DistributionChart 
            title="მოსწავლეთა განაწილება"
            data={distributionData}
          />

          <Card className="p-6">
            <div className="flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-orange-500">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <h2 className="text-xl font-bold">შედეგების შეტყობინებები</h2>
            </div>
            
            <div>
              <AlertItem
                title="დასწრება 9ბ კლასში"
                change={8}
                trend="down"
              />
              <AlertItem
                title="მათემატიკის ქულები 10ა კლასში"
                change={12}
                trend="up"
              />
              <AlertItem
                title="კითხვა 11ა კლასში"
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
