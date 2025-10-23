import React from 'react'
import './OutlineBtn.css'
import { OutlineBtnProps } from '@/types/PropsTypes'
import { FaArrowRight } from 'react-icons/fa6'


const OutlineBtn: React.FC<OutlineBtnProps> = ({ text, icon, textColor, className, url, theme = "dark", onClick, showBorderaButton }) => {

    const iconColor = theme === 'dark' ? 'text-[#ffffff]' : "text-[#2BADB7]";

    return (
        <>
            {
                showBorderaButton ?
                    <a href={url || ""} className={`decoration-0 group w-max anim-outline-btn ${theme} flex items-center justify-center gap-2 cursor-pointer ${className}`} onClick={onClick}>
                        <p className="text-sm font-medium" style={{ color: textColor }}>{text}</p>
                        <div className="group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                            {icon === "default" ? <FaArrowRight className={`text-sm font-semibold ${iconColor}`} /> : icon}
                        </div>
                    </a> :
                    <a
                        href={url || ""}
                        onClick={onClick}
                        className={`decoration-0 group w-max flex items-center justify-center gap-2 cursor-pointer
              px-6 py-3 rounded transition-all duration-300 ease-in-out
              bg-cyan-400 hover:bg-cyan-300
              ${theme} ${className}`}
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


// import React from 'react'
// import './OutlineBtn.css'
// // import Link from 'next/link'
// import { OutlineBtnProps } from '@/types/PropsTypes'
// import { FaArrowRight } from 'react-icons/fa6'


// const OutlineBtn: React.FC<OutlineBtnProps> = ({ text, icon, textColor, className, url, theme = "dark", onClick }) => {

//     const iconColor = theme === 'dark' ? 'text-[#ffffff]' : "text-[#2BADB7]";

//     return (
// <a href={url || ""} className={`decoration-0 group w-max anim-outline-btn ${theme} flex items-center justify-center gap-2 cursor-pointer ${className}`} onClick={onClick}>
//     <p className="text-sm font-medium" style={{ color: textColor }}>{text}</p>
//     <div className="group-hover:translate-x-1 transition-all duration-300 ease-in-out">
//         {icon === "default" ? <FaArrowRight className={`text-sm font-semibold ${iconColor}`} /> : icon}
//     </div>
// </a>
//     )
// }

// export default OutlineBtn