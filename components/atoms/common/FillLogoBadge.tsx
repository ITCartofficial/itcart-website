import Image from 'next/image'
import React from 'react'

type FillLogoBadgeProps = {
    logo: string
    bgColor: "dark" | "light"
    className?: string
}

const FillLogoBadge: React.FC<FillLogoBadgeProps> = ({ logo, bgColor, className }) => {
    const background = bgColor === "dark" ? "#000000" : "#ffffff";
    return (
        <div style={{ backgroundColor: background }} className={`bg-white rounded-xl ${className}`} >
            <Image
                src={logo}
                alt='logo'
                height={100}
                width={100}
                className='w-auto h-auto object-cover'
                loading="lazy"
            />
        </div>
    )
}

export default FillLogoBadge