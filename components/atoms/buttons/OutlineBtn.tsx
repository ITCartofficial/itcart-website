import React from 'react'
import './OutlineBtn.css'


type OutlineBtnProps = {
    text: string
    icon?: React.ReactNode
    textColor?: string
}

const OutlineBtn: React.FC<OutlineBtnProps> = ({ text, icon, textColor }) => {
    return (
        <button className='w-max anim-outline-btn flex items-center justify-center gap-2 cursor-pointer hover:gap-3 transition-all duration-300 ease-in-out'>
            <p className="text-sm font-medium" style={{ color: textColor }}>{text}</p>
            {icon || ""}
        </button>
    )
}

export default OutlineBtn