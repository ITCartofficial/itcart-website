import BodyText from "@/components/typography/BodyText";
import GradientTitle from "@/components/typography/GradientTitle"
import Image from "next/image";

interface InfoShowcaseProps {
    title: string,
    description: string,
    theme: "dark" | "light",
    imageUrl: string,
    className?: string,
    reverse?: boolean,
}

const InfoShowcase = ({ title, description, theme, className, reverse, imageUrl }: InfoShowcaseProps) => {
    const descriptions = description.split('<br>');
    return (
        <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-14 ${className}`}>
            <div className={`flex flex-col gap-4 py-6 ${reverse && "order-2"}`}>
                <GradientTitle text={title} theme={theme} className='text-[30px] md:text-[50px] leading-tight md:text-start text-center md:mx-0 mx-4' />

                <div className="flex flex-col gap-4">
                    {
                        descriptions && descriptions.map((text, i) => (
                            <BodyText key={i} text={text.trim()} className='lg:text-[18px] font-normal text-white' />
                        )) || <BodyText text={description} className='lg:text-[18px] font-normal text-white' />
                    }
                </div>
            </div>


            <div className="w-full  relative h-[300px] sm:h-[450px] lg:h-[350px] rounded-2xl overflow-hidden shadow-lg bg-red-400">
                <Image
                    src={imageUrl}
                    alt="AI Visualization"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
            </div>
            {/* <ImageContainer
                    src={imageUrl}
                    alt={title}
                    className="rounded-3xl"

                /> */}

        </div>
    )
}

export default InfoShowcase