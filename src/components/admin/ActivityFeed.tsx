import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Bell, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  User, 
  Bot, 
  Eye,
  MousePointer,
  TrendingUp,
  MessageSquare,
  Settings,
  Upload
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "tool_added",
    user: "Admin",
    action: "Added new AI tool",
    target: "GPT-4 Turbo",
    time: "2 minutes ago",
    icon: Bot,
    status: "success"
  },
  {
    id: 2,
    type: "category_updated", 
    user: "Admin",
    action: "Updated category",
    target: "Video Generation",
    time: "15 minutes ago",
    icon: Settings,
    status: "info"
  },
  {
    id: 3,
    type: "submission_pending",
    user: "User123",
    action: "Submitted tool for review",
    target: "AI Assistant Pro",
    time: "1 hour ago",
    icon: Upload,
    status: "pending"
  },
  {
    id: 4,
    type: "high_traffic",
    user: "System",
    action: "High traffic detected on",
    target: "ChatGPT page",
    time: "2 hours ago", 
    icon: TrendingUp,
    status: "success"
  },
  {
    id: 5,
    type: "comment_added",
    user: "User456",
    action: "Left a comment on",
    target: "MidJourney tool",
    time: "3 hours ago",
    icon: MessageSquare,
    status: "info"
  },
  {
    id: 6,
    type: "tool_clicked",
    user: "System",
    action: "1000+ clicks reached for",
    target: "Claude AI",
    time: "4 hours ago",
    icon: MousePointer,
    status: "success"
  },
  {
    id: 7,
    type: "page_view",
    user: "System", 
    action: "Traffic spike on",
    target: "AI Tools homepage",
    time: "5 hours ago",
    icon: Eye,
    status: "info"
  },
  {
    id: 8,
    type: "user_registered",
    user: "NewUser789",
    action: "Registered account",
    target: "Premium subscription",
    time: "6 hours ago",
    icon: User,
    status: "success"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "success":
      return <CheckCircle className="w-4 h-4 text-admin-success" />;
    case "pending":
      return <Clock className="w-4 h-4 text-admin-warning" />;
    case "error":
      return <AlertTriangle className="w-4 h-4 text-admin-error" />;
    default:
      return <Bell className="w-4 h-4 text-admin-accent" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "success":
      return "border-l-admin-success bg-admin-success/5";
    case "pending": 
      return "border-l-admin-warning bg-admin-warning/5";
    case "error":
      return "border-l-admin-error bg-admin-error/5";
    default:
      return "border-l-admin-accent bg-admin-accent/5";
  }
};

export function ActivityFeed() {
  return (
    <Card className="bg-admin-card border-admin-border shadow-admin">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle className="text-admin-text flex items-center gap-2">
            <Bell className="w-5 h-5 text-admin-accent" />
            Activity Feed
          </CardTitle>
          <CardDescription className="text-admin-text-muted">
            Real-time updates and system notifications
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
      <CardContent className="p-0">
        <ScrollArea className="h-96">
          <div className="space-y-1 p-6 pt-0">
            {activities.map((activity) => (
              <div 
                key={activity.id} 
                className={`flex items-start gap-3 p-4 rounded-lg border-l-4 transition-smooth hover:shadow-md ${getStatusColor(activity.status)}`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  {getStatusIcon(activity.status)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-admin-text">
                      {activity.user}
                    </span>
                    <span className="text-admin-text-muted">
                      {activity.action}
                    </span>
                    <span className="font-medium text-admin-accent">
                      {activity.target}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1">
                    <activity.icon className="w-3 h-3 text-admin-text-muted" />
                    <span className="text-xs text-admin-text-muted">
                      {activity.time}
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  {activity.status === "pending" && (
                    <Badge variant="outline" className="border-admin-warning text-admin-warning">
                      Pending
                    </Badge>
                  )}
                  {activity.status === "success" && (
                    <Badge className="bg-admin-success/20 text-admin-success border-0">
                      Complete
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}