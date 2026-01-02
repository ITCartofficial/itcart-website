"use client";

import React, { useState } from "react";
import GradientTitle from "@/components/typography/GradientTitle";
import BodyText from "@/components/typography/BodyText";
import { FaArrowRight } from "react-icons/fa6";
import emailjs from "emailjs-com";

const NewsletterSubscription = ({ theme }: { theme: "dark" | "light" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubscribe = async () => {
    if (!validate()) return;

    setLoading(true);

    const templateParams = {
      from_name: name.trim(),
      from_email: email.trim(),
    };

    try {
      await emailjs.send(
        "service_kgq4rqu",
        "template_kkv0q6h",
        templateParams,
        "ujKXlFsvgAhXEPwRy"
      );

      alert("✅ Subscription sent successfully!");
      setName("");
      setEmail("");
      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black flex items-center justify-center">
      <div className="w-full rounded-xl border border-[#45C2CC] bg-gray-950 px-8 lg:px-20 py-8 md:py-12">
        <div className="text-center md:text-left mb-6">
          <GradientTitle
            text="Subscribe To News"
            className="md:text-[50px] text-[30px]"
            fontWeight="bold"
          />
          <BodyText
            text="Sign up to our newsletter and we’ll keep you in the loop."
            className="text-white mt-2"
          />
        </div>

        <div className="space-y-10">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full bg-transparent border-b py-2 text-white focus:outline-none transition-colors ${errors.name ? "border-red-500" : "border-gray-700 focus:border-cyan-400"
                }`}
            />
            <label className="absolute left-0 -top-4 text-xs text-gray-400">
              Name*
            </label>
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-transparent border-b py-2 text-white focus:outline-none transition-colors ${errors.email
                  ? "border-red-500"
                  : "border-gray-700 focus:border-cyan-400"
                }`}
            />
            <label className="absolute left-0 -top-4 text-xs text-gray-400">
              Email*
            </label>
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Button */}
          <div className="md:pt-6 flex md:justify-start justify-center">
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className={`bg-gradient-to-r from-white to-cyan-400 text-black font-semibold py-3 px-6 rounded-lg flex items-center gap-2 transition ${loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
                }`}
            >
              {loading ? "Sending..." : "Subscribe"}
              <FaArrowRight
                className={`text-sm ${theme === "dark" ? "text-black" : "text-white"
                  }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
