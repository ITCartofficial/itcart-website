// app/homecontext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface HomeContextType {
  message: string;
  setMessage: (msg: string) => void;
}

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState("Welcome to the homepage!");

  return (
    <HomeContext.Provider value={{ message, setMessage }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a HomeProvider");
  }
  return context;
};
