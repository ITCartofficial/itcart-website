import React from 'react'
import { TypographyProps } from '@/types/PropsTypes'

const BodyText: React.FC<TypographyProps> = ({ text, fontSize, color, textAlign, fontWeight, lineHeight, textDecoration, lineClamp, className }) => {
    return (
        <p style={{ fontSize, color, textAlign, fontWeight, lineHeight, textDecoration, WebkitLineClamp: lineClamp, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical' }} className={className}>{text}</p>
    )
}

export default BodyText