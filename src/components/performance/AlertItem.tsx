
import { ArrowDown, ArrowUp } from "lucide-react";

interface AlertItemProps {
  title: string;
  change: number;
  trend: 'up' | 'down';
}

export const AlertItem = ({ title, change, trend }: AlertItemProps) => {
  return (
    <div className="flex items-center gap-4 p-4 border-b last:border-b-0">
      <div className={`p-3 rounded-full ${trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
        {trend === 'up' ? (
          <ArrowUp className="text-green-600" size={20} />
        ) : (
          <ArrowDown className="text-red-600" size={20} />
        )}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className={`text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? 'Improved' : 'Decreased'} by {change}%
        </p>
      </div>
    </div>
  );
};
