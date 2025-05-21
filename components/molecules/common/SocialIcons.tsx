import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const SocialIcons = ({
    size = 21,
    color = '#000000',
    className = ''
}) => {
    return (
        <div className={`flex justify-end gap-4 ${className}`}>
            <FaInstagram size={size} color={color} />
            <FaXTwitter size={size} color={color} />
            <FaLinkedinIn size={size} color={color} />
            <FaFacebookF size={size} color={color} />
        </div>
    )
}

export default SocialIcons
