import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const LiveTradesDialog = () => {
  const [data, setData] = useState([
    { time: "0s", value: 300 },
    { time: "1s", value: 315 },
    { time: "2s", value: 335 },
    { time: "3s", value: 360 },
    { time: "4s", value: 385 },
    { time: "5s", value: 420 },
    { time: "6s", value: 455 },
    { time: "7s", value: 490 },
    { time: "8s", value: 530 },
    { time: "9s", value: 570 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const lastValue = prevData[prevData.length - 1].value;
        const change = Math.random() * 40 + 20; // Random increase between 20-60
        const newValue = lastValue + change;
        
        const newData = [
          ...prevData.slice(1),
          {
            time: `${prevData.length}s`,
            value: parseFloat(newValue.toFixed(2)),
          },
        ];
        
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentValue = data[data.length - 1].value;
  const profit = currentValue - 300;
  const profitPercentage = ((profit / 300) * 100).toFixed(2);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <section className="px-4 py-2">
          <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-8 text-lg font-semibold shadow-lg">
            <TrendingUp className="mr-2 h-6 w-6" />
            View Live Trades
          </Button>
        </section>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-white mb-6">
            If you had invested €300 a week ago
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Current Value Display */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-sm text-slate-400 mb-2">Current Value</div>
            <div className="text-4xl font-bold text-green-400 mb-2">
              €{currentValue.toFixed(2)}
            </div>
            <div className="text-lg text-green-300">
              +€{profit.toFixed(2)} ({profitPercentage}%)
            </div>
          </div>

          {/* Chart */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis 
                  dataKey="time" 
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8' }}
                />
                <YAxis 
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8' }}
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
          <div className="text-center text-sm text-slate-400">
            <p>Live simulation • Updates every second</p>
            <p className="mt-2">This is a demo showing potential returns</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LiveTradesDialog;
