import { TypographyProps } from "@/types/PropsTypes"


const HeadingText: React.FC<TypographyProps> = ({ text, fontSize, fontWeight = 'bold', textAlign, lineHeight, color, className }) => {
    return (
        <h2 style={{ fontSize, fontWeight, textAlign, lineHeight, color }} className={className}>{text}</h2>
    )
}

export default HeadingText