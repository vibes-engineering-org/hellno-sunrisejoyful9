"use client";

import { useState } from "react";
import { DaimoPayTransferButton } from "~/components/daimo-pay-transfer-button";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

const RECIPIENT_ADDRESS = "0x6d9fFaede2c6CD9bb48becE230ad589e0E0D981c";
const PRESET_AMOUNTS = [5, 10, 25, 50];

export default function DonationApp() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handlePaymentCompleted = () => {
    setShowThankYou(true);
    setSelectedAmount(null);
    // Auto hide thank you after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  const handleBackToSelection = () => {
    setSelectedAmount(null);
    setShowThankYou(false);
  };

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-xl">
          <div className="space-y-6">
            <div className="text-6xl">❤️</div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Thank you
            </h2>
            <p className="text-gray-600">
              Your support means the world to me
            </p>
            <Button 
              onClick={handleBackToSelection}
              variant="outline"
              className="mt-4 border-orange-200 hover:bg-orange-50"
            >
              Make Another Donation
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (selectedAmount) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-6 bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-xl">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Donate ${selectedAmount} USDC
              </h2>
              <p className="text-sm text-gray-600 break-all">
                To: {RECIPIENT_ADDRESS}
              </p>
            </div>
            
            <div className="space-y-4">
              <DaimoPayTransferButton
                text={`Donate $${selectedAmount} USDC`}
                toAddress={RECIPIENT_ADDRESS as `0x${string}`}
                amount={selectedAmount.toString()}
                onPaymentCompleted={handlePaymentCompleted}
              />
              
              <Button 
                onClick={handleBackToSelection}
                variant="outline"
                className="w-full border-orange-200 hover:bg-orange-50"
              >
                Back
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-xl">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Support the Community
            </h1>
            <p className="text-sm text-gray-600 break-all">
              To: {RECIPIENT_ADDRESS}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {PRESET_AMOUNTS.map((amount) => (
              <Button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className="h-16 text-lg font-semibold bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200"
              >
                ${amount} USDC
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}