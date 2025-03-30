
import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
}

export const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-3xl font-bold mt-1">{value}</h3>
        </div>
        <div className="bg-blue-100 p-3 rounded-full">
          {icon}
        </div>
      </div>
    </Card>
  );
};
