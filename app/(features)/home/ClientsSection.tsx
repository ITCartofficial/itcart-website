import BodyText from "@/app/components/typography/BodyText"
import LogoSlider from "@/app/components/common/SliderLogos"

type ClientsSectionProps = {
    title: string
    logos: string[]
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ title, logos }) => {
    return (
        <div>
            <div className="container mx-auto lg:px-10">
                <BodyText text={title} className="text-[#B6B6B6] text-center lg:text-left" />
            </div>
            <LogoSlider logos={logos} />
        </div>
    )
}

export default ClientsSection