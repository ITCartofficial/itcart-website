import InfoShowcase from "../InfoShowcase"

interface InfoShowcaseProps {
    title: string,
    description: string,
    imageUrl: string,

}

const MissionVisionSection = ({ missionVision, className, reverse, theme }: {
    missionVision: InfoShowcaseProps,
    className?: string,
    reverse?: boolean,
    theme: "dark" | "light",
}) => {
    return (
        <div className="container mx-auto lg:px-10">
            <InfoShowcase
                title={missionVision.title}
                description={missionVision.description}
                imageUrl={missionVision.imageUrl}
                theme={theme}
                className={className}
                reverse={reverse}
            />
        </div>
    )
}

export default MissionVisionSection