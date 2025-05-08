import React from 'react'
import { TypographyProps } from '@/types/PropsTypes'

const GradientTitle: React.FC<TypographyProps> = ({ text, fontSize, fontWeight='bold', textAlign, lineHeight, className }) => {
    return (
        <h2 style={{ ...gradientTextStyle, fontSize, fontWeight, textAlign, lineHeight }}>{text}</h2>
    )
}

export default GradientTitle

const gradientTextStyle = {
    background: 'linear-gradient(90deg, #FFF 0.27%, #45C2CC 138.42%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}