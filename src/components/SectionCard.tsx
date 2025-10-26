import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SectionCardProps {
  title: string;
  metric: string;
  metricLabel: string;
  icon: LucideIcon;
  itemCount: number;
  images?: (string | null)[];
  onClick: () => void;
}

export const SectionCard = ({ title, metric, metricLabel, icon, itemCount, images, onClick }: SectionCardProps) => {
  const Icon = icon;
  const imageCount = images ? Math.min(images.length, 5) : Math.min(itemCount, 5);

  return (
    <Card
      onClick={onClick}
      className="group relative overflow-hidden cursor-pointer transition-smooth hover:shadow-lg hover:-translate-y-1 border-border bg-card rounded-[24px]"
    >
      <div className="p-6 md:p-7 lg:p-8">
        <div className="flex items-start justify-between mb-5 md:mb-6">
          <div className="text-accent transition-smooth group-hover:scale-110">
            <Icon className="h-8 w-8" />
          </div>
          
          {/* Cascaded Images */}
          <div className="flex -space-x-3 items-center">
            {Array.from({ length: imageCount }).map((_, i) => (
              <div
                key={i}
                className="relative w-8 h-8 rounded-full border-2 border-card overflow-hidden shadow-md"
                style={{ zIndex: imageCount - i }}
              >
                {images && images[i] ? (
                  <img 
                    src={images[i]!} 
                    alt={`${title} ${i + 1}`}
                    className="w-full h-full object-contain bg-accent/10"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-accent/40 to-accent/60 flex items-center justify-center">
                    <span className="text-xs text-accent font-bold">{i + 1}</span>
                  </div>
                )}
              </div>
            ))}
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
