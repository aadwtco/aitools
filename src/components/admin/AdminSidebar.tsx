import { 
  LayoutDashboard, 
  Bot, 
  FolderTree, 
  BarChart3, 
  Users, 
  MessageSquare, 
  FileImage, 
  Settings, 
  Plus,
  RefreshCw,
  Download,
  LogOut
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard, exact: true },
  { title: "AI Tools", url: "/admin/tools", icon: Bot, badge: "270" },
  { title: "Categories", url: "/admin/categories", icon: FolderTree, badge: "18" },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
  { title: "Users", url: "/admin/users", icon: Users },
  { title: "Comments", url: "/admin/comments", icon: MessageSquare, badge: "12" },
  { title: "Media", url: "/admin/media", icon: FileImage },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

const quickActions = [
  { title: "Add New Tool", icon: Plus, action: "add-tool" },
  { title: "Refresh Cache", icon: RefreshCw, action: "refresh" },
  { title: "Export Data", icon: Download, action: "export" },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string, exact = false) => {
    if (exact) return currentPath === path;
    return currentPath.startsWith(path);
  };

  const getNavClass = (path: string, exact = false) => {
    const active = isActive(path, exact);
    return active 
      ? "bg-admin-accent text-primary font-medium shadow-md" 
      : "hover:bg-admin-card/50 text-sidebar-foreground hover:text-primary transition-smooth";
  };

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-72"} border-admin-border bg-admin-sidebar`}>
      <SidebarContent className="bg-admin-sidebar">
        {/* Header */}
        <div className="p-4 border-b border-admin-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-white">AI Tools Admin</h2>
                <p className="text-xs text-sidebar-foreground">Welcome, Admin</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        {!collapsed && (
          <div className="p-4">
            <h3 className="text-xs font-semibold text-sidebar-foreground mb-3 uppercase tracking-wider">
              Quick Actions
            </h3>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <Button
                  key={action.action}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-sidebar-foreground hover:text-primary hover:bg-admin-card/50 h-8"
                >
                  <action.icon className="w-4 h-4 mr-2" />
                  {action.title}
                </Button>
              ))}
            </div>
          </div>
        )}

        <Separator className="border-admin-border" />

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.exact}
                      className={getNavClass(item.url, item.exact)}
                    >
                      <item.icon className="w-4 h-4" />
                      {!collapsed && (
                        <>
                          <span>{item.title}</span>
                          {item.badge && (
                            <Badge 
                              variant="secondary" 
                              className="ml-auto bg-admin-accent/20 text-primary border-0"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bottom Section */}
        <div className="mt-auto p-4 border-t border-admin-border">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-sidebar-foreground hover:text-destructive hover:bg-destructive/10"
          >
            <LogOut className="w-4 h-4" />
            {!collapsed && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}