import { AdminLayout } from "@/components/admin/AdminLayout";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { QuickActions } from "@/components/admin/QuickActions";
import { AnalyticsChart } from "@/components/admin/AnalyticsChart";
import { ActivityFeed } from "@/components/admin/ActivityFeed";
import { ToolsManager } from "@/components/admin/ToolsManager";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Eye, 
  MousePointer, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  Users,
  Bot,
  Target,
  Globe,
  Zap
} from "lucide-react";

const recentActivity = [
  {
    id: 1,
    action: "New tool added",
    tool: "ChatGPT 4o",
    time: "2 minutes ago",
    status: "success"
  },
  {
    id: 2,
    action: "Category updated",
    tool: "Video Generation",
    time: "15 minutes ago", 
    status: "info"
  },
  {
    id: 3,
    action: "Tool submission",
    tool: "AI Assistant Pro",
    time: "1 hour ago",
    status: "pending"
  },
  {
    id: 4,
    action: "Analytics updated",
    tool: "Monthly Report",
    time: "2 hours ago",
    status: "success"
  }
];

const topTools = [
  { name: "ChatGPT", clicks: 12453, views: 23451, trend: "+15%" },
  { name: "Claude AI", clicks: 8234, views: 18923, trend: "+8%" },
  { name: "MidJourney", clicks: 7123, views: 15432, trend: "+12%" },
  { name: "DALL-E 3", clicks: 6892, views: 14233, trend: "+5%" },
  { name: "Runway ML", clicks: 5123, views: 11234, trend: "+22%" }
];

const goalProgress = [
  { name: "Monthly Views", current: 45823, target: 50000, percentage: 92 },
  { name: "Tool Submissions", current: 15, target: 20, percentage: 75 },
  { name: "User Engagement", current: 78, target: 85, percentage: 92 },
  { name: "Category Coverage", current: 18, target: 25, percentage: 72 }
];

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header with Welcome Message */}
        <div className="bg-gradient-admin-subtle p-6 rounded-lg border border-admin-border shadow-admin">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-admin-text mb-2">
                Welcome back, Admin! 👋
              </h1>
              <p className="text-admin-text-muted">
                Here's what's happening with your AI tools directory today.
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-admin-accent">270</div>
              <div className="text-sm text-admin-text-muted">Total Tools</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <DashboardStats />

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-admin-card border border-admin-border">
            <TabsTrigger value="overview" className="data-[state=active]:bg-admin-accent data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="tools" className="data-[state=active]:bg-admin-accent data-[state=active]:text-white">
              Tools Management
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-admin-accent data-[state=active]:text-white">
              Advanced Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Analytics Charts */}
            <AnalyticsChart />

            {/* Quick Actions & Activity Feed */}
            <div className="grid gap-6 lg:grid-cols-2">
              <QuickActions />
              <ActivityFeed />
            </div>

            {/* Goals Progress & Top Tools */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Monthly Goals */}
              <Card className="bg-admin-card border-admin-border shadow-admin">
                <CardHeader>
                  <CardTitle className="text-admin-text flex items-center gap-2">
                    <Target className="w-5 h-5 text-admin-accent" />
                    Monthly Goals
                  </CardTitle>
                  <CardDescription className="text-admin-text-muted">
                    Track progress toward monthly objectives
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {goalProgress.map((goal) => (
                    <div key={goal.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-admin-text font-medium">{goal.name}</span>
                        <span className="text-admin-text-muted">
                          {goal.current.toLocaleString()} / {goal.target.toLocaleString()}
                        </span>
                      </div>
                      <Progress 
                        value={goal.percentage} 
                        className="h-2"
                      />
                      <div className="text-right">
                        <Badge className="bg-admin-success/20 text-admin-success border-0">
                          {goal.percentage}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Top Performing Tools */}
              <Card className="bg-admin-card border-admin-border shadow-admin">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-admin-text">Top Performing Tools</CardTitle>
                    <CardDescription className="text-admin-text-muted">
                      Most popular AI tools this month
                    </CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-admin-border text-admin-text-muted hover:text-admin-accent hover:border-admin-accent"
                  >
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topTools.map((tool, index) => (
                      <div key={tool.name} className="flex items-center gap-4 p-3 rounded-lg bg-admin-bg/30 border border-admin-border hover:border-admin-accent/50 transition-colors">
                        <div className="w-8 h-8 bg-gradient-admin rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-admin-text">{tool.name}</div>
                          <div className="flex items-center gap-4 text-xs text-admin-text-muted">
                            <span className="flex items-center gap-1">
                              <MousePointer className="w-3 h-3" />
                              {tool.clicks.toLocaleString()} clicks
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {tool.views.toLocaleString()} views
                            </span>
                          </div>
                        </div>
                        <Badge className="bg-admin-success/20 text-admin-success border-0">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {tool.trend}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tools">
            <ToolsManager />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-admin-card border-admin-border">
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 mx-auto mb-2 text-admin-accent" />
                  <div className="text-2xl font-bold text-admin-text">156</div>
                  <div className="text-sm text-admin-text-muted">Countries</div>
                </CardContent>
              </Card>
              <Card className="bg-admin-card border-admin-border">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-admin-success" />
                  <div className="text-2xl font-bold text-admin-text">12.4K</div>
                  <div className="text-sm text-admin-text-muted">Unique Visitors</div>
                </CardContent>
              </Card>
              <Card className="bg-admin-card border-admin-border">
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-admin-warning" />
                  <div className="text-2xl font-bold text-admin-text">98.5%</div>
                  <div className="text-sm text-admin-text-muted">Uptime</div>
                </CardContent>
              </Card>
              <Card className="bg-admin-card border-admin-border">
                <CardContent className="p-6 text-center">
                  <Bot className="w-8 h-8 mx-auto mb-2 text-admin-accent" />
                  <div className="text-2xl font-bold text-admin-text">4.8</div>
                  <div className="text-sm text-admin-text-muted">Avg Rating</div>
                </CardContent>
              </Card>
            </div>
            <AnalyticsChart />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}