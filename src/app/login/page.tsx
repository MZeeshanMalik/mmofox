"use client";
import LoginForm from "@/components/Forms/LoginForm";
import LoginModal from "@/components/Forms/LoginForm";
import { useState } from "react";

export default function HomePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignIn = (email: string, password: string, remember: boolean) => {
    console.log("Signing in with:", email, password, remember);
    // Implement your authentication logic here
    setIsLoginOpen(false);
  };

  const handleCreateAccount = () => {
    console.log("Navigate to create account page");
    // Implement your navigation logic here
  };

  const handleForgotPassword = () => {
    console.log("Navigate to forgot password page");
    // Implement your navigation logic here
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Implement your social login logic here
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4 bg-form">
      <LoginForm
        onSignIn={handleSignIn}
        onCreateAccount={handleCreateAccount}
        onForgotPassword={handleForgotPassword}
        onSocialLogin={handleSocialLogin}
      />
    </div>
  );
}
