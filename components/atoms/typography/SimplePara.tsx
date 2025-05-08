import React from 'react'
import { TypographyProps } from '@/types/PropsTypes'

const SimplePara: React.FC<TypographyProps> = ({ text, fontSize, color, textAlign, fontWeight, lineHeight, textDecoration }) => {
    return (
        <p style={{ fontSize, color, textAlign, fontWeight, lineHeight, textDecoration }}>{text}</p>
    )
}

export default SimplePara