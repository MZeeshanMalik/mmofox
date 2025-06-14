"use client";
import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { FaFacebook, FaTwitter, FaDiscord, FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface LoginFormProps {
  onSignIn?: (email: string, password: string, remember: boolean) => void;
  onCreateAccount?: () => void;
  onForgotPassword?: () => void;
  onSocialLogin?: (provider: string) => void;
}

const LoginForm = ({
  onSignIn,
  onCreateAccount,
  onForgotPassword,
  onSocialLogin,
}: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSignIn) onSignIn(email, password, rememberMe);
  };

  const handleSocialLogin = (provider: string) => {
    if (onSocialLogin) onSocialLogin(provider);
  };

  return (
    <div className="bg-[#141C2F] rounded-lg p-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-white mb-8">LOGIN</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <MdEmail size={20} />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full pl-10 pr-4 py-3.5 bg-[#1A2235] border border-[#2A3548] rounded-md text-white focus:outline-none focus:border-purple-500"
            required
          />
        </div>

        {/* Password input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <MdLock size={20} />
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full pl-10 pr-4 py-3.5 bg-[#1A2235] border border-[#2A3548] rounded-md text-white focus:outline-none focus:border-purple-500"
            required
          />
        </div>

        {/* Remember me and Forgot password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 accent-purple-600 bg-[#1A2235] border-gray-600 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-300">
              Remember Me
            </label>
          </div>
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm text-purple-400 hover:text-purple-300"
          >
            Forgot Your Password?
          </button>
        </div>

        {/* Sign in button */}
        <button
          type="submit"
          className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors"
        >
          SIGN IN
        </button>
      </form>

      {/* Create account link */}
      <div className="mt-4 text-center">
        <button
          onClick={onCreateAccount}
          className="text-sm text-gray-300 hover:text-white"
        >
          Create An Account
        </button>
      </div>

      {/* Or divider */}
      <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-700"></div>
        <span className="px-4 text-sm text-gray-400">OR</span>
        <div className="flex-grow h-px bg-gray-700"></div>
      </div>

      {/* Social login options */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => handleSocialLogin("facebook")}
          className="w-10 h-10 flex items-center justify-center bg-[#1A2235] border border-[#2A3548] rounded hover:bg-[#232e45] transition-colors"
          aria-label="Login with Facebook"
        >
          <FaFacebook className="text-[#1877F2]" size={20} />
        </button>
        <button
          onClick={() => handleSocialLogin("google")}
          className="w-10 h-10 flex items-center justify-center bg-[#1A2235] border border-[#2A3548] rounded hover:bg-[#232e45] transition-colors"
          aria-label="Login with Google"
        >
          <FcGoogle size={20} />
        </button>
        <button
          onClick={() => handleSocialLogin("microsoft")}
          className="w-10 h-10 flex items-center justify-center bg-[#1A2235] border border-[#2A3548] rounded hover:bg-[#232e45] transition-colors"
          aria-label="Login with Microsoft"
        >
          <FaMicrosoft className="text-[#00A4EF]" size={20} />
        </button>
        <button
          onClick={() => handleSocialLogin("twitter")}
          className="w-10 h-10 flex items-center justify-center bg-[#1A2235] border border-[#2A3548] rounded hover:bg-[#232e45] transition-colors"
          aria-label="Login with Twitter"
        >
          <FaTwitter className="text-[#1DA1F2]" size={20} />
        </button>
        <button
          onClick={() => handleSocialLogin("discord")}
          className="w-10 h-10 flex items-center justify-center bg-[#1A2235] border border-[#2A3548] rounded hover:bg-[#232e45] transition-colors"
          aria-label="Login with Discord"
        >
          <FaDiscord className="text-[#5865F2]" size={20} />
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
