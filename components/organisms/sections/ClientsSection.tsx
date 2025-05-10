import BodyText from "@/components/atoms/typography/BodyText"
import LogoSlider from "@/components/molecules/common/SliderLogos"

type ClientsSectionProps = {
    title: string
    logos: string[]
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ title, logos }) => {
    return (
        <div>
            <div className="container mx-auto px-4">
                <BodyText text={title} className="text-[#B6B6B6] text-center lg:text-left" />
            </div>
            <LogoSlider logos={logos} />
        </div>
    )
}

export default ClientsSection