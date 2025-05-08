import React from 'react'
import { TypographyProps } from '@/types/PropsTypes'

const GradientTitle: React.FC<TypographyProps> = ({ text, fontSize, fontWeight, textAlign, lineHeight }) => {
    return (
        <h1 style={{ ...gradientTextStyle, fontSize, fontWeight, textAlign, lineHeight }}>{text}</h1>
    )
}

export default GradientTitle

const gradientTextStyle = {
    background: 'linear-gradient(90deg, #FFF 0.27%, #45C2CC 138.42%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}