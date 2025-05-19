import OutlineBtn from "@/components/atoms/buttons/OutlineBtn"
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

const AIFrameworkSection = ({ aixFramework, className, reverse, theme, button }: {
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
                />
                {
                    button.text && (
                        <div className="w-full flex justify-center">
                            <OutlineBtn text={button.text} icon="default" theme={theme} url={button.path} className={`${theme == "dark" && "text-white"}`} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AIFrameworkSection