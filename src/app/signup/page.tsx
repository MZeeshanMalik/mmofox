"use client";
import SignupForm from "@/components/Forms/SignupForm";

export default function HomePage() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4 bg-form">
      <SignupForm
        onSignup={(formData) => {
          console.log("Signing up with:", formData);
          // Implement your signup logic here
        }}
      />
    </div>
  );
}
