
import { ReactNode } from "react";
import { MoreHorizontal } from "lucide-react";

interface ResourceCardProps {
  title: string;
  type: string;
  color: "blue" | "orange" | "green" | "purple" | "pink" | "cyan";
  date: string;
  downloads: number;
  icon?: ReactNode;
}

export const ResourceCard = ({ title, type, color, date, downloads, icon }: ResourceCardProps) => {
  const colorClasses = {
    blue: "resource-card-blue",
    orange: "resource-card-orange",
    green: "resource-card-green",
    purple: "resource-card-purple",
    pink: "resource-card-pink",
    cyan: "resource-card-cyan",
  };

  return (
    <div className="flex flex-col">
      <div className={`${colorClasses[color]} mb-4 relative`}>
        <button className="absolute right-2 top-2 text-white/70 hover:text-white">
          <MoreHorizontal size={20} />
        </button>
        <div className="flex justify-center items-center h-40">
          {icon || (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
          )}
        </div>
      </div>
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="text-gray-500 text-sm mb-2">{type}</p>
      <div className="flex justify-between text-sm text-gray-500 mt-auto">
        <span>დამატებულია: {date}</span>
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          {downloads}
        </div>
      </div>
    </div>
  );
};
