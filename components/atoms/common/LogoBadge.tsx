import { LogoBadgeProps } from "@/types/PropsTypes";
import Image from "next/image";

const LogoBadge: React.FC<LogoBadgeProps> = ({ src, alt = "", className }) => {
    return (
        <div className="w-max h-16 border-[2px] border-[#161616] flex items-center justify-center rounded-full px-4 shrink-0">
            <Image
                src={src}
                alt={alt}
                width='80'
                height='20'
                loading="lazy"
                className={`w-full h-[24px] object-cover shrink-0 ${className}`}
            />
        </div>
    )
}

export default LogoBadge