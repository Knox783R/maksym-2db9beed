import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Github, ExternalLink, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maksym.nesmiian.dev@email.com",
      href: "mailto:maksym.nesmiian.dev@email.com",
      copyable: true
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Kievskya 252 Stella, Kyiv, Ukraine",
      href: null,
      copyable: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/maxnesmiian",
      href: "https://linkedin.com/in/maxnesmiian",
      copyable: false
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/maxnesmiian", 
      href: "https://github.com/maxnesmiian",
      copyable: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to turn your ideas into reality? I'm here to help bring your blockchain, AI, or web development project to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Maksym Nesmiian
                </CardTitle>
                <p className="text-muted-foreground">
                  Full-Stack, Blockchain & AI Web Developer
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground/80">
                            {info.label}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.value}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {info.copyable && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(info.value, info.label)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        )}
                        {info.href && (
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <a href={info.href} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Ready to Start Your Project?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">What I can help with:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• DeFi protocols & smart contracts</li>
                      <li>• AI-powered web applications</li>
                      <li>• Full-stack development</li>
                      <li>• Technical consultation & architecture</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Quick Response Guarantee</h4>
                    <p className="text-sm text-muted-foreground">
                      I typically respond to project inquiries within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full text-lg"
                    asChild
                  >
                    <a href="mailto:maksym.nesmiian.dev@email.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send me an email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline-glow" 
                    size="lg" 
                    className="w-full text-lg"
                    asChild
                  >
                    <a href="https://linkedin.com/in/maxnesmiian" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;