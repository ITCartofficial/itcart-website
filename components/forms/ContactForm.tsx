"use client"

import React, { useState } from "react"
import InputField from "@/components/form/InputField"
import { FaArrowRight } from "react-icons/fa6"
import { sendContactEmail, ContactFormData } from "@/lib/helper/sendContactEmail"

const ContactForm = ({ theme }: { theme: "dark" | "light" }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    const { success, message } = await sendContactEmail(formData)
    setResult(message)
    setLoading(false)

    if (success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-black rounded-xl w-full max-w-2xl"
    >
      <div className="grid grid-cols-2 gap-4">
        <InputField
          type="text"
          placeholder="First Name"
          theme={theme}
          value={formData.firstName}
          onChange={handleChange("firstName")}
        />
        <InputField
          type="text"
          placeholder="Last Name"
          theme={theme}
          value={formData.lastName}
          onChange={handleChange("lastName")}
        />
      </div>
      <InputField
        type="email"
        placeholder="Email"
        theme={theme}
        value={formData.email}
        onChange={handleChange("email")}
      />
      <InputField
        type="number"
        placeholder="Phone Number"
        theme={theme}
        value={formData.phone}
        onChange={handleChange("phone")}
      />
      <InputField
        type="textarea"
        placeholder="Message"
        theme={theme}
        value={formData.message}
        onChange={handleChange("message")}
        className="h-[109px]"
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-white to-cyan-400 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition cursor-pointer"
        disabled={loading}
      >
        {loading ? "Sending..." : <>Send Now <FaArrowRight className={`text-sm font-semibold ${theme == "dark" ? "text-[#000]" : "text-[#fff]"}`} /></>}
      </button>
      {result && (
        <p className={`text-center text-sm ${result.includes("success") ? "text-green-500" : "text-red-500"}`}>{result}</p>
      )}
    </form>
  )
}

export default ContactForm










// "use client"

// import React, { useState } from "react"
// import InputField from "@/components/atoms/form/InputField"
// import { FaArrowRight } from "react-icons/fa6"

// const ContactForm = ({ theme }: { theme: "dark" | "light" }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   })

//   const handleChange = (field: keyof typeof formData) => (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [field]: e.target.value })
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form Data:", formData)
//     // Add API POST logic here
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-4 bg-black rounded-xl w-full max-w-2xl"
//     >
//       <div className="grid grid-cols-2 gap-4">
//         <InputField
//           type="text"
//           placeholder="First Name"
//           theme={theme}
//           value={formData.firstName}
//           onChange={handleChange("firstName")}
//         />
//         <InputField
//           type="text"
//           placeholder="Last Name"
//           theme={theme}
//           value={formData.lastName}
//           onChange={handleChange("lastName")}
//         />
//       </div>
//       <InputField
//         type="email"
//         placeholder="Email"
//         theme={theme}
//         value={formData.email}
//         onChange={handleChange("email")}
//       />
//       <InputField
//         type="number"
//         placeholder="Phone Number"
//         theme={theme}
//         value={formData.phone}
//         onChange={handleChange("phone")}
//       />
//       <InputField
//         type="textarea"
//         placeholder="Message"
//         theme={theme}
//         value={formData.message}
//         onChange={handleChange("message")}
//         className="h-[109px]"
//       />
//       <button
//         type="submit"
//         className="w-full bg-gradient-to-r from-white to-cyan-400 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition cursor-pointer"
//       >
//         Send Now <FaArrowRight className={`text-sm font-semibold ${theme == "dark" ? "text-[#000]" : "text-[#fff]"}`} />
//       </button>
//     </form>
//   )
// }

// export default ContactForm
