import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ChevronUp, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  FileText,
  ExternalLink 
} from "lucide-react";
import SkillsCarousel from "@/components/SkillsCarousel";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCard from "@/components/ProjectCard";
import PublicationCard from "@/components/PublicationCard";
import EducationCard from "@/components/EducationCard";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ["home", "about", "skills", "experience", "projects", "publications", "education", "resume", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
    { id: "education", label: "Education" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const projects = [
    {
      title: "Project 1",
      tech: "Title 1",
      description: " Description 1",
    },
    {
      title: "Recommendation System With ML Backend",
      tech: "Python, ML, Flask, HTML, CSS, JavaScript",
      description: "Full-stack ML model serving Personalized Restaurant Recommendations based on user Input data.\nImplemented responsive UI and Integrated with Machine Learning algorithms running in the Background.",
    },
    {
      title: "Inventory Management System",
      tech: "C++",
      description: "Developed a modular inventory management system in C++ using OOP principles,\nimproving scalability and maintainability through reusable, well-structured components.",
    },
    {
      title: "Digital Image Tampering Detection",
      tech: "Python, OpenCV, Error Level Analysis, HTML, CSS, JavaScript, Flask",
      description: "Description",
      isPlaceholder: true,
    },
    {
      title: "Early stage Lung Disease Detection",
      tech: "Python, Deep Learning, Flask, HTML, CSS, JavaScript, Feature Engineering",
      description: "Description",
      isPlaceholder: true,
    },
    {
      title: "Personal Portfolio",
      tech: "TypeScript, HTML, CSS, JavaScript, React",
      description: "Designed and developed a responsive personal portfolio website using HTML, CSS, TypeScript, and JavaScript to showcase projects, skills, and experience.",
      isPlaceholder: true,
    },
  ];

  const publications = [
    {
      title: "CNN-based Model on X-ray Images for Early Lung Disease Detection",
      publisher: "IEEE",
    },
    {
      title: "Diabetes Prediction Using Machine Learning for Early Detection",
      publisher: "Topicly",
    },
  ];

  const education = [
    {
      degree: "M.S. in Computer and Information Science -AI/ML",
      institution: "University at Buffalo, NY",
      gpa: "3.47",
    },
    {
      degree: "B.Tech. in Electronics & Communication, Minors: CSE & AI",
      institution: "NIT Calicut, India",
      gpa: "3.1",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">SP</span>
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Srihari Ponakala
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Engineer | Full Stack Developer
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              onClick={() => setShowResume(true)}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <Card className="p-8 gradient-card border-border hover:border-primary/50 transition-all duration-300">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Software Engineer specializing in backend and full-stack development. 
              I enjoy building scalable architectures, writing clean code, and delivering high-quality 
              solutions that solve real-world problems.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Atlanta, GA, USA (Open to Relocation)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:ponakalasri13@gmail.com" className="hover:text-primary transition-colors">
                  ponakalasri13@gmail.com
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <SkillsCarousel />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <ExperienceTimeline />
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowResume(true)}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              For detailed experience, view my resume →
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Publications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <PublicationCard key={index} {...pub} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Resume</h2>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Button
              onClick={() => setShowResume(true)}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Full Resume
            </Button>
            <Button
              onClick={() => window.open("/Srihari_ponakala_SWE.pdf", "_blank")}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Note: Please upload your resume as "Srihari_ponakala_SWE.pdf" to the public folder
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect!</h2>
          <div className="flex gap-8 justify-center">
            <a
              href="https://linkedin.com/in/srihari-ponakala"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-6 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 glow-primary">
                <Linkedin className="h-8 w-8 text-primary group-hover:animate-pulse" />
              </div>
            </a>
            <a
              href="https://github.com/S4srihari"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-6 rounded-full bg-card border border-border hover:border-accent transition-all duration-300 hover:scale-110 glow-accent">
                <Github className="h-8 w-8 text-accent group-hover:animate-pulse" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Srihari Ponakala — Built with React & TypeScript</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-all duration-300 hover:scale-110 z-50"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}

      {/* Resume Modal */}
      {showResume && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowResume(false)}
        >
          <div
            className="bg-card rounded-lg w-full max-w-5xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="text-xl font-bold">Resume</h3>
              <Button
                onClick={() => setShowResume(false)}
                variant="ghost"
                size="sm"
              >
                ✕
              </Button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src="/Srihari_ponakala_SWE.pdf"
                className="w-full h-full"
                title="Resume"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
