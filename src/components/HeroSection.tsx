import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Database, Globe } from "lucide-react";

export const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-hero rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-15"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main headline with SEO keywords */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
              Deep Web Scraping
              <span className="block text-4xl md:text-6xl mt-2">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Extract data from any website with our powerful, free community web scraper. 
              Advanced crawling, data extraction, and API integration for developers.
            </p>
          </div>

          {/* SEO-rich feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-medium">Any Website</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-medium">Lightning Fast</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Database className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-medium">JSON/Markdown</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
                <Code className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-medium">Open Source</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToDemo}
              className="text-lg px-8 py-6 h-auto"
            >
              Try Free Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://github.com/stretchcloud/deepscrape', '_blank')}
              className="text-lg px-8 py-6 h-auto"
            >
              View on GitHub
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-8 text-sm text-muted-foreground">
            <p>⭐ 200+ GitHub Stars • 🍴 19 Forks • 📦 Apache 2.0 License</p>
          </div>
        </div>
      </div>
    </section>
  );
};