'use client'

import React from 'react'
import { TypographyProps } from '@/types/PropsTypes'

const GradientTitle: React.FC<TypographyProps> = ({ text, fontWeight='bold', lineHeight, className, theme="dark" }) => {
    const background = theme == "light" && "linear-gradient(90deg, #000 0.17%, #45C2CC 109.88%)" || "linear-gradient(90deg, #FFF 0.27%, #45C2CC 138.42%)"
    return (
        <h2 style={{ ...gradientTextStyle, fontWeight, lineHeight, background }} className={`${className}`}> {text}</h2>
    )
}

export default GradientTitle

const gradientTextStyle = {
    background: 'linear-gradient(90deg, #FFF 0.27%, #45C2CC 138.42%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}