import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface SectionCardProps {
  title: string;
  metric: string;
  metricLabel: string;
  icon: ReactNode;
  onClick: () => void;
}

export const SectionCard = ({ title, metric, metricLabel, icon, onClick }: SectionCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group relative overflow-hidden cursor-pointer transition-smooth hover:shadow-lg hover:-translate-y-1 border-border bg-card"
    >
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="text-accent transition-smooth group-hover:scale-110">
            {icon}
          </div>
        </div>
        
        <h2 className="text-2xl font-serif font-semibold mb-3 text-foreground">
          {title}
        </h2>
        
        <div className="space-y-1">
          <div className="text-4xl font-serif font-bold text-primary">
            {metric}
          </div>
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            {metricLabel}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-smooth origin-left" />
    </Card>
  );
};
