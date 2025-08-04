import GradientTitle from "@/app/components/typography/GradientTitle"
import AmbassadorSlider from "@/app/components/slider/AmbassadorSlider"
import { Ambassador } from "@/types/PropsTypes"

const AmbassadorSection = ({ ambassador }: { ambassador: Ambassador[] }) => {
    // console.log(ambassador)
    return (
        <div className="bg-black flex flex-col gap-8">
            <div className="container">
                <GradientTitle
                    text="Our Global Ambassador"
                    className="text-[30px] text-center lg:text-left lg:text-[50px] leading-tight"
                />
            </div>
            <div className="mt-4">
                <AmbassadorSlider ambassadorList={ambassador} />
            </div>
        </div>
    )
}

export default AmbassadorSection