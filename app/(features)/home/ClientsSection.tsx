import BodyText from "@/components/typography/BodyText"
import LogoSlider from "@/components/common/SliderLogos"

type ClientsSectionProps = {
    title: string
    logos: string[]
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ title, logos }) => {
    return (
        <div>
            <div className="container flex md:justify-start justify-center lg:px-10">
                <BodyText text={title} className="text-[#B6B6B6] text-[14px] font-semibold text-left" />
            </div>
            <LogoSlider logos={logos} />
        </div>
    )
}

export default ClientsSection