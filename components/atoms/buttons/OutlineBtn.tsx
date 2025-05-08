import React from 'react'
import './OutlineBtn.css'

import { FaArrowRight } from "react-icons/fa6";

type OutlineBtnProps = {
    text: string
    icon?: React.ReactNode
}

const OutlineBtn: React.FC<OutlineBtnProps> = ({ text, icon }) => {
    return (
        <button className='w-max anim-outline-btn flex items-center justify-center gap-2 cursor-pointer hover:gap-3 transition-all duration-300 ease-in-out'>
            <p className='text-sm font-semibold'>{text}</p>
            {icon || <FaArrowRight className='text-sm font-semibold' />}
        </button>
    )
}

export default OutlineBtn