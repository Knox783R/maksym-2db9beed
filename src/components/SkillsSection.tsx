import { Badge } from "@/components/ui/badge";
import skillsImage from "@/assets/skills-bg.jpg";
import { Code, Database, Cloud, Cpu, Brain, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Solidity", "Go"],
      color: "tech-purple",
      icon: Code,
      description: "Modern programming languages for full-stack development"
    },
    {
      title: "Frontend", 
      skills: ["React.js", "Next.js", "Tailwind", "Vue.js"],
      color: "tech-blue",
      icon: Cpu,
      description: "Modern frameworks for building interactive user interfaces"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "NestJS", "FastAPI"],
      color: "tech-cyan",
      icon: Database,
      description: "Server-side technologies for robust API development"
    },
    {
      title: "Blockchain",
      skills: ["Ethereum", "Solana", "Hardhat", "Web3.js", "Ethers.js", "IPFS", "NFTs", "DeFi"],
      color: "primary",
      icon: Wrench,
      description: "Decentralized technologies for Web3 applications"
    },
    {
      title: "AI/ML",
      skills: ["TensorFlow.js", "HuggingFace APIs", "LangChain", "OpenAI", "RAG systems"],
      color: "accent",
      icon: Brain,
      description: "Artificial intelligence and machine learning integration"
    },
    {
      title: "DevOps & DB",
      skills: ["Docker", "GitHub Actions", "Vercel", "AWS", "PostgreSQL", "MongoDB", "Redis"],
      color: "tech-green",
      icon: Cloud,
      description: "Infrastructure and database management solutions"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={skillsImage} 
          alt="Skills background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Core Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning modern web development, blockchain, and AI technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="group relative p-6 bg-gradient-card border border-border rounded-xl shadow-card hover:shadow-intense transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating icon background */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <IconComponent className="h-16 w-16 text-primary group-hover:animate-float" />
                </div>

                <div className="relative z-10 space-y-4">
                  {/* Header with icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-${category.color}/20 group-hover:bg-${category.color}/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <IconComponent className={`h-6 w-6 text-${category.color} group-hover:animate-pulse`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-4">
                    {category.description}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className={`text-sm hover:scale-110 transition-all duration-300 cursor-default bg-secondary/50 hover:bg-${category.color}/20 hover:text-${category.color} hover:border-${category.color}/50 hover:shadow-lg group-hover:animate-glow-pulse`}
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${category.color}/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;