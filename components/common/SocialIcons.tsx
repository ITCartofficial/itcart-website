import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

interface SocialMediaApp {
    instagram: string,
    facebook: string,
    twitter: string,
    linkedin: string,
}
interface SocialIconProps {
    size: number;
    color: string;
    className?: string;
    socialMedia: SocialMediaApp
}

const SocialIcons = ({
    size = 21,
    color = '#000000',
    className = '',
    socialMedia
}: SocialIconProps) => {
    return (
        <div className={`flex justify-center gap-4 ${className}`}>
            {/* <Link href={socialMedia.instagram}>
                <FaInstagram size={size} color={"color"} />
            </Link> */}
            <Link href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram
                    size={size}
                    className={`${color} hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 cursor-pointer`}
                />
            </Link>
            <Link href={socialMedia.twitter}>
                <FaXTwitter className={`${color} hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 cursor-pointer`} />
            </Link>
            <Link href={socialMedia.linkedin}>
                <FaLinkedinIn className={`${color} hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 cursor-pointer`} />
            </Link>
            <Link href={socialMedia.facebook}>
                <FaFacebookF className={`${color} hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 cursor-pointer`} />
            </Link>
        </div>
    )
}

export default SocialIcons
