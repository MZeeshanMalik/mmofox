import HeroSlider from "@/components/Home/HeroSlider";
import HotGameGrid from "@/components/Home/HotGameGrid";
import HotOffers from "@/components/Home/HotOffers";
import HotSalePanel from "@/components/Home/HotSalePanel";
import MultiplePaymentMethods from "@/components/Home/MultiplePayments";
// import Home from "@/components/Home";
import Notification from "@/components/Home/Notification";
import SearchPanel from "@/components/Home/SearchPanel";
import TestimonialSection from "@/components/Home/TestimonialSection";
import WhyPlayersChooseUs from "@/components/Home/WhyChooseUs";
// import SidebarButtons from "@/components/Home/SidebarButtons";
import React from "react";

function page() {
  return (
    <div className="bg-[var(--bgPrimary)]  min-h-screen">
      <HeroSlider />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 mt-2 mb-2 p-2 bg-(var(--bgPrimary))">
        <HotSalePanel />
        {/* <SidebarButtons /> */}
        <SearchPanel />
      </div>
      <Notification />
      <HotGameGrid />
      <HotOffers />
      <TestimonialSection />
      <WhyPlayersChooseUs />
      <MultiplePaymentMethods />
    </div>
  );
}

export default page;
