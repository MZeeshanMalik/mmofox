import Image from "next/image";
import React from "react";
import { TitleWithCornerGradients } from "../Ui/TitleWithGradients";

const MultiplePaymentMethods = () => {
  const paymentMethods = [
    // Top row
    {
      id: 1,
      name: "Alipay",
      logo: "/payment/chinies.png",
      alt: "支付宝",
    },
    {
      id: 2,
      name: "WeChat Pay",
      logo: "/payment/wechatpay.png",
      alt: "微信支付",
    },
    { id: 3, name: "Visa", logo: "/payment/visa.png", alt: "VISA" },

    // Bottom row
    {
      id: 4,
      name: "GiroPay",
      logo: "/payment/giropay.png",
      alt: "giropay",
    },
    { id: 5, name: "Amazon", logo: "/payment/amazon.png", alt: "amazon" },
    { id: 6, name: "Skrill", logo: "/payment/skrill.png", alt: "Skrill" },
    { id: 7, name: "PayPal", logo: "/payment/Vector.png", alt: "PayPal" },
  ];

  return (
    <section
      className="relative w-full py-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0c0f23 0%, #111330 100%)",
      }}
    >
      {/* Grid overlay for the futuristic background effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#7e35cb22 1px, transparent 1px), linear-gradient(90deg, #7e35cb22 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "center bottom",
          perspective: "1000px",
          transform: "rotateX(60deg)",
          transformOrigin: "bottom",
          bottom: "-5%",
          height: "60%",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title with decorative elements */}
        <div className="flex items-center justify-center mb-12">
          <TitleWithCornerGradients title="Multiple Payment Methods" />
        </div>

        {/* Payment methods grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
          {/* Top row - 3 items */}
          <div className="lg:col-span-2 lg:col-start-2 text-white">
            <PaymentCard
              name={paymentMethods[0].name}
              logo={paymentMethods[0].logo}
              alt={paymentMethods[0].alt}
            />
          </div>
          <div className="lg:col-span-1">
            <PaymentCard
              name={paymentMethods[1].name}
              logo={paymentMethods[1].logo}
              alt={paymentMethods[1].alt}
            />
          </div>
          <div className="lg:col-span-2">
            <PaymentCard
              name={paymentMethods[2].name}
              logo={paymentMethods[2].logo}
              alt={paymentMethods[2].alt}
            />
          </div>

          {/* Bottom row - 4 items */}
          <div className="lg:col-span-1">
            <PaymentCard
              name={paymentMethods[3].name}
              logo={paymentMethods[3].logo}
              alt={paymentMethods[3].alt}
            />
          </div>
          <div className="lg:col-span-2">
            <PaymentCard
              name={paymentMethods[4].name}
              logo={paymentMethods[4].logo}
              alt={paymentMethods[4].alt}
            />
          </div>
          <div className="lg:col-span-2">
            <PaymentCard
              name={paymentMethods[5].name}
              logo={paymentMethods[5].logo}
              alt={paymentMethods[5].alt}
            />
          </div>
          <div className="lg:col-span-2">
            <PaymentCard
              name={paymentMethods[6].name}
              logo={paymentMethods[6].logo}
              alt={paymentMethods[6].alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type PaymentCardProps = {
  name: string;
  logo: string;
  alt: string;
};

const PaymentCard = ({ logo, alt }: PaymentCardProps) => {
  return (
    <div
      className="relative rounded-lg h-16 md:h-20 flex items-center justify-center bg-opacity-50 transition-transform hover:scale-105"
      style={{
        background: "linear-gradient(145deg, #160d31 0%, #0d0a1f 100%)",
        boxShadow: "0 0 15px rgba(138, 78, 255, 0.35)",
      }}
    >
      {/* Purple border glow effect */}
      <div
        className="absolute inset-0 -z-10 rounded-lg opacity-50 "
        style={{
          background: "linear-gradient(90deg, #7e35cb 0%, #8345ff 100%)",
          filter: "blur(4px)",
          transform: "scale(1.03)",
        }}
      />

      {/* If you have the actual logo images, use them. For now using text as placeholder */}
      {logo ? (
        <Image
          src={logo}
          alt={alt}
          height={60}
          width={60}
          className="max-h-10 max-w-[80%] object-contain"
        />
      ) : (
        <span className="text-white font-bold text-xl">{alt}</span>
      )}
    </div>
  );
};

export default MultiplePaymentMethods;
