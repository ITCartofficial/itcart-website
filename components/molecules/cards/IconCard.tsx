import BodyText from "@/components/atoms/typography/BodyText"
import GradientTitle from "@/components/atoms/typography/GradientTitle"
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
        <div className={`w-full p-6 border border-[#303030] rounded-2xl flex flex-col gap-3 ${className}`}>
            <Image
                src={icon || ""}
                alt={title}
                height={64}
                width={64}
                className="h-12 w-auto object-contain"
            />
            <GradientTitle
                    text={title}
                    theme={theme}
                    className="lg:text-3xl text-center"
                />
                <BodyText
                    text={description}
                    theme={theme}
                    className="text-white text-[18px] text-center"
                />
        </div>
    )
}

export default IconCard