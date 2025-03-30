
import { Clock } from "lucide-react";

interface ResourceItemProps {
  title: string;
  type: string;
  timeLabel: string;
}

export const ResourceItem = ({ title, type, timeLabel }: ResourceItemProps) => {
  return (
    <div className="flex items-center justify-between py-4 border-b last:border-b-0">
      <div className="flex items-center gap-3">
        <div className="bg-blue-100 text-blue-600 p-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          </svg>
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-gray-500">
        <Clock size={16} />
        <span className="text-sm">{timeLabel}</span>
      </div>
    </div>
  );
};
