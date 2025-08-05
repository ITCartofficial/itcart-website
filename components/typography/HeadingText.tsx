import { TypographyProps } from "@/types/PropsTypes"


const HeadingText: React.FC<TypographyProps> = ({ text, fontWeight = 'bold', lineHeight, color, className, theme }) => {

    const textColor = theme && (theme == "dark" ? "text-white" : "text-black") || "";

    return (
        <h2 style={{ fontWeight, lineHeight, color }} className={`${textColor} ${className}`}>{text}</h2>
    )
}

export default HeadingText