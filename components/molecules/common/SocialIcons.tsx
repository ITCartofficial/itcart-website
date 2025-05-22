import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

interface SocialIconProps {
    size: number;
    color: string;
    socialMedia: {
        instagram: string,
        facebook: string,
        twitter: string,
        linkedin: string,
    }
    className?: string
}

const SocialIcons = ({
    size = 21,
    color = '#000000',
    className = '',
    socialMedia
}: SocialIconProps) => {
    return (
        <div className={`flex justify-end gap-4 ${className}`}>
            <Link href={socialMedia.instagram}>
                <FaInstagram size={size} color={color} />
            </Link>
            <Link href={socialMedia.twitter}>
                <FaXTwitter size={size} color={color} />
            </Link>
            <Link href={socialMedia.linkedin}>
                <FaLinkedinIn size={size} color={color} />
            </Link>
            <Link href={socialMedia.facebook}>
                <FaFacebookF size={size} color={color} />
            </Link>
        </div>
    )
}

export default SocialIcons
