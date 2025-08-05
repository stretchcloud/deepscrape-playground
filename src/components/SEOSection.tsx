import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Target, 
  Code2, 
  Database,
  Zap,
  Shield,
  Globe,
  Search
} from "lucide-react";

export const SEOSection = () => {
  const seoCategories = [
    {
      title: "Web Scraping Tools",
      icon: <Code2 className="w-6 h-6" />,
      keywords: [
        "web scraper", "data extraction tool", "website crawler", "content scraper",
        "HTML parser", "web harvesting", "screen scraping", "data mining tool"
      ]
    },
    {
      title: "Data Extraction",
      icon: <Database className="w-6 h-6" />,
      keywords: [
        "data extraction", "structured data", "JSON extraction", "markdown parser",
        "CSV export", "XML parsing", "content extraction", "data collection"
      ]
    },
    {
      title: "Web Automation",
      icon: <Zap className="w-6 h-6" />,
      keywords: [
        "web automation", "automated scraping", "batch processing", "scheduled crawling",
        "API integration", "webhook automation", "data pipeline", "ETL process"
      ]
    },
    {
      title: "Enterprise Features",
      icon: <Shield className="w-6 h-6" />,
      keywords: [
        "proxy rotation", "anti-detection", "CAPTCHA solving", "rate limiting",
        "user agent rotation", "IP blocking bypass", "stealth scraping", "enterprise scraping"
      ]
    },
    {
      title: "Use Cases",
      icon: <Target className="w-6 h-6" />,
      keywords: [
        "price monitoring", "lead generation", "market research", "competitor analysis",
        "SEO analysis", "content aggregation", "news scraping", "social media monitoring"
      ]
    },
    {
      title: "Technology Stack",
      icon: <Globe className="w-6 h-6" />,
      keywords: [
        "Python scraping", "JavaScript crawler", "headless browser", "Selenium automation",
        "BeautifulSoup", "Puppeteer", "Playwright", "Chrome DevTools Protocol"
      ]
    }
  ];

  const popularSearchTerms = [
    "free web scraper", "online data extraction", "website content scraper",
    "HTML table extractor", "JSON data scraper", "markdown converter",
    "bulk URL scraper", "real-time web crawling", "API web scraper",
    "no-code scraping tool", "cloud scraping service", "headless scraping"
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Web Scraping Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional-grade web scraping, data extraction, and crawling tools for every use case.
            From simple content extraction to enterprise-scale data harvesting.
          </p>
        </div>

        {/* SEO Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {seoCategories.map((category, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {category.keywords.map((keyword, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="text-xs px-2 py-1 mb-1"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Search Terms */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Search className="w-6 h-6" />
              </div>
              Popular Web Scraping Searches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {popularSearchTerms.map((term, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="px-3 py-1 hover:bg-primary/10 transition-colors cursor-pointer"
                >
                  {term}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              DeepScrape supports all these use cases and more. Start with our free community edition
              and scale up to enterprise features as your needs grow.
            </p>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: "200+", label: "GitHub Stars", icon: <TrendingUp className="w-5 h-5" /> },
            { number: "19", label: "Contributors", icon: <Code2 className="w-5 h-5" /> },
            { number: "100%", label: "Open Source", icon: <Globe className="w-5 h-5" /> },
            { number: "Free", label: "Community Edition", icon: <Zap className="w-5 h-5" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-card border">
              <div className="flex justify-center mb-2 text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};