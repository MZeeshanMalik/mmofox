"use client";
import { useState } from "react";
import { MdEmail, MdLock, MdPerson, MdSmartphone } from "react-icons/md";
import Link from "next/link";

interface SignupFormProps {
  onSignup?: (formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
  }) => void;
  onLoginClick?: () => void;
}

const SignupForm = ({ onSignup, onLoginClick }: SignupFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the Terms of Service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      if (onSignup) {
        onSignup(formData);
      }
    }
  };

  return (
    <div className="bg-[#141C2F] rounded-lg p-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-white mb-8">
        Register
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* First Name */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <MdPerson size={20} />
          </div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className={`w-full pl-10 pr-4 py-3.5 bg-[#1A2235] border border-[#2A3548] rounded-md text-white focus:outline-none focus:border-purple-500 ${
              errors.firstName ? "border-red-500" : ""
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <MdPerson size={20} />
          </div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className={`w-full pl-10 pr-4 py-3.5 bg-[#1A2235] border border-[#2A3548] rounded-md text-white focus:outline-none focus:border-purple-500 ${
              errors.lastName ? "border-red-500" : ""
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* Email Address */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <MdEmail size={20} />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className={`w-full pl-10 pr-4 py-3.5 bg-[#1A2235] border border-[#2A3548] rounded-md text-white focus:outline-none focus:border-purple-500 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <MdSmartphone size={20} />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className={`w-full pl-10 pr-4 py-3.5 bg-[#1A2235] border border-[#2A3548] rounded-md text-white focus:outline-none focus:border-purple-500 ${
              errors.phone ? "border-red-500" : ""
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <MdLock size={20} />
          </div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={`w-full pl-10 pr-4 py-3.5 bg-[#1A2235] border border-[#2A3548] rounded-md text-white focus:outline-none focus:border-purple-500 ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <MdLock size={20} />
          </div>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className={`w-full pl-10 pr-4 py-3.5 bg-[#1A2235] border border-[#2A3548] rounded-md text-white focus:outline-none focus:border-purple-500 ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Terms Acceptance */}
        <div className="flex items-start mt-6">
          <div className="flex items-center h-5">
            <input
              id="terms"
              name="acceptTerms"
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className={`w-4 h-4 accent-purple-600 bg-[#1A2235] border-gray-600 rounded ${
                errors.acceptTerms ? "border-red-500" : ""
              }`}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="text-gray-300">
              I Accept Privacy Policy & Terms Of Service
            </label>
            {errors.acceptTerms && (
              <p className="text-red-500 text-xs">{errors.acceptTerms}</p>
            )}
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full py-3.5 mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors uppercase"
        >
          CREATE
        </button>
      </form>

      {/* Login Link */}
      <div className="mt-6 text-center flex items-center justify-center space-x-1">
        <span className="text-sm text-gray-400">Already Have An Account</span>
        <Link
          href="/login"
          onClick={(e) => {
            if (onLoginClick) {
              e.preventDefault();
              onLoginClick();
            }
          }}
          className="text-sm text-purple-400 hover:text-purple-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
