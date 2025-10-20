import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Holiday Channel",
    period: "Jul 2025 – Present",
  },
  {
    role: "Graduate Assistant",
    company: "University at Buffalo",
    period: "Jul 2024 – May 2025",
  },
  {
    role: "Software Engineer",
    company: "PiMitra Technologies",
    period: "May 2022 – Dec 2023",
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:transform md:-translate-x-1/2 z-10 glow-primary" />
            
            {/* Content */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-16 md:pl-0`}>
              <Card className="p-6 gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
