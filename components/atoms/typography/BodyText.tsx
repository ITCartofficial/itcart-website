import React from 'react'
import { TypographyProps } from '@/types/PropsTypes'

const BodyText: React.FC<TypographyProps> = ({ text, color, textAlign, fontWeight, lineHeight, textDecoration, lineClamp, className }) => {
    return (
        <p style={{ color, textAlign, fontWeight, lineHeight, textDecoration, WebkitLineClamp: lineClamp, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', lineBreak: 'auto' }} className={className}>{text}</p>
    )
}

export default BodyText