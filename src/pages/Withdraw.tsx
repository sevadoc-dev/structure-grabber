import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Withdraw = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  const availableBalance = 2847.50;

  const handleWithdraw = () => {
    // Handle withdrawal logic here
    console.log("Withdrawing:", amount, "to", walletAddress);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate("/dashboard")}
              className="text-white hover:bg-slate-700/50"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div className="text-3xl font-bold text-primary">
              Ørsted AI
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Withdraw Funds</h1>
            <p className="text-slate-400">Transfer your earnings to your wallet</p>
          </div>

          {/* Balance Card */}
          <Card className="p-6 bg-slate-900/80 border-blue-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">Available Balance</p>
                <p className="text-3xl font-bold text-green-500">€{availableBalance.toFixed(2)}</p>
              </div>
              <Wallet className="h-12 w-12 text-primary" />
            </div>
          </Card>

          {/* Withdrawal Form */}
          <Card className="p-6 bg-slate-900/80 border-blue-700">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-white text-lg">
                  Withdrawal Amount (EUR)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white text-lg h-14"
                />
                <div className="flex gap-2 mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount((availableBalance * 0.25).toFixed(2))}
                    className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
                  >
                    25%
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount((availableBalance * 0.5).toFixed(2))}
                    className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
                  >
                    50%
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount((availableBalance * 0.75).toFixed(2))}
                    className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
                  >
                    75%
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount(availableBalance.toFixed(2))}
                    className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700"
                  >
                    MAX
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="wallet" className="text-white text-lg">
                  Wallet Address
                </Label>
                <Input
                  id="wallet"
                  type="text"
                  placeholder="Enter your wallet address"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white h-14"
                />
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Amount:</span>
                  <span className="text-white font-semibold">€{amount || "0.00"}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Processing Fee (2%):</span>
                  <span className="text-white font-semibold">
                    €{amount ? (parseFloat(amount) * 0.02).toFixed(2) : "0.00"}
                  </span>
                </div>
                <div className="border-t border-slate-700 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="text-white font-bold">You'll Receive:</span>
                    <span className="text-green-500 font-bold text-lg">
                      €{amount ? (parseFloat(amount) * 0.98).toFixed(2) : "0.00"}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleWithdraw}
                disabled={!amount || !walletAddress || parseFloat(amount) > availableBalance}
                className="w-full bg-primary hover:bg-primary-hover text-white py-6 text-lg font-semibold"
              >
                Confirm Withdrawal
              </Button>
            </div>
          </Card>

          {/* Info */}
          <Card className="p-4 bg-slate-900/80 border-slate-700">
            <p className="text-slate-400 text-sm text-center">
              Withdrawals are typically processed within 24-48 hours
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Withdraw;
