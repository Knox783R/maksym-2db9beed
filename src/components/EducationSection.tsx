import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import educationImage from "@/assets/education-bg.jpg";

const EducationSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={educationImage} 
          alt="Education background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Education
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic foundation in computer systems and programming
          </p>
        </div>

        <Card className="group relative bg-gradient-card border-border hover:shadow-intense transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 animate-slide-up overflow-hidden">
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <BookOpen className="h-24 w-24 text-primary group-hover:animate-float" />
          </div>
          
          <CardHeader className="pb-4 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                <GraduationCap className="h-8 w-8 text-primary group-hover:animate-pulse" />
              </div>
              <div className="flex-1 space-y-3">
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  Bachelor of Computer Systems & Programming
                </CardTitle>
                <p className="text-lg text-foreground/80 font-medium flex items-center gap-2 group-hover:text-foreground transition-colors duration-300">
                  <Award className="h-5 w-5 text-accent" />
                  Kryvyi Rih Institute of Industrial Technologies
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                    <Calendar className="h-4 w-4" />
                    Graduated: 2017
                  </span>
                  <span className="flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                    <MapPin className="h-4 w-4" />
                    Kryvyi Rih, Dnipropetrovsk Oblast, Ukraine
                  </span>
                </div>
              </div>
              <Badge className="bg-primary/20 text-primary border-primary/30 group-hover:bg-primary/30 group-hover:scale-105 transition-all duration-300">
                Bachelor's Degree
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 p-4 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 transition-colors duration-300">
                <h4 className="font-semibold text-foreground/80 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <BookOpen className="h-5 w-5" />
                  Core Subjects
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Computer Systems Architecture",
                    "Software Engineering Principles", 
                    "Database Management Systems",
                    "Network Programming"
                  ].map((subject, index) => (
                    <li 
                      key={subject}
                      className="flex items-center gap-3 group-hover:text-foreground/80 transition-colors duration-300 hover:translate-x-2 transform duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse" />
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4 p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                <h4 className="font-semibold text-foreground/80 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                  <Award className="h-5 w-5" />
                  Programming Languages
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "C/C++ Programming",
                    "Java Development",
                    "Web Technologies (HTML, CSS, JS)",
                    "Algorithm Design & Analysis"
                  ].map((language, index) => (
                    <li 
                      key={language}
                      className="flex items-center gap-3 group-hover:text-foreground/80 transition-colors duration-300 hover:translate-x-2 transform duration-200"
                      style={{ animationDelay: `${(index + 4) * 100}ms` }}
                    >
                      <span className="w-2 h-2 bg-accent rounded-full group-hover:animate-pulse" />
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-border group-hover:border-primary/30 transition-colors duration-300">
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                This comprehensive program provided the foundational knowledge in computer systems, 
                programming methodologies, and software development that launched my career in web 
                development and eventually led to my specialization in blockchain and AI technologies.
              </p>
            </div>
          </CardContent>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;