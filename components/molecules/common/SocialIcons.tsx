import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const SocialIcons = () => {
    return (
        <div className="flex justify-end gap-4">
            <FaInstagram width={21} height={21} />
            <FaXTwitter width={21} height={21} />
            <FaLinkedinIn width={21} height={21} />
            <FaFacebookF width={21} height={21} />
        </div>
    )
}

export default SocialIcons