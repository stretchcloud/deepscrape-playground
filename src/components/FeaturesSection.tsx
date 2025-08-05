import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Cpu, 
  FileText, 
  Download, 
  Globe2, 
  Layers,
  Search,
  BarChart3,
  Lock,
  Zap
} from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Globe2,
      title: "Universal Web Scraping",
      description: "Extract data from any website, including SPAs, dynamic content, and JavaScript-heavy sites with our advanced web crawler.",
      keywords: "web scraping, data extraction, website crawler"
    },
    {
      icon: Cpu,
      title: "AI-Powered Extraction",
      description: "Intelligent content detection and structured data extraction using machine learning algorithms for maximum accuracy.",
      keywords: "AI scraping, intelligent extraction, machine learning"
    },
    {
      icon: FileText,
      title: "Multiple Output Formats",
      description: "Get your scraped data in JSON, Markdown, CSV, or XML formats. Perfect for data analysis and integration.",
      keywords: "JSON output, markdown extraction, data formats"
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized scraping engine with concurrent processing, caching, and smart rate limiting for maximum speed.",
      keywords: "fast scraping, performance optimization, concurrent crawling"
    },
    {
      icon: Shield,
      title: "Proxy & Anti-Detection",
      description: "Built-in proxy rotation, user agent spoofing, and CAPTCHA solving to bypass anti-bot measures.",
      keywords: "proxy scraping, anti-detection, bypass protection"
    },
    {
      icon: Search,
      title: "Advanced Selectors",
      description: "CSS selectors, XPath expressions, and custom extraction rules for precise data targeting and collection.",
      keywords: "CSS selectors, XPath, data targeting, precise extraction"
    },
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description: "Track scraping progress, success rates, and performance metrics with comprehensive analytics dashboard.",
      keywords: "scraping analytics, monitoring, performance metrics"
    },
    {
      icon: Layers,
      title: "Batch Processing",
      description: "Scrape multiple URLs simultaneously with queue management, scheduling, and bulk data export capabilities.",
      keywords: "batch scraping, bulk extraction, queue processing"
    },
    {
      icon: Download,
      title: "API Integration",
      description: "RESTful API endpoints for seamless integration into your applications, workflows, and data pipelines.",
      keywords: "scraping API, REST endpoints, integration, data pipeline"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden" id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Powerful Web Scraping Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for professional web data extraction, crawling, and mining. 
              Built for developers, data scientists, and businesses.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 } 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50 backdrop-blur-sm bg-card/80 h-full">
                  <CardHeader>
                    <motion.div 
                      className="mb-4 p-3 bg-gradient-primary rounded-lg w-fit"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    <div className="mt-4 text-xs text-primary/70 font-mono bg-primary/5 px-2 py-1 rounded">
                      {feature.keywords}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};