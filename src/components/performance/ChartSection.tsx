
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from "@/components/ui/card";

interface ChartSectionProps {
  title: string;
  data: {
    name: string;
    value: number;
  }[];
}

export const ChartSection = ({ title, data }: ChartSectionProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-6">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="value" fill="#4766ff" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
