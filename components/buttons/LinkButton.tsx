import { OutlineBtnProps } from "@/types/PropsTypes"
// import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"

const LinkButton: React.FC<OutlineBtnProps> = ({ text, icon, textColor, className, url }) => {
    return (
        <a href={url || "#"} className={`group w-max flex items-center justify-center gap-2 cursor-pointer decoration-0 ${className}`}>
            <p className="text-[16px] font-medium" style={{ color: textColor }}>{text}</p>
            <div className="group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                {icon || <FaArrowRight className="text-[18px] font-semibold text-[#45C2CC]" />}
            </div>
        </a>
    )
}

export default LinkButton