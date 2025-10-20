import { useRef } from "react";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "C++", icon: "⚙️" },
  { name: "Java", icon: "☕" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "📘" },
  { name: "SQL", icon: "🗄️" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "React", icon: "⚛️" },
  { name: "Django", icon: "🎸" },
  { name: "Flask", icon: "🧪" },
  { name: "Node.js", icon: "🟢" },
  { name: "REST APIs", icon: "🔌" },
  { name: "GraphQL", icon: "🔷" },
  { name: "MySQL", icon: "🐬" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "Git", icon: "🔀" },
  { name: "CI/CD", icon: "🔄" },
  { name: "Microservices", icon: "🧩" },
  { name: "System Design", icon: "🏗️" },
  { name: "OOP", icon: "🎯" },
  { name: "Distributed Systems", icon: "🌐" },
];

const SkillsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = scrollRef.current;
    if (!slider) return;

    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Double the skills array for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-8">
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex gap-8" style={{ animation: 'scroll 50s linear infinite' }}>
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-32 flex flex-col items-center justify-center gap-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <span className="text-5xl">{skill.icon}</span>
              <span className="text-sm font-medium text-center px-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default SkillsCarousel;
