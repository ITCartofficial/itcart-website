import BodyText from "@/components/typography/BodyText";
import GradientTitle from "@/components/typography/GradientTitle"
import Image from "next/image";
import OutlineBtn from "./buttons/OutlineBtn";

interface InfoShowcaseProps {
    title: string,
    description: string,
    theme: "dark" | "light",
    imageUrl: string,
    className?: string,
    reverse?: boolean,
    showButton?: boolean
}

const InfoShowcase = ({ title, description, theme, className, reverse, imageUrl, showButton }: InfoShowcaseProps) => {
    const descriptions = description.split('<br>');
    return (
        <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-14 my-auto items-center ${className}`}>
            <div className={`flex flex-col gap-4  ${reverse && "order-2"}`}>
                <GradientTitle text={title} theme={theme} className='text-[30px] md:text-[50px] leading-[1.1] md:text-start text-center md:mx-0 mx-4' />

                <div className="flex flex-col gap-4">
                    {
                        descriptions && descriptions.map((text, i) => (
                            <BodyText key={i} text={text.trim()} className='lg:text-[18px] font-normal text-white text-center md:text-start' />
                        )) || <BodyText text={description} className='lg:text-[18px] font-normal text-white  text-center  md:text-start' />
                    }
                </div>

                {
                    showButton &&
                    <div className="w-full flex justify-center md:justify-start mt-3 mb-5">
                        <OutlineBtn text={"Reade more"} icon="default" theme={theme} url={"button.path"} className={`${theme == "dark" && "text-white"}`} />
                    </div>
                }
            </div>


            <div className="w-full my-7 relative h-[300px] sm:h-[450px] lg:h-[350px] rounded-2xl overflow-hidden shadow-lg bg-red-400">
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