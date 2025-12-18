// "use client"

// import React, { useState } from "react"
// import InputField from "@/components/form/InputField"
// // import { FaArrowRight } from "react-icons/fa6"
// import { ContactFormData } from "@/lib/helper/sendContactEmail"
// import emailjs from "@emailjs/browser"

// const ContactForm = ({ theme }: { theme: "dark" | "light" }) => {
//   const [formData, setFormData] = useState<ContactFormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   })
//   const [loading, setLoading] = useState(false)
//   const [result, setResult] = useState<string | null>(null)

//   const handleChange = (field: keyof typeof formData) => (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [field]: e.target.value })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setResult(null)

//     const templateParams = {
//       from_name: `${formData.firstName} ${formData.lastName}`,
//       from_email: formData.email,
//       phone: formData.phone,
//       message: formData.message,
//     }


//     try {
//       const res = await emailjs.send(
//         "service_fzjaga3", // replace with your EmailJS service ID
//         "template_e3w4axs", // replace with your EmailJS template ID
//         templateParams,
//         "ujKXlFsvgAhXEPwRy" // replace with your EmailJS public key
//       )

//       const scriptURL = "https://script.google.com/macros/s/AKfycbxkSHfMOHA8egu7HXXcM3Mjk0gxla6UXdohgWED9HCpwoNBqU6xkxpDy0Tx7gFPdC0jRQ/exec";

//       const formBody = new URLSearchParams(templateParams).toString();

//       await fetch(scriptURL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: formBody,
//       });

//       if (res.status === 200) {
//         setResult("success: Your message has been sent successfully!")
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           message: "",
//         })
//       } else {
//         setResult("error: Failed to send message. Please try again later.")
//       }
//     } catch (error) {
//       console.error("EmailJS error:", error)
//       setResult("error: Something went wrong while sending.")
//     }

//     setLoading(false)

//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       message: "",
//     })

//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-4 rounded-xl w-full max-w-2xl bg-[#131313]"
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
//         disabled={loading}
//       >
//         {loading ? "Sending..." : <>Send Now
//           {/* <FaArrowRight className={`text-sm font-semibold text-[#000] `} /> */}
//         </>}
//       </button>
//       {result && (
//         <p className={`text-center text-sm ${result.includes("success") ? "text-green-500" : "text-red-500"}`}>{result}</p>
//       )}
//     </form>
//   )
// }

// export default ContactForm


"use client"

import React, { useState } from "react"
import InputField from "@/components/form/InputField"
import { ContactFormData } from "@/lib/helper/sendContactEmail"
import emailjs from "@emailjs/browser"

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
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange =
    (field: keyof typeof formData) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [field]: e.target.value })
        setErrors({ ...errors, [field]: "" }) // clear error on type
      }

  const validateForm = () => {
    let formErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) formErrors.firstName = "First name required"
    if (!formData.lastName.trim()) formErrors.lastName = "Last name required"

    if (!formData.email.trim()) {
      formErrors.email = "Email required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      formErrors.email = "Invalid email format"
    }

    if (!formData.phone.trim()) {
      formErrors.phone = "Phone required"
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone must be 10 digits"
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message required"
    } else if (formData.message.length < 10) {
      formErrors.message = "Message should be at least 10 characters"
    }

    setErrors(formErrors)
    return Object.keys(formErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setResult(null)

    if (!validateForm()) return // stop submit

    setLoading(true)

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    }

    try {
      const res = await emailjs.send(
        "service_fzjaga3",
        "template_e3w4axs",
        templateParams,
        "ujKXlFsvgAhXEPwRy"
      )

      if (res.status === 200) {
        setResult("success: Message sent successfully!")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        setResult("error: Failed to send message")
      }
    } catch (err) {
      console.log(err)
      setResult("error: Something went wrong")
    }

    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl w-full max-w-2xl bg-[#131313] p-6"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <InputField
            type="text"
            placeholder="First Name"
            theme={theme}
            value={formData.firstName}
            onChange={handleChange("firstName")}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs">{errors.firstName}</p>
          )}
        </div>

        <div>
          <InputField
            type="text"
            placeholder="Last Name"
            theme={theme}
            value={formData.lastName}
            onChange={handleChange("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <InputField
          type="email"
          placeholder="Email"
          theme={theme}
          value={formData.email}
          onChange={handleChange("email")}
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      <div>
        <InputField
          type="number"
          placeholder="Phone Number"
          theme={theme}
          value={formData.phone}
          onChange={handleChange("phone")}
        />
        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
      </div>

      <div>
        <InputField
          type="textarea"
          placeholder="Message"
          theme={theme}
          value={formData.message}
          onChange={handleChange("message")}
          className="h-[109px]"
        />
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-white to-cyan-400 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition cursor-pointer"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Now"}
      </button>

      {result && (
        <p
          className={`text-center text-sm ${result.includes("success") ? "text-green-500" : "text-red-500"
            }`}
        >
          {result}
        </p>
      )}
    </form>
  )
}

export default ContactForm
