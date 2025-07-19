import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic foundation in computer systems and programming
          </p>
        </div>

        <Card className="group bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
          <CardHeader className="pb-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-2">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  Bachelor of Computer Systems & Programming
                </CardTitle>
                <p className="text-lg text-foreground/80 font-medium">
                  Kryvyi Rih Institute of Industrial Technologies
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Graduated: 2017
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Kryvyi Rih, Dnipropetrovsk Oblast, Ukraine
                  </span>
                </div>
              </div>
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Bachelor's Degree
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground/80">Core Subjects</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Computer Systems Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Software Engineering Principles
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Database Management Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Network Programming
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground/80">Programming Languages</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    C/C++ Programming
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Java Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Web Technologies (HTML, CSS, JS)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Algorithm Design & Analysis
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                This comprehensive program provided the foundational knowledge in computer systems, 
                programming methodologies, and software development that launched my career in web 
                development and eventually led to my specialization in blockchain and AI technologies.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;