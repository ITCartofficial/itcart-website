import { TypographyProps } from "@/types/PropsTypes"


const HeadingText: React.FC<TypographyProps> = ({ text, fontWeight = 'bold', lineHeight, color, className }) => {
    return (
        <h2 style={{ fontWeight, lineHeight, color }} className={className}>{text}</h2>
    )
}

export default HeadingText