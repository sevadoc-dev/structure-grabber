import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

const LiveActivity = () => {
  const [activity, setActivity] = useState({
    userId: "",
    operationId: "",
    amount: 0,
  });

  const generateRandomActivity = () => {
    const userId = `USER${Math.floor(Math.random() * 9000) + 1000}`;
    const operationId = `OP${Math.floor(Math.random() * 90000) + 10000}`;
    const amount = Math.floor(Math.random() * 701) + 100; // 100-800

    setActivity({ userId, operationId, amount });
  };

  useEffect(() => {
    // Generate initial activity
    generateRandomActivity();

    // Update every 5 seconds
    const interval = setInterval(generateRandomActivity, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 shadow-lg animate-fade-in">
      <div className="max-w-2xl mx-auto flex items-center justify-center gap-2 text-sm">
        <TrendingUp className="w-4 h-4 animate-pulse" />
        <span className="font-semibold">{activity.userId}</span>
        <span>earned</span>
        <span className="font-bold text-green-200">€{activity.amount}</span>
        <span>from operation</span>
        <span className="font-semibold">{activity.operationId}</span>
      </div>
    </div>
  );
};

export default LiveActivity;
