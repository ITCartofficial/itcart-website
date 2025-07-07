"use client";

import React, { useState } from "react";

type ModalFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    fullName: string;
    email: string;
    phone: string;
    portfolio: string;
    coverLetter: string;
  }) => void;
};

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ fullName, email, phone, portfolio, coverLetter });
    setFullName("");
    setEmail("");
    setPhone("");
    setPortfolio("");
    setCoverLetter("");
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        backdropFilter: "blur(4px)",
        overflowY: "auto",
        padding: "40px",
        // boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 24,
          boxShadow: "0 6px 40px rgba(30,34,90,0.12)",
          padding: "42px 38px",
          minWidth: 620,
          maxWidth: "90vw",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            background: "none",
            border: "none",
            fontSize: 32,
            lineHeight: 1,
            color: "#bbb",
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <h1
          style={{
            fontWeight: 700,
            fontSize: "2.5rem",
            margin: 0,
            letterSpacing: -1,
          }}
        >
          Apply now
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            marginTop: 12,
            marginBottom: 34,
            color: "#222",
          }}
        >
          Fill out this form, and we will forward your information to the hiring
          manager!
        </p>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              background: "#fafbff",
              padding: 32,
              borderRadius: 24,
              boxShadow: "0 2px 12px rgba(30,34,90,0.03)",
              marginBottom: 24,
            }}
          >
            <div style={{ display: "flex", gap: 20, marginBottom: 18 }}>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e5f1",
                    borderRadius: 10,
                    fontSize: "1rem",
                    background: "#fff",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Email <span style={{ color: "#e53935" }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="johndoe@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e5f1",
                    borderRadius: 10,
                    fontSize: "1rem",
                    background: "#fff",
                    outline: "none",
                  }}
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: 20, marginBottom: 18 }}>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Phone number <span style={{ color: "#e53935" }}>*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Your company name"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e5f1",
                    borderRadius: 10,
                    fontSize: "1rem",
                    background: "#fff",
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Portfolio link
                </label>
                <input
                  type="url"
                  placeholder="www.company.com"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "2px solid #e2e5f1",
                    borderRadius: 10,
                    fontSize: "1rem",
                    background: "#fff",
                    outline: "none",
                  }}
                />
              </div>
            </div>
            <div>
              <label
                style={{
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                Cover letter <span style={{ color: "#e53935" }}>*</span>
              </label>
              <textarea
                placeholder="Example Text"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "2px solid #e2e5f1",
                  borderRadius: 10,
                  fontSize: "1rem",
                  background: "#fff",
                  outline: "none",
                  minHeight: 72,
                  resize: "vertical",
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              background: "#3d47f1",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.2rem",
              padding: "16px 0",
              borderRadius: 12,
              border: "none",
              boxShadow: "0 2px 12px rgba(30,34,90,0.07)",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
