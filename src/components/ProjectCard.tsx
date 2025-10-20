import { Card } from "@/components/ui/card";
import { Code2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  index: number;
  isPlaceholder?: boolean;
}

const ProjectCard = ({ title, tech, description, index, isPlaceholder }: ProjectCardProps) => {
  return (
    <Card
      className={`p-6 gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
        isPlaceholder ? "border-dashed border-muted" : ""
      }`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <Code2 className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className={`text-xl font-bold mb-2 ${isPlaceholder ? "text-muted-foreground" : "text-foreground"}`}>
            {title}
          </h3>
          <p className="text-sm text-accent font-medium">{tech}</p>
        </div>
      </div>
      <p className={`text-sm leading-relaxed whitespace-pre-line ${isPlaceholder ? "text-muted-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    </Card>
  );
};

export default ProjectCard;
