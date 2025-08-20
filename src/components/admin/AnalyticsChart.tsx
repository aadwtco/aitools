import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const clicksData = [
  { month: "Jan", clicks: 4000, searches: 2400 },
  { month: "Feb", clicks: 3000, searches: 1398 },
  { month: "Mar", clicks: 2000, searches: 9800 },
  { month: "Apr", clicks: 2780, searches: 3908 },
  { month: "May", clicks: 1890, searches: 4800 },
  { month: "Jun", clicks: 2390, searches: 3800 },
  { month: "Jul", clicks: 3490, searches: 4300 },
];

const topCategories = [
  { name: "Chatbots", value: 35, color: "hsl(var(--primary))" },
  { name: "Text Writing", value: 25, color: "hsl(var(--primary-glow))" },
  { name: "Image Gen", value: 20, color: "hsl(var(--success))" },
  { name: "Video", value: 12, color: "hsl(var(--warning))" },
  { name: "Other", value: 8, color: "hsl(var(--muted-foreground))" },
];

export function AnalyticsChart() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Clicks & Searches Chart */}
      <Card className="bg-admin-card border-admin-border shadow-admin">
        <CardHeader>
          <CardTitle className="text-admin-text">Clicks & Searches Trend</CardTitle>
          <CardDescription className="text-admin-text-muted">
            Monthly performance over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={clicksData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--admin-border))" />
              <XAxis 
                dataKey="month" 
                tick={{ fill: "hsl(var(--admin-text-muted))" }}
                axisLine={{ stroke: "hsl(var(--admin-border))" }}
              />
              <YAxis 
                tick={{ fill: "hsl(var(--admin-text-muted))" }}
                axisLine={{ stroke: "hsl(var(--admin-border))" }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--admin-card))", 
                  border: "1px solid hsl(var(--admin-border))",
                  borderRadius: "8px",
                  color: "hsl(var(--admin-text))"
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="clicks" 
                stroke="hsl(var(--admin-accent))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--admin-accent))", strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="searches" 
                stroke="hsl(var(--admin-success))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--admin-success))", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Category Distribution */}
      <Card className="bg-admin-card border-admin-border shadow-admin">
        <CardHeader>
          <CardTitle className="text-admin-text">Popular Categories</CardTitle>
          <CardDescription className="text-admin-text-muted">
            Distribution of tool categories by usage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={topCategories}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {topCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--admin-card))", 
                  border: "1px solid hsl(var(--admin-border))",
                  borderRadius: "8px",
                  color: "hsl(var(--admin-text))"
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {topCategories.map((category) => (
              <div key={category.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: category.color }}
                />
                <span className="text-xs text-admin-text-muted">
                  {category.name} ({category.value}%)
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}