
import { Clock, File } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TaskItemProps {
  title: string;
  dueDate: string;
}

export const TaskItem = ({ title, dueDate }: TaskItemProps) => {
  return (
    <div className="flex items-center justify-between py-4 border-b last:border-b-0">
      <div className="flex items-center gap-3">
        <div className="bg-orange-100 text-orange-600 p-2 rounded-md">
          <Clock size={20} />
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">Due: {dueDate}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <File size={18} />
      </Button>
    </div>
  );
};
