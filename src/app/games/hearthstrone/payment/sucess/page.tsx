import PaymentSuccess from "@/components/game/PaymentSucess";
import GamesBanner from "@/components/Ui/GameBanner";
import React from "react";

function page() {
  return (
    <div>
      <div>
        <GamesBanner title="Payment" imagePath="/banner/payment.png" />
      </div>
      <div className="p-4 md:p-8 bg-[#0F1524] text-white">
        <PaymentSuccess />
      </div>
    </div>
  );
}

export default page;
