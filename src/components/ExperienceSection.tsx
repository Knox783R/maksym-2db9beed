import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

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
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across blockchain, AI, and web development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className={`group bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:scale-[1.02] ${
                exp.current ? 'ring-2 ring-primary/50' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      {exp.title}
                      {exp.current && (
                        <Badge variant="default" className="bg-primary text-primary-foreground">
                          Current
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="text-base text-foreground/80 font-medium">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 block w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground/80 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;