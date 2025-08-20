import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, MousePointer, Bot, FolderTree, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Views",
    value: "45,823",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: Eye,
    description: "Page views this month"
  },
  {
    title: "Tool Clicks",
    value: "23,451",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: MousePointer,
    description: "Clicks on AI tools"
  },
  {
    title: "AI Tools",
    value: "270",
    change: "+15",
    changeType: "positive" as const,
    icon: Bot,
    description: "Total tools in database"
  },
  {
    title: "Categories",
    value: "18",
    change: "+2",
    changeType: "positive" as const,
    icon: FolderTree,
    description: "Tool categories"
  },
  {
    title: "Growth Rate",
    value: "15.3%",
    change: "+2.1%",
    changeType: "positive" as const,
    icon: TrendingUp,
    description: "Monthly growth"
  },
  {
    title: "Active Users",
    value: "1,234",
    change: "+5.7%",
    changeType: "positive" as const,
    icon: Users,
    description: "Monthly active users"
  }
];

export function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-admin-card border-admin-border hover:shadow-admin transition-smooth group">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-admin-text-muted">
              {stat.title}
            </CardTitle>
            <div className="w-8 h-8 bg-gradient-admin rounded-lg flex items-center justify-center">
              <stat.icon className="w-4 h-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-admin-text mb-1">
              {stat.value}
            </div>
            <div className="flex items-center gap-2">
              <Badge 
                variant={stat.changeType === "positive" ? "default" : "destructive"}
                className="bg-admin-success/20 text-admin-success border-0"
              >
                {stat.change}
              </Badge>
              <CardDescription className="text-admin-text-muted text-xs">
                {stat.description}
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}