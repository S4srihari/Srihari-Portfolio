import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface EducationCardProps {
  degree: string;
  institution: string;
  gpa: string;
  index: number;
}

const EducationCard = ({ degree, institution, gpa, index }: EducationCardProps) => {
  return (
    <Card
      className="p-6 gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-foreground">{degree}</h3>
          <p className="text-muted-foreground mb-2">{institution}</p>
          <p className="text-sm text-accent font-medium">CGPA: {gpa}</p>
        </div>
      </div>
    </Card>
  );
};

export default EducationCard;
