import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye, 
  Star,
  TrendingUp,
  ExternalLink,
  Filter,
  Download
} from "lucide-react";

const tools = [
  {
    id: 1,
    name: "ChatGPT",
    category: "Chatbots & AI Assistants",
    status: "active",
    rating: 4.9,
    clicks: 12453,
    views: 25678,
    featured: true,
    lastUpdated: "2024-01-15",
    url: "https://chatgpt.com"
  },
  {
    id: 2,
    name: "Claude AI", 
    category: "Chatbots & AI Assistants",
    status: "active",
    rating: 4.8,
    clicks: 8234,
    views: 18923,
    featured: true,
    lastUpdated: "2024-01-14",
    url: "https://claude.ai"
  },
  {
    id: 3,
    name: "MidJourney",
    category: "Image Generation & Design",
    status: "active",
    rating: 4.7,
    clicks: 7123,
    views: 15432,
    featured: false,
    lastUpdated: "2024-01-13",
    url: "https://midjourney.com"
  },
  {
    id: 4,
    name: "DALL-E 3",
    category: "Image Generation & Design", 
    status: "pending",
    rating: 4.6,
    clicks: 6892,
    views: 14233,
    featured: false,
    lastUpdated: "2024-01-12",
    url: "https://openai.com/dall-e-3"
  },
  {
    id: 5,
    name: "Runway ML",
    category: "Video Generation & Editing",
    status: "active",
    rating: 4.5,
    clicks: 5123,
    views: 11234,
    featured: false,
    lastUpdated: "2024-01-11",
    url: "https://runwayml.com"
  }
];

const categories = ["All Categories", "Chatbots & AI Assistants", "Image Generation & Design", "Video Generation & Editing"];
const statuses = ["All Status", "active", "pending", "inactive"];

export function ToolsManager() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || tool.category === selectedCategory;
    const matchesStatus = selectedStatus === "All Status" || tool.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-admin-success/20 text-admin-success border-0">Active</Badge>;
      case "pending":
        return <Badge className="bg-admin-warning/20 text-admin-warning border-0">Pending</Badge>;
      case "inactive":
        return <Badge className="bg-admin-error/20 text-admin-error border-0">Inactive</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card className="bg-admin-card border-admin-border shadow-admin">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div>
            <CardTitle className="text-admin-text">AI Tools Management</CardTitle>
            <CardDescription className="text-admin-text-muted">
              Manage and monitor all AI tools in your directory
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              className="border-admin-border text-admin-text-muted hover:text-admin-accent hover:border-admin-accent"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-admin text-white hover:shadow-admin-glow"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Tool
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-admin-text-muted w-4 h-4" />
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-admin-bg/50 border-admin-border text-admin-text placeholder:text-admin-text-muted focus:border-admin-accent"
            />
          </div>
          
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 bg-admin-bg/50 border border-admin-border rounded-md text-admin-text text-sm focus:border-admin-accent focus:outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 bg-admin-bg/50 border border-admin-border rounded-md text-admin-text text-sm focus:border-admin-accent focus:outline-none"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Tools Table */}
        <div className="rounded-md border border-admin-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-admin-border hover:bg-admin-bg/30">
                <TableHead className="text-admin-text-muted">Tool</TableHead>
                <TableHead className="text-admin-text-muted">Category</TableHead>
                <TableHead className="text-admin-text-muted">Status</TableHead>
                <TableHead className="text-admin-text-muted">Performance</TableHead>
                <TableHead className="text-admin-text-muted">Rating</TableHead>
                <TableHead className="text-admin-text-muted">Updated</TableHead>
                <TableHead className="text-admin-text-muted">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTools.map((tool) => (
                <TableRow 
                  key={tool.id} 
                  className="border-admin-border hover:bg-admin-bg/30 transition-colors"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-admin rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {tool.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-admin-text flex items-center gap-2">
                          {tool.name}
                          {tool.featured && (
                            <Star className="w-4 h-4 text-admin-warning fill-current" />
                          )}
                        </div>
                        <div className="text-xs text-admin-text-muted truncate max-w-32">
                          {tool.url}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <span className="text-admin-text text-sm">{tool.category}</span>
                  </TableCell>
                  
                  <TableCell>
                    {getStatusBadge(tool.status)}
                  </TableCell>
                  
                  <TableCell>
                    <div className="text-sm">
                      <div className="text-admin-text font-medium">
                        {tool.clicks.toLocaleString()} clicks
                      </div>
                      <div className="text-admin-text-muted text-xs">
                        {tool.views.toLocaleString()} views
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-admin-warning fill-current" />
                      <span className="text-admin-text font-medium">{tool.rating}</span>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <span className="text-admin-text-muted text-sm">{tool.lastUpdated}</span>
                  </TableCell>
                  
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-admin-text-muted hover:text-admin-accent"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="end" 
                        className="bg-admin-card border-admin-border"
                      >
                        <DropdownMenuItem className="text-admin-text hover:text-admin-accent">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-admin-text hover:text-admin-accent">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit Tool
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-admin-text hover:text-admin-accent">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Site
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-admin-error hover:text-admin-error">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {filteredTools.length === 0 && (
          <div className="text-center py-8">
            <p className="text-admin-text-muted">No tools found matching your criteria.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}