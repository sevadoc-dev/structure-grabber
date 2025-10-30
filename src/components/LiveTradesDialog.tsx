import { useState, useEffect } from "react";
import { TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar } from "recharts";

const LiveTradesDialog = () => {
  const [currentDay, setCurrentDay] = useState(1);
  
  // Generate 30 days of candlestick data with gradual growth
  const generateMonthData = () => {
    const days = [];
    const initialValue = 300;
    const finalValue = 1800;
    
    for (let i = 1; i <= 30; i++) {
      const baseValue = initialValue + ((finalValue - initialValue) / 29) * (i - 1);
      const volatility = baseValue * 0.03; // 3% daily volatility
      
      const open = baseValue + (Math.random() - 0.5) * volatility;
      const close = baseValue + (Math.random() - 0.5) * volatility;
      const high = Math.max(open, close) + Math.random() * volatility * 0.5;
      const low = Math.min(open, close) - Math.random() * volatility * 0.5;
      
      days.push({
        day: i,
        open: parseFloat(open.toFixed(2)),
        high: parseFloat(high.toFixed(2)),
        low: parseFloat(low.toFixed(2)),
        close: parseFloat(close.toFixed(2)),
        value: parseFloat(close.toFixed(2))
      });
    }
    return days;
  };
  
  // Custom candlestick shape
  const Candlestick = (props: any) => {
    const { x, y, width, height, payload } = props;
    const { open, close, high, low } = payload;
    
    const isGreen = close >= open;
    const color = isGreen ? "#10b981" : "#ef4444";
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
      </g>
    );
  };
  
  const [data] = useState(generateMonthData());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDay((prev) => {
        if (prev >= 30) return 1;
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentValue = data[currentDay - 1].value;
  const profit = currentValue - 300;
  const profitPercentage = ((profit / 300) * 100).toFixed(2);
  const visibleData = data.slice(0, currentDay);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <section className="px-4 py-2">
          <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-8 text-lg font-semibold shadow-lg">
            <TrendingUp className="mr-2 h-6 w-6" />
            View Live Trades
          </Button>
        </section>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-[95vw] max-h-[85vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 p-4 sm:p-6">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50">
          <X className="h-5 w-5 text-slate-400 hover:text-white" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader className="pr-8">
          <DialogTitle className="text-xl sm:text-2xl text-center text-white mb-4 sm:mb-6">
            If you had invested €300 a week ago
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 sm:space-y-6">
          {/* Current Value Display */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 text-center">
            <div className="text-xs sm:text-sm text-slate-400 mb-2">Current Value</div>
            <div className="text-2xl sm:text-4xl font-bold text-green-400 mb-2">
              €{currentValue.toFixed(2)}
            </div>
            <div className="text-base sm:text-lg text-green-300">
              +€{profit.toFixed(2)} ({profitPercentage}%)
            </div>
          </div>

          {/* Chart */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-2 sm:p-4">
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart data={visibleData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis 
                  dataKey="day" 
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <YAxis 
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  domain={['auto', 'auto']}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #475569',
                    borderRadius: '0.5rem',
                    color: '#fff'
                  }}
                  formatter={(value: number, name: string) => {
                    const labels: Record<string, string> = {
                      open: 'Open',
                      high: 'High',
                      low: 'Low',
                      close: 'Close'
                    };
                    return [`€${value.toFixed(2)}`, labels[name] || name];
                  }}
                  content={({ payload }) => {
                    if (!payload || payload.length === 0) return null;
                    const data = payload[0].payload;
                    return (
                      <div className="bg-slate-900 border border-slate-700 rounded-lg p-3">
                        <p className="text-slate-400 text-xs mb-1">Day {data.day}</p>
                        <div className="space-y-1 text-sm">
                          <p className="text-green-400">Open: €{data.open?.toFixed(2)}</p>
                          <p className="text-green-300">High: €{data.high?.toFixed(2)}</p>
                          <p className="text-red-300">Low: €{data.low?.toFixed(2)}</p>
                          <p className={data.close >= data.open ? "text-green-400 font-semibold" : "text-red-400 font-semibold"}>
                            Close: €{data.close?.toFixed(2)}
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

          {/* Info */}
          <div className="text-center text-xs sm:text-sm text-slate-400">
            <p>Live simulation • Day {currentDay} of 30</p>
            <p className="mt-1 sm:mt-2">This is a demo showing potential monthly returns</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LiveTradesDialog;
