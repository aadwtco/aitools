import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, FolderTree, BarChart3, Eye, Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  {
    title: "Add New Tool",
    description: "Add a new AI tool to the database",
    icon: Plus,
    action: "add-tool",
    color: "bg-gradient-primary"
  },
  {
    title: "Manage Categories",
    description: "Organize and edit tool categories",
    icon: FolderTree,
    action: "categories",
    color: "bg-gradient-to-br from-green-500 to-green-600"
  },
  {
    title: "View Analytics",
    description: "Check performance metrics and insights",
    icon: BarChart3,
    action: "analytics",
    color: "bg-gradient-to-br from-purple-500 to-purple-600"
  },
  {
    title: "Review Submissions",
    description: "Review user-submitted tools",
    icon: Eye,
    action: "submissions",
    color: "bg-gradient-to-br from-orange-500 to-orange-600"
  }
];

export function QuickActions() {
  return (
    <Card className="bg-admin-card border-admin-border shadow-admin">
      <CardHeader>
        <CardTitle className="text-admin-text">Quick Actions</CardTitle>
        <CardDescription className="text-admin-text-muted">
          Frequently used admin functions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {actions.map((action) => (
            <Button
              key={action.action}
              variant="ghost"
              className="h-auto p-4 justify-start bg-admin-bg/50 hover:bg-admin-bg border border-admin-border hover:border-admin-accent/50 transition-smooth group"
            >
              <div className="flex items-center gap-3 w-full">
                <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center shrink-0 group-hover:shadow-admin-glow transition-smooth`}>
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-admin-text text-sm group-hover:text-admin-accent transition-colors">
                    {action.title}
                  </div>
                  <div className="text-xs text-admin-text-muted">
                    {action.description}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}