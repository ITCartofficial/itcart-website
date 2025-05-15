import LinkButton from "@/components/atoms/buttons/LinkButton";
import FillLogoBadge from "@/components/atoms/common/FillLogoBadge";
import BodyText from "@/components/atoms/typography/BodyText";
import GradientTitle from "@/components/atoms/typography/GradientTitle"
import { IconInfoCardProps } from "@/types/PropsTypes";

const IconInfoCard: React.FC<IconInfoCardProps> = ({ bgImage, title, description, buttonUrl, logo }) => {
    return (
        <div className="lg:min-w-[300px] lg:h-[460px] rounded-[40px] overflow-hidden bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="wrapper flex flex-col gap-4 justify-end p-6 w-full h-full relative"
                style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 85%)' }}
            >
                <FillLogoBadge bgColor="#ffffff" logo={logo} className="absolute top-6 left-6" />
                <GradientTitle text={title} className="text-[24px] lg:text-[30px]" theme="dark" />
                <BodyText text={description} lineClamp={4} className="text-base" />
                <LinkButton text="Learn More" url={buttonUrl} className="lg:text-[20px]" textColor="#ffffff" />
            </div>
        </div>
    )
}

export default IconInfoCard