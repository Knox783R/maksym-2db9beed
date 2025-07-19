import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-tech-cyan/20 rounded-full blur-lg animate-bounce" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-tech-cyan bg-clip-text text-transparent leading-tight">
              Maksym Nesmiian
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/80 font-medium">
              Full-Stack, Blockchain & AI Web Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building the future with <span className="text-primary font-semibold">Web3</span>, 
              <span className="text-accent font-semibold"> AI</span>, and 
              <span className="text-tech-cyan font-semibold"> cutting-edge tech</span> since 2018
            </p>
          </div>

          {/* Location & Experience */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              📍 Kyiv, Ukraine
            </span>
            <span className="hidden md:block">•</span>
            <span>6+ Years Experience</span>
            <span className="hidden md:block">•</span>
            <span>12+ DApps Launched</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Let's Build Together
            </Button>
            <Button variant="outline-glow" size="lg" className="text-lg px-8 py-3">
              <ExternalLink className="mr-2 h-5 w-5" />
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-6">
            <a 
              href="https://github.com/maxnesmiian" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/maxnesmiian" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-tech-blue transition-colors hover:scale-110 transform duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:maksym.nesmiian.dev@email.com"
              className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;