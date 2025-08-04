import React from "react"

interface InputFieldProps {
  type: "text" | "email" | "number" | "textarea"
  placeholder: string
  theme: "dark" | "light"
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  className?: string
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  theme,
  value,
  onChange,
  className,
}) => {
  const borderColor = theme === "dark" ? "border-[#FFFFFF33]" : "border-gray-900"
  const placeholderColor = theme === "dark" ? "placeholder-[#FFFFFF99]" : "placeholder-gray-900"
  const valueColor = theme === "dark" ? "text-[#FFFFFF]" : "text-gray-900"

  const commonClasses = `w-full border-[1px] rounded-[5px] py-3 px-4 placeholder:text-base  ${borderColor} ${placeholderColor} ${valueColor} ${className}`

  return type === "textarea" ? (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`resize-none ${commonClasses}`}
    />
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${commonClasses}`}
    />
  )
}

export default InputField