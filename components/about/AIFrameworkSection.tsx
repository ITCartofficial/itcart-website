// import OutlineBtn from "@/components/buttons/OutlineBtn"
import InfoShowcase from "../InfoShowcase"

interface InfoShowcaseProps {
    title: string,
    description: string,
    imageUrl: string,
}

type Button = {
    text: string,
    path: string,
}

const AIFrameworkSection = ({ aixFramework, className, reverse, theme }: {
    aixFramework: InfoShowcaseProps,
    className?: string,
    reverse?: boolean,
    theme: "dark" | "light",
    button: Button
}) => {
    return (
        <div className="container mx-auto lg:px-10">
            <div className={`flex flex-col gap-8 ${className}`}>
                <InfoShowcase
                    title={aixFramework.title}
                    description={aixFramework.description}
                    imageUrl={aixFramework.imageUrl}
                    theme={theme}
                    reverse={reverse}
                    showButton={true}
                />

            </div>
        </div>
    )
}

export default AIFrameworkSection