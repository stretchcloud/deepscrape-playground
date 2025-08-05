import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Database, Globe } from "lucide-react";
import Particles from "@/components/magicui/particles";
import Meteors from "@/components/magicui/meteors";
import TypingAnimation from "@/components/magicui/typing-animation";
import WordRotate from "@/components/magicui/word-rotate";
import BlurFade from "@/components/magicui/blur-fade";
import RippleButton from "@/components/magicui/ripple-button";
import OrbitingCircles from "@/components/magicui/orbiting-circles";

export const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Enhanced Background Effects */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color="#3b82f6"
      />
      <div className="absolute inset-0">
        <Meteors number={30} />
      </div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-hero rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-15 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Animated Main headline with SEO keywords */}
          <BlurFade delay={0.25}>
            <div className="space-y-4">
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
                  <WordRotate
                    words={["Deep Web Scraping", "Data Extraction", "API Integration", "Content Mining"]}
                    className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent"
                  />
                  <span className="block text-4xl md:text-6xl mt-2">Made Simple</span>
                </h1>
              </div>
              <BlurFade delay={0.5}>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Extract data from any website with our powerful, free community web scraper. 
                  Advanced crawling, data extraction, and API integration for developers.
                </p>
              </BlurFade>
            </div>
          </BlurFade>

          {/* Orbiting Feature Icons */}
          <BlurFade delay={0.75}>
            <div className="relative h-64 w-64 mx-auto my-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                  <Code className="w-10 h-10 text-white" />
                </div>
              </div>
              <OrbitingCircles className="h-12 w-12 border-none bg-background/20 backdrop-blur" radius={80} duration={20}>
                <Globe className="w-6 h-6 text-primary" />
              </OrbitingCircles>
              <OrbitingCircles className="h-12 w-12 border-none bg-background/20 backdrop-blur" radius={80} duration={20} delay={5}>
                <Zap className="w-6 h-6 text-primary" />
              </OrbitingCircles>
              <OrbitingCircles className="h-12 w-12 border-none bg-background/20 backdrop-blur" radius={80} duration={20} delay={10}>
                <Database className="w-6 h-6 text-primary" />
              </OrbitingCircles>
              <OrbitingCircles className="h-12 w-12 border-none bg-background/20 backdrop-blur" radius={80} duration={20} delay={15}>
                <ArrowRight className="w-6 h-6 text-primary" />
              </OrbitingCircles>
            </div>
          </BlurFade>

          {/* Feature Labels */}
          <BlurFade delay={1.0}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Any Website</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Lightning Fast</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-muted-foreground">JSON/Markdown</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Open Source</p>
              </div>
            </div>
          </BlurFade>

          {/* Enhanced CTA buttons */}
          <BlurFade delay={1.25}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <RippleButton 
                variant="hero" 
                size="lg"
                onClick={scrollToDemo}
                className="text-lg px-8 py-6 h-auto flex items-center gap-2 shadow-glow"
              >
                Try Free Demo
                <ArrowRight className="w-5 h-5" />
              </RippleButton>
              <RippleButton 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://github.com/stretchcloud/deepscrape', '_blank')}
                className="text-lg px-8 py-6 h-auto flex items-center gap-2 border-primary/50 hover:border-primary"
              >
                View on GitHub
              </RippleButton>
            </div>
          </BlurFade>

          {/* Animated Social proof */}
          <BlurFade delay={1.5}>
            <div className="pt-8">
              <TypingAnimation 
                text="⭐ 200+ GitHub Stars • 🍴 19 Forks • 📦 Apache 2.0 License"
                className="text-sm text-muted-foreground font-mono"
                duration={50}
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};