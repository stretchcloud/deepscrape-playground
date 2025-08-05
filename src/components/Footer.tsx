import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink, Mail, Globe, Star } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              DeepScrape
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Open-source web scraping and data extraction tool. Extract structured data 
              from any website with ease.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://github.com/stretchcloud/deepscrape', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://github.com/stretchcloud/deepscrape', '_blank')}
              >
                <Star className="w-4 h-4 mr-2" />
                Star
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="font-semibold">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Web Scraping API</li>
              <li>• Data Extraction Tools</li>
              <li>• Headless Browsing</li>
              <li>• Proxy Integration</li>
              <li>• JSON/Markdown Output</li>
              <li>• Batch Processing</li>
            </ul>
          </div>

          {/* Use Cases */}
          <div className="space-y-4">
            <h4 className="font-semibold">Use Cases</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Price Monitoring</li>
              <li>• Lead Generation</li>
              <li>• Market Research</li>
              <li>• Content Aggregation</li>
              <li>• SEO Analysis</li>
              <li>• Competitor Tracking</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/stretchcloud/deepscrape" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Documentation <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/stretchcloud/deepscrape/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Report Issues <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/stretchcloud/deepscrape/releases" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Releases <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/stretchcloud/deepscrape/blob/main/LICENSE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  License <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 DeepScrape. Open source under Apache 2.0 License.
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              Free Community Edition
            </span>
            <span>•</span>
            <span>Web Scraping Tool</span>
            <span>•</span>
            <span>Data Extraction API</span>
          </div>
        </div>

        {/* SEO-rich footer content */}
        <div className="mt-8 p-4 bg-muted/30 rounded-lg">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>DeepScrape</strong> is a powerful, free, open-source web scraping tool for data extraction, 
            web crawling, and content harvesting. Extract data from websites in JSON, Markdown, CSV formats. 
            Features include proxy support, anti-detection, headless browsing, batch processing, and API integration. 
            Perfect for price monitoring, lead generation, market research, SEO analysis, and competitive intelligence. 
            Supports JavaScript-heavy sites, SPAs, and dynamic content extraction. Enterprise-ready with rate limiting, 
            CAPTCHA solving, and user agent rotation. Free community edition available on GitHub.
          </p>
        </div>
      </div>
    </footer>
  );
};