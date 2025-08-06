import ImageContainer from "@/components/common/ImageContainer";
import BodyText from "@/components/typography/BodyText";
import GradientTitle from "@/components/typography/GradientTitle"

interface InfoShowcaseProps {
    title: string,
    description: string,
    theme: "dark" | "light",
    imageUrl: string,   
    className?: string,
    reverse?: boolean,
}   

const InfoShowcase = ({ title, description, theme, className, imageUrl, reverse }: InfoShowcaseProps) => {
    const descriptions = description.split('<br>');
    return (
        <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-14 ${className}`}>
            <div className={`flex flex-col gap-4 py-6 ${reverse && "order-2"}`}>
                <GradientTitle text={title} theme={theme} className='text-[30px] lg:text-[36px] leading-tight' />

                <div className="flex flex-col gap-4">
                    {
                        descriptions && descriptions.map((text, i) => (
                            <BodyText key={i} text={text.trim()} className='lg:text-[18px] font-normal text-white' />
                        )) || <BodyText text={description} className='lg:text-[18px] font-normal text-white' />
                    }
                </div>
            </div>
            <div className="relative">
                <ImageContainer
                    src={imageUrl}
                    alt={title}
                    className="rounded-3xl"
                    
                />
            </div>
        </div>
    )
}

export default InfoShowcase