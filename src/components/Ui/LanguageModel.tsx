"use client";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaFlagUsa } from "react-icons/fa";
import { IoLogoEuro } from "react-icons/io";
// import Image from "next/image";

interface LanguageModalProps {
  onClose: () => void;
}

interface LanguageOption {
  code: string;
  name: string;
  flag: React.ReactNode;
}

interface CurrencyOption {
  code: string;
  symbol: string;
  flag: React.ReactNode;
}

const LanguageModal = ({ onClose }: LanguageModalProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  // Language options
  const languages: LanguageOption[] = [
    { code: "en", name: "English", flag: <FaFlagUsa /> },
    { code: "fr", name: "Français", flag: <span>🇫🇷</span> },
    { code: "de", name: "Deutsch", flag: <span>🇩🇪</span> },
    { code: "es", name: "Español", flag: <span>🇪🇸</span> },
  ];

  // Currency options
  const currencies: CurrencyOption[] = [
    { code: "USD", symbol: "$", flag: <FaFlagUsa /> },
    { code: "EUR", symbol: "€", flag: <IoLogoEuro /> },
    { code: "GBP", symbol: "£", flag: <span>🇬🇧</span> },
  ];

  const handleConfirm = () => {
    // Save the selected language and currency
    // This would typically update your app's context or local storage
    onClose();
  };

  const getSelectedLanguage = () => {
    return (
      languages.find((lang) => lang.code === selectedLanguage) || languages[0]
    );
  };

  const getSelectedCurrency = () => {
    return (
      currencies.find((curr) => curr.code === selectedCurrency) || currencies[0]
    );
  };

  return (
    <div className="bg-[#1A2235] rounded-md shadow-xl w-[320px] p-4">
      <h3 className="text-lg font-medium mb-4">Language</h3>

      {/* Language Selector */}
      <div className="relative mb-6">
        <div
          onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
          className="flex items-center justify-between p-2 border border-gray-700 rounded-md bg-[#141C2F] cursor-pointer"
        >
          <div className="flex items-center gap-2">
            {getSelectedLanguage().flag}
            <span>{getSelectedLanguage().name}</span>
          </div>
          <IoMdArrowDropdown />
        </div>

        {/* Language Dropdown */}
        {languageDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-[#141C2F] border border-gray-700 rounded-md z-10 max-h-36 overflow-y-auto">
            {languages.map((language) => (
              <div
                key={language.code}
                onClick={() => {
                  setSelectedLanguage(language.code);
                  setLanguageDropdownOpen(false);
                }}
                className={`flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-700 ${
                  selectedLanguage === language.code ? "bg-gray-700" : ""
                }`}
              >
                {language.flag}
                <span>{language.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <h3 className="text-lg font-medium mb-4">Currency</h3>

      {/* Currency Selector */}
      <div className="relative mb-6">
        <div
          onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
          className="flex items-center justify-between p-2 border border-gray-700 rounded-md bg-[#141C2F] cursor-pointer"
        >
          <div className="flex items-center gap-2">
            {getSelectedCurrency().flag}
            <span>{getSelectedCurrency().code}</span>
          </div>
          <IoMdArrowDropdown />
        </div>

        {/* Currency Dropdown */}
        {currencyDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-[#141C2F] border border-gray-700 rounded-md z-10 max-h-36 overflow-y-auto">
            {currencies.map((currency) => (
              <div
                key={currency.code}
                onClick={() => {
                  setSelectedCurrency(currency.code);
                  setCurrencyDropdownOpen(false);
                }}
                className={`flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-700 ${
                  selectedCurrency === currency.code ? "bg-gray-700" : ""
                }`}
              >
                {currency.flag}
                <span>{currency.code}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md w-full transition-colors"
      >
        CONFIRM
      </button>
    </div>
  );
};

export default LanguageModal;
