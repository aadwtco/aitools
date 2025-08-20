import { useState } from "react";
import { Search, Filter, Grid, List, Star, ExternalLink, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Sample data structure for AI tools
const categories = [
  "All Categories",
  "Chatbots & AI Assistants",
  "Text Writing & Copywriting", 
  "Image Generation & Design",
  "Voice & Audio Generation",
  "Music Generation",
  "Video Generation & Editing",
  "Coding & Development",
  "Automation & Workflow"
];

const featuredTools = [
  {
    id: 1,
    name: "ChatGPT",
    description: "OpenAI's flagship chatbot, supports text, code, and voice",
    category: "Chatbots & AI Assistants",
    url: "https://chatgpt.com",
    rating: 4.9,
    clicks: 12453,
    featured: true
  },
  {
    id: 2,
    name: "Claude AI",
    description: "Anthropic's versatile AI chatbot and assistant with superior reasoning",
    category: "Chatbots & AI Assistants", 
    url: "https://claude.ai",
    rating: 4.8,
    clicks: 8234,
    featured: true
  },
  {
    id: 3,
    name: "MidJourney",
    description: "Creative image generation platform",
    category: "Image Generation & Design",
    url: "https://midjourney.com",
    rating: 4.7,
    clicks: 7123,
    featured: true
  },
  {
    id: 4,
    name: "DALL-E 3",
    description: "Advanced text-to-image generation by OpenAI",
    category: "Image Generation & Design",
    url: "https://openai.com/dall-e-3",
    rating: 4.6,
    clicks: 6892,
    featured: false
  }
];

export default function Frontend() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredTools = featuredTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">AI Tools Central</h1>
                <p className="text-sm text-muted-foreground">Ultimate AI Tools Directory 2025</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Submit Tool
              </Button>
              <Button size="sm">
                Featured
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Ultimate AI Tools Directory 2025
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI tools transforming industries
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-glow">270</div>
              <div className="text-sm text-white/70">Curated Tools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-glow">18</div>
              <div className="text-sm text-white/70">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-glow">2025</div>
              <div className="text-sm text-white/70">Latest Updates</div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search 270+ AI tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-white/10 border-white/20 placeholder:text-white/60 text-white focus:bg-white/20"
            />
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">All Tools</Badge>
            <Badge variant="outline" className="border-white/30 text-white hover:bg-white/10">Free</Badge>
            <Badge variant="outline" className="border-white/30 text-white hover:bg-white/10">Premium</Badge>
            <Badge variant="outline" className="border-white/30 text-white hover:bg-white/10">Enterprise</Badge>
            <Badge variant="outline" className="border-white/30 text-white hover:bg-white/10">Trending</Badge>
            <Badge variant="outline" className="border-white/30 text-white hover:bg-white/10">New</Badge>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => window.open('/admin', '_blank')}
            >
              Admin Panel
            </Button>
            <Button size="lg" className="bg-white/10 hover:bg-white/20 border border-white/20">
              Submit Tool
            </Button>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="py-6 border-b bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border rounded-lg bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <Badge variant="outline" className="ml-2">
                {filteredTools.length} tools
              </Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"  
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Chatbots & AI Assistants", count: "15 tools", icon: "💬" },
              { name: "Text Writing & Copy", count: "25 tools", icon: "📝" },
              { name: "Image Generation", count: "21 tools", icon: "🎨" },
              { name: "Music Generation", count: "14 tools", icon: "🎵" },
              { name: "Video Generation", count: "27 tools", icon: "📹" },
              { name: "Coding & Development", count: "20 tools", icon: "💻" },
              { name: "Automation", count: "15 tools", icon: "⚡" },
              { name: "Email & Communication", count: "15 tools", icon: "💬" },
              { name: "Scheduling", count: "8 tools", icon: "📅" },
              { name: "E-commerce", count: "12 tools", icon: "🛍️" },
              { name: "Data Analysis", count: "8 tools", icon: "📊" },
              { name: "Productivity", count: "10 tools", icon: "🚀" }
            ].map((category) => (
              <Card key={category.name} className="hover:shadow-elegant transition-smooth cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Top Picks */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Editor's Top Picks</h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Claude.ai",
                description: "Anthropic's versatile AI assistant with superior reasoning capabilities, safety-focused design.",
                tags: ["Advanced Reasoning", "Premium"],
                category: "Chatbots"
              },
              {
                name: "Suno.com", 
                description: "Comprehensive AI music creation from text prompts, generating full songs with vocals.",
                tags: ["Music Generation", "Creative"],
                category: "Music"
              },
              {
                name: "Cursor",
                description: "AI-powered code editor that helps you write, debug, and understand code faster.",
                tags: ["Coding", "Developer Tools"],
                category: "Development"
              },
              {
                name: "Google Veo 3",
                description: "Best-in-class end-to-video generation with stunning quality and control.",
                tags: ["Video AI", "Enterprise"],
                category: "Video"
              },
              {
                name: "MidJourney",
                description: "Creative image generation platform producing stunning artistic visuals from text.",
                tags: ["Image Generation", "Art"],
                category: "Design"
              },
              {
                name: "ElevenLabs",
                description: "Premium AI voice cloning and generation with unmatched natural speech synthesis.",
                tags: ["Voice AI", "Professional"],
                category: "Audio"
              }
            ].map((tool, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                      {tool.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{tool.category}</span>
                      <Button size="sm" className="group-hover:bg-primary">
                        Visit Tool →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-8 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1 max-w-4xl mx-auto"
          }`}>
            {filteredTools.map((tool) => (
              <Card key={tool.id} className="hover:shadow-elegant transition-smooth group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                          {tool.name}
                        </CardTitle>
                        {tool.featured && (
                          <Badge className="bg-gradient-primary text-white border-0">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-sm">
                        {tool.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <Badge variant="outline">{tool.category}</Badge>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{tool.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {tool.clicks.toLocaleString()} clicks
                      </span>
                      <Button 
                        size="sm" 
                        className="group-hover:bg-primary group-hover:text-primary-foreground"
                        onClick={() => window.open(tool.url, '_blank')}
                      >
                        Visit Tool
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No tools found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with AI Trends</h2>
          <p className="text-lg mb-8 opacity-90">
            Get weekly updates on new AI tools and industry insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 h-12 bg-white/10 border-white/20 placeholder:text-white/70 text-white focus:bg-white/20"
            />
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-white/90 font-semibold px-8"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AI Tools Central</h3>
                  <p className="text-sm text-slate-400">Ultimate AI Tools Directory 2025</p>
                </div>
              </div>
              <p className="text-slate-400 max-w-md">
                Comprehensive directory of 270+ AI tools across 18 categories. Stay ahead with the latest AI innovations.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Submit Tool</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Chatbots</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Image Generation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Video AI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Coding Tools</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-slate-700 mb-8" />
          
          <div className="text-center text-slate-400">
            <p>© 2025 Ultimate AI Tools List. Updated August 2025.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}