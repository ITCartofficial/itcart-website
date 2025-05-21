import GradientTitle from "@/components/atoms/typography/GradientTitle"
import LeaderCard from "@/components/molecules/cards/LeaderCard"
import { GlobalStrategist } from "@/types/PropsTypes"


const GlobalStrategistsSection = ({ globalStrategists }: { globalStrategists: GlobalStrategist[] }) => {
    return (
        <div className="container bg-black flex flex-col gap-8">
            <div className="lg:w-2/3">
                <GradientTitle
                    text="iTCart’s Global Leadership & Strategists"
                    className="lg:text-[50px] leading-tight"
                />
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    globalStrategists.map((globalStrategist, i) => (
                        <LeaderCard
                            designation={globalStrategist.designation}
                            direction="col"
                            image={globalStrategist.image}
                            theme={'dark'}
                            title={globalStrategist.title}
                            key={i}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default GlobalStrategistsSection