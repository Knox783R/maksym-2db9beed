import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Building } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DeFi Pulse Vaults Dashboard",
      company: "CryptoLoom Labs",
      description: "Web-based interface for managing yield vaults, farming, and staking pools.",
      role: "Designed the smart contracts, wrote APIs, and built the full UI.",
      duration: "6 months",
      tech: ["Solidity", "Web3.js", "React.js", "Node.js", "PostgreSQL"],
      url: "https://defipulsevaults.xyz",
      featured: true
    },
    {
      title: "AI Resume Analyzer & Job Matcher",
      company: "NeuraByte Software", 
      description: "SaaS platform that uses NLP to match resumes to job descriptions using semantic similarity.",
      role: "Built the AI pipeline using Python & integrated the frontend with React.",
      duration: "4 months",
      tech: ["Python", "HuggingFace Transformers", "FastAPI", "React"],
      url: "https://neura-jobmatch.ai",
      featured: true
    },
    {
      title: "NFT Staking & Minting DApp",
      company: "SakuraNode Solutions",
      description: "Platform for users to mint, stake, and earn rewards with unique NFTs.",
      role: "Developed the smart contracts and responsive frontend.",
      duration: "5 months", 
      tech: ["Solidity", "IPFS", "Vue.js", "Web3.js"],
      url: "https://nftforge.app",
      featured: false
    },
    {
      title: "AI Chat Assistant for E-commerce",
      company: "NeuraByte Software",
      description: "Trained custom GPT chatbot to handle product Q&A, returns, and real-time support.",
      role: "Built backend, integrated AI model and built chatbot widget.",
      duration: "3 months",
      tech: ["LangChain", "GPT-4 API", "Next.js", "Tailwind"],
      url: "https://ecomgptbot.io",
      featured: false
    },
    {
      title: "Logistics Fleet Tracking Dashboard",
      company: "Nova Systems Ukraine",
      description: "Real-time vehicle tracking system with maps, alerts, and performance metrics.",
      role: "Built full-stack admin panel, implemented backend logic.",
      duration: "7 months",
      tech: ["React.js", "Express.js", "MySQL", "Google Maps API"],
      url: "https://fleetview.com.ua",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions across blockchain, AI, and full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border hover:shadow-intense transition-all duration-300 hover:scale-[1.02] overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-foreground/80 font-medium flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      {project.company}
                    </CardDescription>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    Featured
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-foreground/80">Role:</span>
                    <span className="text-muted-foreground">{project.role}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{project.duration}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground/80">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary" 
                        className="text-xs bg-secondary/50 hover:bg-accent/20 hover:text-accent transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline-glow" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-foreground/80">
            Other Notable Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index}
                className="group bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-foreground/60 flex items-center gap-1">
                    <Building className="h-3 w-3" />
                    {project.company}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-secondary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-secondary/30">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button variant="outline-glow" size="sm" className="w-full" asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
