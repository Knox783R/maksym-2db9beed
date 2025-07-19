import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Building2, TrendingUp, Users } from "lucide-react";
import workImage from "@/assets/work-bg.jpg";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Blockchain Developer",
      company: "CryptoLoom Labs",
      location: "Remote",
      period: "Mar 2022 – Present",
      description: [
        "Developed smart contract ecosystems for DeFi protocols (staking, lending, governance)",
        "Built NFT minting/staking platforms with IPFS + MetaMask integrations", 
        "Implemented gas optimizations that reduced on-chain cost by 30%",
        "Led a team of 5 junior devs across frontend, backend, and smart contracts"
      ],
      tech: ["Solidity", "Hardhat", "React.js", "Web3.js", "Next.js", "Node.js", "PostgreSQL"],
      current: true
    },
    {
      title: "AI-Powered Web App Engineer",
      company: "NeuraByte Software",
      location: "Remote",
      period: "Jan 2021 – Feb 2022",
      description: [
        "Built ML-powered SaaS tools (document summarization, semantic search, chatbot integrations)",
        "Integrated OpenAI, HuggingFace, and LangChain into enterprise apps",
        "Designed scalable APIs with FastAPI and built dashboards with Next.js"
      ],
      tech: ["Python", "FastAPI", "React.js", "Tailwind", "OpenAI API", "MongoDB"],
      current: false
    },
    {
      title: "Blockchain & Frontend Developer", 
      company: "SakuraNode Solutions",
      location: "Remote",
      period: "Oct 2019 – Dec 2020",
      description: [
        "Built custom token presale launchpads and staking dashboards",
        "Created Web3-enabled frontends for wallet-connected platforms",
        "Delivered fast UI/UX prototypes with Vue.js & Tailwind"
      ],
      tech: ["Solidity", "Vue.js", "Web3.js", "Hardhat", "Firebase"],
      current: false
    },
    {
      title: "Junior Web Developer",
      company: "Nova Systems Ukraine",
      location: "Kirovohrad, Ukraine",
      period: "Jan 2018 – Sep 2019", 
      description: [
        "Developed internal web portals and admin dashboards for logistics and HR systems",
        "Learned full-stack practices under mentorship",
        "Helped migrate legacy systems to React and Node.js"
      ],
      tech: ["React", "Express", "MySQL", "Bootstrap", "REST APIs"],
      current: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={workImage} 
          alt="Work background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across blockchain, AI, and web development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <Card 
                key={index}
                className={`group relative bg-gradient-card border-border hover:shadow-intense transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 animate-slide-up overflow-hidden ${
                  exp.current ? 'ring-2 ring-primary/50' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative elements */}
                <div className={`absolute ${isEven ? 'top-4 right-4' : 'top-4 left-4'} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}>
                  <Building2 className="h-32 w-32 text-primary group-hover:animate-float" />
                </div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 flex items-center gap-3">
                        <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <span>{exp.title}</span>
                        {exp.current && (
                          <Badge variant="default" className="bg-primary text-primary-foreground animate-glow-pulse">
                            Current
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="text-base text-foreground/80 font-medium flex items-center gap-2 group-hover:text-foreground transition-colors duration-300">
                        <TrendingUp className="h-4 w-4 text-accent" />
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li 
                        key={idx} 
                        className="text-muted-foreground flex items-start gap-3 group-hover:text-foreground/80 transition-all duration-300 hover:translate-x-2 transform"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <span className="text-primary mt-1.5 block w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover:animate-pulse" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border group-hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium text-foreground/80">Tech Stack:</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="text-xs bg-secondary/50 hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all duration-300 cursor-default group-hover:animate-glow-pulse"
                          style={{ animationDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                {/* Side accent line */}
                <div className={`absolute ${isEven ? 'left-0' : 'right-0'} top-0 w-1 h-full bg-gradient-to-b from-primary/50 via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;