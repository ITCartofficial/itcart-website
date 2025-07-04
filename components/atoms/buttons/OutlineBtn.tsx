import React from 'react'
import './OutlineBtn.css'
import Link from 'next/link'
import { OutlineBtnProps } from '@/types/PropsTypes'
import { FaArrowRight } from 'react-icons/fa6'


const OutlineBtn: React.FC<OutlineBtnProps> = ({ text, icon, textColor, className, url, theme = "dark", onClick }) => {

    const iconColor = theme === 'dark' ? 'text-[#ffffff]' : "text-[#2BADB7]";

    return (
        <Link href={url || ""} className={`group w-max anim-outline-btn ${theme} flex items-center justify-center gap-2 cursor-pointer ${className}`} onClick={onClick}>
            <p className="text-sm font-medium" style={{ color: textColor }}>{text}</p>
            <div className="group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                {icon === "default" ? <FaArrowRight className={`text-sm font-semibold ${iconColor}`} /> : icon}
            </div>
        </Link>
    )
}

export default OutlineBtn