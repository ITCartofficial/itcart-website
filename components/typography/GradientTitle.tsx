'use client'

import React from 'react'
import { TypographyProps } from '@/types/PropsTypes'

interface GradientTitleProps extends TypographyProps {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const GradientTitle: React.FC<GradientTitleProps> = ({
    text,
    fontWeight = 'bold',
    className,
    theme = "dark",
    as: Tag = "h2", 
}) => {

    const background =
        theme === "light"
            ? "linear-gradient(90deg, #000 0.17%, #45C2CC 109.88%)"
            : "linear-gradient(90deg, #FFF 0.27%, #45C2CC 138.42%)";

    return (
        <Tag style={{ ...gradientTextStyle, fontWeight, background }} className={`${className} hover:cursor-default`}>{text}</Tag>
    );   
};

export default GradientTitle

const gradientTextStyle = {
    background: 'linear-gradient(90deg, #FFF 0.27%, #45C2CC 138.42%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}