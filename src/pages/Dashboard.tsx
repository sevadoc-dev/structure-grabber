import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { History, ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar } from "recharts";

const Dashboard = () => {
  // Generate static candlestick data with green candles and profit labels
  const generateStaticData = () => {
    const days = [];
    const baseValue = 1000;
    const startDate = new Date(2024, 9, 15); // October 15, 2024 (month is 0-indexed)
    
    for (let i = 0; i < 16; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      const dateStr = `${currentDate.getDate()} Oct`;
      
      const open = baseValue + i * 30;
      const close = open + Math.random() * 50 + 20; // Always positive (green candles)
      const high = close + Math.random() * 20 + 10;
      const low = open - Math.random() * 15;
      const profit = Math.floor(Math.random() * 400) + 100; // +100 to +500
      
      days.push({
        day: dateStr,
        open: parseFloat(open.toFixed(2)),
        high: parseFloat(high.toFixed(2)),
        low: parseFloat(low.toFixed(2)),
        close: parseFloat(close.toFixed(2)),
        profit: profit
      });
    }
    return days;
  };

  const [data] = useState(generateStaticData());

  // Custom candlestick shape
  const Candlestick = (props: any) => {
    const { x, y, width, height, payload } = props;
    const { open, close, high, low } = payload;
    
    const color = "#10b981"; // Green color
    const candleWidth = Math.max(width * 0.6, 3);
    const candleX = x + (width - candleWidth) / 2;
    
    const topPrice = Math.max(open, close);
    const bottomPrice = Math.min(open, close);
    const range = high - low;
    
    if (range === 0) return null;
    
    const wickX = x + width / 2;
    const highY = y;
    const lowY = y + height;
    const topY = y + ((high - topPrice) / range) * height;
    const bottomY = y + ((high - bottomPrice) / range) * height;
    const candleHeight = Math.abs(bottomY - topY);
    
    return (
      <g>
        {/* Wick */}
        <line
          x1={wickX}
          y1={highY}
          x2={wickX}
          y2={lowY}
          stroke={color}
          strokeWidth={1}
        />
        {/* Candle body */}
        <rect
          x={candleX}
          y={topY}
          width={candleWidth}
          height={Math.max(candleHeight, 1)}
          fill={color}
          stroke={color}
          strokeWidth={1}
        />
        {/* Profit label above candle */}
        <text
          x={x + width / 2}
          y={y - 5}
          textAnchor="middle"
          fill="#10b981"
          fontSize="10"
          fontWeight="600"
        >
          +€{payload.profit}
        </text>
      </g>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-blue-700 bg-blue-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-3xl font-bold text-primary">
            Ørsted AI
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
              className="flex items-center gap-2 px-8 py-6 text-lg bg-primary hover:bg-primary-hover"
            >
              <ArrowUpFromLine className="h-5 w-5" />
              Withdraw
            </Button>
          </div>

          {/* Chart Card */}
          <Card className="p-6 bg-slate-900/80 border-blue-700">
            <h2 className="text-2xl font-bold text-white mb-6">Trading Performance</h2>
            <div className="bg-card rounded-lg">
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={data} margin={{ top: 40, right: 20, bottom: 20, left: 20 }}>
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
                    domain={['auto', 'auto']}
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
                          <p className="text-muted-foreground text-xs mb-1">Day {data.day}</p>
                          <div className="space-y-1 text-sm">
                            <p className="text-green-500">Open: €{data.open?.toFixed(2)}</p>
                            <p className="text-green-400">High: €{data.high?.toFixed(2)}</p>
                            <p className="text-green-600">Low: €{data.low?.toFixed(2)}</p>
                            <p className="text-green-500 font-semibold">
                              Close: €{data.close?.toFixed(2)}
                            </p>
                            <p className="text-green-500 font-bold border-t border-border pt-1 mt-2">
                              Profit: +€{data.profit}
                            </p>
                          </div>
                        </div>
                      );
                    }}
                  />
                  <Bar 
                    dataKey="high" 
                    shape={<Candlestick />}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
