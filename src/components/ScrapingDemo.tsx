import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  Play, 
  FileText, 
  Code, 
  Download, 
  Clock,
  CheckCircle,
  AlertCircle,
  Globe
} from "lucide-react";

export const ScrapingDemo = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [outputFormat, setOutputFormat] = useState("markdown");

  const handleScrape = async () => {
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a valid URL to scrape",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setProgress(0);
    setResult(null);

    // Simulate scraping process with progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    try {
      // Simulate API call to scraping service
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      clearInterval(progressInterval);
      setProgress(100);

      // Mock response data
      const mockResult = {
        url: url,
        title: "Sample Scraped Page",
        timestamp: new Date().toISOString(),
        content: {
          markdown: `# Sample Scraped Content\n\nThis is a demo of the DeepScrape tool. The content would normally be extracted from the provided URL.\n\n## Key Features:\n- **Fast extraction**: Process pages in seconds\n- **Clean formatting**: Structured markdown output\n- **Metadata included**: Title, description, and more\n\n### Sample Data\n\nOriginal URL: ${url}\nExtraction time: ${new Date().toLocaleString()}\nContent length: 1,247 characters\n\n> This is a demonstration of the web scraping capabilities. In a real scenario, this would contain the actual content from your specified URL.`,
          json: {
            url: url,
            title: "Sample Scraped Page",
            description: "This is demo content extracted from the provided URL",
            headings: [
              { level: 1, text: "Sample Scraped Content" },
              { level: 2, text: "Key Features" },
              { level: 3, text: "Sample Data" }
            ],
            links: [
              { text: "GitHub Repository", url: "https://github.com/stretchcloud/deepscrape" },
              { text: "Documentation", url: "#docs" }
            ],
            metadata: {
              extractedAt: new Date().toISOString(),
              contentLength: 1247,
              processingTime: "2.3s",
              success: true
            }
          }
        },
        stats: {
          processingTime: "2.3s",
          contentLength: "1.2KB",
          elementsFound: 47,
          success: true
        }
      };

      setResult(mockResult);
      
      toast({
        title: "Scraping Complete!",
        description: `Successfully extracted content from ${new URL(url).hostname}`,
      });

    } catch (error) {
      toast({
        title: "Scraping Failed",
        description: "This is a demo - real scraping requires backend integration",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const downloadResult = () => {
    if (!result) return;
    
    const content = outputFormat === "json" 
      ? JSON.stringify(result.content.json, null, 2)
      : result.content.markdown;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scraped-content.${outputFormat === "json" ? "json" : "md"}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 bg-background" id="demo-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Try DeepScrape Free
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the power of advanced web scraping. Enter any URL and get structured data instantly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Input Section */}
          <Card className="mb-8 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-primary" />
                Web Scraping Demo
              </CardTitle>
              <CardDescription>
                Enter a URL to extract content in markdown or JSON format
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <Input
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleScrape}
                  disabled={isLoading}
                  variant="hero"
                  className="px-8"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isLoading ? "Scraping..." : "Scrape"}
                </Button>
              </div>

              {isLoading && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Extracting content...</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}

              {result && (
                <div className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium text-green-800 dark:text-green-200">
                      Scraping completed successfully!
                    </p>
                    <div className="flex gap-4 text-sm text-green-600 dark:text-green-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {result.stats.processingTime}
                      </span>
                      <span>{result.stats.contentLength} extracted</span>
                      <span>{result.stats.elementsFound} elements found</span>
                    </div>
                  </div>
                  <Button
                    onClick={downloadResult}
                    variant="outline"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results Section */}
          {result && (
            <Card className="shadow-elegant">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Extracted Content</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{result.stats.contentLength}</Badge>
                    <Badge variant="outline">{new URL(result.url).hostname}</Badge>
                  </div>
                </div>
                <CardDescription>
                  Content extracted from: {result.url}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={outputFormat} onValueChange={setOutputFormat}>
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="markdown" className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Markdown
                    </TabsTrigger>
                    <TabsTrigger value="json" className="flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      JSON
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="markdown">
                    <div className="bg-muted/50 rounded-lg p-4 border">
                      <pre className="whitespace-pre-wrap text-sm overflow-auto max-h-96">
                        {result.content.markdown}
                      </pre>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="json">
                    <div className="bg-muted/50 rounded-lg p-4 border">
                      <pre className="text-sm overflow-auto max-h-96">
                        {JSON.stringify(result.content.json, null, 2)}
                      </pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Demo notice */}
        <div className="max-w-2xl mx-auto mt-8 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-amber-800 dark:text-amber-200 mb-1">
                Demo Mode
              </p>
              <p className="text-amber-700 dark:text-amber-300">
                This is a demonstration with mock data. For real web scraping, integrate with the 
                <a href="https://github.com/stretchcloud/deepscrape" className="underline ml-1" target="_blank" rel="noopener noreferrer">
                  DeepScrape GitHub repository
                </a> or use our full API service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};