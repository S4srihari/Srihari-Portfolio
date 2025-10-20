import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface PublicationCardProps {
  title: string;
  publisher: string;
  index: number;
}

const PublicationCard = ({ title, publisher, index }: PublicationCardProps) => {
  return (
    <Card
      className="p-6 gradient-card border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 group"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
          <FileText className="h-5 w-5 text-accent" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 text-foreground leading-snug">
            {title}
          </h3>
          <p className="text-sm text-accent font-medium">{publisher}</p>
        </div>
      </div>
    </Card>
  );
};

export default PublicationCard;
