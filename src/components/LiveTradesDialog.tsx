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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const LiveTradesDialog = () => {
  const [currentDay, setCurrentDay] = useState(1);
  
  // Generate 30 days of data with gradual growth to +200%
  const generateMonthData = () => {
    const days = [];
    const initialValue = 300;
    const finalValue = 1800; // +500% = 300 * 6
    
    for (let i = 1; i <= 30; i++) {
      const value = initialValue + ((finalValue - initialValue) / 29) * (i - 1);
      days.push({
        day: i,
        value: parseFloat(value.toFixed(2))
      });
    }
    return days;
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
              <LineChart data={visibleData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis 
                  dataKey="day" 
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <YAxis 
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  domain={[300, 'auto']}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #475569',
                    borderRadius: '0.5rem',
                    color: '#fff'
                  }}
                  formatter={(value: number) => [`€${value.toFixed(2)}`, 'Value']}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
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
