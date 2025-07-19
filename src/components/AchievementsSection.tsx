import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Zap, Shield, Users, Github, Globe } from "lucide-react";
import achievementsImage from "@/assets/achievements-bg.jpg";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Zap,
      title: "Smart Contract Optimization",
      description: "Optimized staking smart contracts, reducing gas usage by 30% with EVM opcodes",
      highlight: "30% Gas Reduction",
      color: "tech-purple"
    },
    {
      icon: Globe,
      title: "DApp Portfolio",
      description: "Launched over 12 full DApps, several with >10,000 users",
      highlight: "12+ DApps",
      color: "primary"
    },
    {
      icon: Trophy,
      title: "AI Integration Success",
      description: "Integrated AI/ML tools that improved user engagement by 40%",
      highlight: "40% Engagement Boost",
      color: "accent"
    },
    {
      icon: Shield,
      title: "Security Excellence",
      description: "Developed audited smart contracts for multiple DeFi protocols (passed 3 security audits)",
      highlight: "3 Security Audits",
      color: "tech-green"
    },
    {
      icon: Users,
      title: "Technical Leadership",
      description: "Mentored over 20 junior developers in Web3 and full-stack engineering",
      highlight: "20+ Mentees",
      color: "tech-blue"
    },
    {
      icon: Github,
      title: "Open Source Contribution",
      description: "Active contributor to open-source projects and technical communities",
      highlight: "Open Source",
      color: "tech-cyan"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={achievementsImage} 
          alt="Achievements background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Key Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable impact through innovation, optimization, and leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index}
                className="group bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardContent className="p-6 relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-lg bg-${achievement.color}/20 group-hover:bg-${achievement.color}/30 transition-colors`}>
                        <IconComponent className={`h-6 w-6 text-${achievement.color}`} />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`bg-${achievement.color}/20 text-${achievement.color} border-${achievement.color}/30 font-semibold`}
                      >
                        {achievement.highlight}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "6+" },
            { label: "DApps Launched", value: "12+" },
            { label: "Team Members Led", value: "20+" },
            { label: "Security Audits", value: "3" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-card border border-border rounded-lg hover:shadow-glow transition-all duration-300"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;