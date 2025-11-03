import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { History, ArrowDownToLine, ArrowUpFromLine, LogOut, Settings } from "lucide-react";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, Cell, LabelList } from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAITradingActive, setIsAITradingActive] = useState(true);
  
  // Generate static profit data
  const generateStaticData = () => {
    const days = [];
    const startDate = new Date(2024, 9, 15); // October 15, 2024
    
    for (let i = 0; i < 16; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      const dateStr = `${currentDate.getDate()} Oct`;
      
      const profit = Math.floor(Math.random() * 400) + 100; // +100 to +500
      
      days.push({
        day: dateStr,
        profit: profit
      });
    }
    return days;
  };

  const [data] = useState(generateStaticData());


  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="text-3xl font-bold text-primary">
            Ørsted AI
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-blue-800/50"
            >
              <Settings className="h-6 w-6" />
            </Button>
            <Button 
              variant="destructive"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 px-8 py-6 text-lg"
            >
              <History className="h-5 w-5" />
              History
            </Button>
            <Button 
              className="flex items-center gap-2 px-8 py-6 text-lg bg-primary hover:bg-primary-hover"
            >
              <ArrowDownToLine className="h-5 w-5" />
              Deposit
            </Button>
            <Button 
              onClick={() => navigate("/withdraw")}
              className="flex items-center gap-2 px-8 py-6 text-lg bg-primary hover:bg-primary-hover"
            >
              <ArrowUpFromLine className="h-5 w-5" />
              Withdraw
            </Button>
          </div>

          {/* Chart Card */}
          <Card className="p-6 bg-slate-900/80 border-blue-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Trading Performance</h2>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                isAITradingActive ? 'bg-green-500/20' : 'bg-red-500/20'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  isAITradingActive ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
                <span className={`text-sm font-semibold ${
                  isAITradingActive ? 'text-green-500' : 'text-red-500'
                }`}>
                  {isAITradingActive ? 'AI Trading Active' : 'AI Trading Inactive'}
                </span>
              </div>
            </div>
            <div className="bg-card rounded-lg">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} margin={{ top: 40, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="day" 
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 11 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis 
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                    domain={[0, 550]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '0.5rem',
                      color: 'hsl(var(--foreground))'
                    }}
                    content={({ payload }) => {
                      if (!payload || payload.length === 0) return null;
                      const data = payload[0].payload;
                      return (
                        <div className="bg-card border border-border rounded-lg p-3">
                          <p className="text-muted-foreground text-xs mb-1">{data.day}</p>
                          <p className="text-green-500 font-bold text-lg">
                            Profit: +€{data.profit}
                          </p>
                        </div>
                      );
                    }}
                  />
                  <Bar dataKey="profit" radius={[8, 8, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="#10b981" />
                    ))}
                    <LabelList 
                      dataKey="profit" 
                      position="top" 
                      formatter={(value: number) => `+€${value}`}
                      style={{ fill: '#10b981', fontSize: '11px', fontWeight: '600' }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Turn off AI Trading Button */}
          <div className="flex justify-center mt-6">
            <Button 
              onClick={() => setIsAITradingActive(!isAITradingActive)}
              className={`px-8 py-6 text-lg ${
                isAITradingActive 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isAITradingActive ? 'Turn off AI Trading' : 'Turn on AI Trading'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
