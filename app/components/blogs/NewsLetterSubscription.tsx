'use client'

import React, { useState } from 'react';
import GradientTitle from '@/app/components/typography/GradientTitle';
import BodyText from '@/app/components/typography/BodyText';
import { FaArrowRight } from 'react-icons/fa6';

const NewsletterSubscription = ({ theme }: { theme: "dark" | "light" }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const handleSubscribe = () => {
    console.log('Subscribing:', { name, email });
    // Add your subscription logic here
  };

  return (
    <div className="bg-black flex items-center justify-center">
      <div className="w-full rounded-xl border border-gray-800 bg-gray-950 px-8 lg:px-20 py-12">
        <div className="text-center md:text-left mb-6">
          <div className="flex justify-center items-baseline flex-wrap md:justify-start">
            <span className="text-white text-3xl font-bold mr-2">Subscribe To</span>
            <GradientTitle
              text="News"
              className="text-3xl"
              fontWeight="bold"
            />
          </div>

          <BodyText
            text="Sign up to our newsletter and will keep you in the loop."
            className="text-gray-400 mt-2"
          />
        </div>

        <div className="space-y-10">
          {/* Name input with floating label */}
          <div className="relative">
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(name.length === 0 ? false : true)}
              className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <label
              htmlFor="name"
              className={`absolute left-0 transition-all duration-200 ${nameFocused || name.length > 0
                ? 'text-xs -top-4 text-gray-400'
                : 'text-gray-500 top-2'
                }`}
            >
              Name*
            </label>
          </div>

          {/* Email input with floating label */}
          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(email.length === 0 ? false : true)}
              className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <label
              htmlFor="email"
              className={`absolute left-0 transition-all duration-200 ${emailFocused || email.length > 0
                ? 'text-xs -top-4 text-gray-400'
                : 'text-gray-500 top-2'
                }`}
            >
              Email*
            </label>
          </div>

          <div className="pt-6">
            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-white to-cyan-400 cursor-pointer text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition">
              Subscribe <FaArrowRight className={`text-sm font-semibold ${theme == "dark" ? "text-[#000]" : "text-[#fff]"}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;