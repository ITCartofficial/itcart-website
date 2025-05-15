import Image from 'next/image'
import React from 'react'

type FillLogoBadgeProps = {
    logo: string
    bgColor: string
    className?: string
}

const FillLogoBadge: React.FC<FillLogoBadgeProps> = ({ logo, bgColor, className }) => {
    return (
        <div style={{ backgroundColor: bgColor }} className={`p-2 bg-white rounded-xl ${className}`} >
            <Image
                src={logo}
                alt='logo'
                height={100}
                width={100}
                className='w-auto h-[36px] object-cover'
            />
        </div>
    )
}

export default FillLogoBadge