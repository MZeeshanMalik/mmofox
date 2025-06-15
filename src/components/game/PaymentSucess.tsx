import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

interface PaymentSuccessProps {
  transactionId?: string;
  orderId?: string;
  onVisitHome?: () => void;
  onViewOrder?: () => void;
  homeUrl?: string;
  orderUrl?: string;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({
  transactionId,
  orderId,
  onVisitHome,
  onViewOrder,
  homeUrl = "/",
  orderUrl = "/orders",
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-[#121A2F] rounded-xl p-6 md:p-12 text-center shadow-lg">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-[#0D3D25] flex items-center justify-center">
          <FaCheck className="text-[#3DDB8D] text-4xl" />
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        Payment Successful!
      </h1>

      <p className="text-gray-300 mb-8 max-w-xl mx-auto">
        Thank You For Your Payment. Your Transaction Was Successfully Completed.
        We Will Process Your Order As Soon As Possible.
      </p>

      {transactionId && (
        <p className="text-gray-400 text-sm mb-2">
          Transaction ID: <span className="text-gray-300">{transactionId}</span>
        </p>
      )}

      {orderId && (
        <p className="text-gray-400 text-sm mb-6">
          Order ID: <span className="text-gray-300">{orderId}</span>
        </p>
      )}

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <Link
          href={homeUrl}
          onClick={onVisitHome}
          className="bg-[#E93D82] hover:bg-[#D12E6D] text-white font-medium py-3 px-8 rounded-md transition-colors"
        >
          VISIT HOME
        </Link>

        <Link
          href={orderUrl}
          onClick={onViewOrder}
          className="bg-[#9747FF] hover:bg-[#8538E7] text-white font-medium py-3 px-8 rounded-md transition-colors"
        >
          VIEW ORDER
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
