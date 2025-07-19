import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Solidity", "Go"],
      color: "tech-purple"
    },
    {
      title: "Frontend", 
      skills: ["React.js", "Next.js", "Tailwind", "Vue.js"],
      color: "tech-blue"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "NestJS", "FastAPI"],
      color: "tech-cyan"
    },
    {
      title: "Blockchain",
      skills: ["Ethereum", "Solana", "Hardhat", "Web3.js", "Ethers.js", "IPFS", "NFTs", "DeFi"],
      color: "primary"
    },
    {
      title: "AI/ML",
      skills: ["TensorFlow.js", "HuggingFace APIs", "LangChain", "OpenAI", "RAG systems"],
      color: "accent"
    },
    {
      title: "DevOps & DB",
      skills: ["Docker", "GitHub Actions", "Vercel", "AWS", "PostgreSQL", "MongoDB", "Redis"],
      color: "tech-green"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Core Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning modern web development, blockchain, and AI technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group p-6 bg-gradient-card border border-border rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className={`text-sm hover:scale-110 transition-transform cursor-default bg-secondary/50 hover:bg-${category.color}/20 hover:text-${category.color} hover:border-${category.color}/50`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;