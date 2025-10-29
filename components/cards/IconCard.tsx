import BodyText from "@/components/typography/BodyText"
import GradientTitle from "@/components/typography/GradientTitle"
import Image from "next/image"

interface IconCardProps {
    title: string,
    description: string,
    theme: "dark" | "light",
    icon: string,
    className?: string,
}

const IconCard = ({ icon, title, description, className, theme }: IconCardProps) => {
    return (
        <div className={`w-full p-6 border border-[#303030] rounded-2xl flex flex-col md:gap-2 md:my-1 ${className}`}>
            <Image
                src={icon || ""}
                alt={title}
                height={64}
                width={64}
                className="h-14 w-auto object-contain"
                loading="lazy"
            />
            <GradientTitle
                text={title}
                theme={theme}
                className="text-[24px] lg:text-3xl text-center md:mt-0 mt-4"
            />
            <BodyText
                text={description}
                theme={theme}
                className="text-white text-[16px] lg:text-[18px] text-center"
            />
        </div>
    )
}

export default IconCard