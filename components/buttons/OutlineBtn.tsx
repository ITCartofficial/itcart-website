"use client"
import React, { useState } from 'react'
import './OutlineBtn.css'
import { OutlineBtnProps } from '@/types/PropsTypes'
import { FaArrowRight } from 'react-icons/fa6'


const OutlineBtn: React.FC<OutlineBtnProps> = ({ text, icon, textColor, className, url, theme = "dark", onClick }) => {

    const iconColor = theme === 'dark' ? 'text-[#ffffff]' : "text-[#2BADB7]";

    const [changgeBtn, setChangeBtn] = useState(false)

    return (
        <>
            {
                changgeBtn ?
                    <a
                        onMouseLeave={() => setChangeBtn(false)}
                        href={url || ""}
                        // className={`decoration-0  min-w-[160px] py-3 w-max  group w-max anim-outline-btn ${theme} flex items-center justify-center gap-2 cursor-pointer ${className}`} onClick={onClick}
                        className={`decoration-0 
                             px-7
                            py-3  w-max group ${theme} flex items-center justify-center gap-2 cursor-pointer ${className}`}

                        style={{
                            border: '1px solid transparent',
                            backgroundImage: 'linear-gradient(black, black), linear-gradient(to right, #FFFFFF 45%, #45C2CC 100%)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'padding-box, border-box',
                            borderRadius: '8px'
                        }}
                    >

                        <p className="text-sm font-medium" style={{ color: textColor }}>{text}</p>
                        <div className="group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                            {icon === "default" ? <FaArrowRight className={`text-sm font-semibold ${iconColor}`} /> : icon}
                        </div>
                    </a>

                    :

                    <a
                        onMouseEnter={() => setChangeBtn(true)}
                        onMouseLeave={() => setChangeBtn(false)}
                        href={url || ""}
                        onClick={onClick}
                        className={`decoration-0 py-3 
                         px-7
                             group w-max flex items-center justify-center gap-2 cursor-pointer
               rounded transition-all duration-300 ease-in-out
              bg-[#01FFFF] hover:bg-cyan-300 
              border-1 border-white
              ${theme} ${className}`}

                        style={{
                            border: '1px solid transparent',
                            backgroundImage: 'linear-gradient(#01FFFF, #01FFFF), linear-gradient(to right, #03536B, #FFFFFF)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'padding-box, border-box',
                            borderRadius: '8px'
                        }}
                    >
                        <p
                            className="text-sm font-medium  transition-all duration-300 group-hover:translate-x-1"
                            style={{ color: "black", fontWeight: 600 }}
                        >
                            {text}
                        </p>

                        <div className="group-hover:translate-x-1 transition-all duration-300 ease-in-out ">
                            {<FaArrowRight style={{ color: 'black' }} className={`text-sm font-semibold`} />}
                        </div>
                    </a>
            }

        </>
    )
}

export default OutlineBtn