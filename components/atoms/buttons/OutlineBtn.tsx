import React from 'react'
import './OutlineBtn.css'


type OutlineBtnProps = {
    text: string
    icon?: React.ReactNode
    textColor?: string
    className?: string
}

const OutlineBtn: React.FC<OutlineBtnProps> = ({ text, icon, textColor, className }) => {
    return (
        <button className={`group w-max anim-outline-btn flex items-center justify-center gap-2 cursor-pointer  ${className}`}>
            <p className="text-sm font-medium" style={{ color: textColor }}>{text}</p>
            <div className="group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                {icon || ""}
            </div>
        </button>
    )
}

export default OutlineBtn