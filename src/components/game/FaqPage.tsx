// import FaqAccordion from '@/components/FAQ/FaqAccordion';

import FaqAccordion from "./FaqAccordian";

export default function D4BoostingFAQPage() {
  const faqItems = [
    {
      id: "register",
      question: "How To Register A Member On D4Gold.Com?",
      answer: (
        <div className="space-y-3">
          <p>There Are Two Registration Methods For D4Gold:</p>
          <p>
            (1) Enter Your Email Address And Password Twice On The Registration
            Interface, Check &quot;I Accept Terms And Conditions And Privacy
            Policy&quot; And &quot;I Want To Get Information About Activities,
            Sale Discount Offers&quot; And Click &quot;Sign Up&quot; To Complete
            The Registration.
          </p>
          <p>
            (2) You Can Register A Member With Social Networks, Such As
            Facebook, X, Google, Twitch, Steam, Reddit And Discord.
          </p>
        </div>
      ),
    },
    {
      id: "track-order",
      question: "How To Track My Order After Payment?",
      answer: (
        <div className="space-y-3">
          <p>There Are Three Methods To Track Your Order After The Payment:</p>
          <p>
            (1) You Can Directly Enter The Order Number In The Search Box At The
            Top Of D4Gold Homepage To Check The Order Status.
          </p>
          <p>
            (2) You Can Get Notification Emails From D4Gold.Com When Payment Is
            Made, When There Is A Problem With The Order And When The Order Is
            Completed.
          </p>
          <p>
            (3) You Can Contact Us Via LiveChat To Check Your Order Easily By
            The Help Of Our Agents.
          </p>
        </div>
      ),
    },
    {
      id: "place-order",
      question: "How To Place An Order?",
      answer: (
        <div className="space-y-2">
          <p>Step 1: Choose Products/Service</p>
          <p>Step 2: Select Your Server</p>
          <p>Step 3: Select Type The Amount You Want</p>
          <p>Step 4: Click &quot;ADD CART&quot; Or &quot;BUY NOW&quot;</p>
          <p>Step 5: Check Your Cart/Order And Click Register</p>
          <p>
            Step 6: Fill In All Information, Select One Payment Method To Pay
            Over.
          </p>
        </div>
      ),
    },
    {
      id: "customer-support",
      question: "How To Get Instant Customer Support On D4Gold.Com?",
      answer: (
        <div className="space-y-3">
          <p>
            (1) Click &quot;Live Chat&quot; Button To Contact Our 24/7 Online
            Customer Representative
          </p>
          <p>
            (2) Send A Message To Support@D4gold.Com And We Will Respond
            Immediately After Receiving Your Email
          </p>
          <p>(3) Contact Us Instantly Via WhatsApp (+852 56485486)</p>
          <p>(4) Call Us Directly +1-323-825-9856(USA)</p>
        </div>
      ),
    },
    {
      id: "payment-pending",
      question: "Why Is My Payment Pending?",
      answer: (
        <div>
          <p>
            A Pending E-Check Is A Type Of Payment Option Available With PayPal.
            A Pending E-Check Is Just Like Visiting A Normal Check, And It
            Usually Take 3-7 Business Days To Clear. While PayPal Verifies The
            Funds Are Present Within The Sender&#39;s Account. Once The Check Is
            Cleared, The Money Is Transferred To D4Gold&#39;s Account And Then
            Your Order Will Be Processed Immediately Thereafter.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#0A0F20] min-h-screen py-8 px-4">
      <div className=" mx-auto">
        <FaqAccordion faqItems={faqItems} />
      </div>
    </div>
  );
}
