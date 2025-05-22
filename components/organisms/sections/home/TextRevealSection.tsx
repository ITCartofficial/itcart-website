import TextReveal from '@/components/atoms/common/TextReveal'
import GradientTitle from '@/components/atoms/typography/GradientTitle'
import React from 'react'

interface TextRevealSectionProps {
    title?: string;
    className?: string;
}

const TextRevealSection: React.FC<TextRevealSectionProps> = ({
    title = "Scaling brands with top-notch AI-powered solutions" 
}) => {
    return (
        <div className="w-full h-max flex flex-col justify-center items-center text-center bg-white pb-8">
            <GradientTitle
                text={title}
                lineHeight="1.2"
                className="max-w-[800px] text-[50px] mb-6"
                theme='light'
            />
            <div>
                <TextReveal
                    text={
                        <>
                            Leverage AI automation with<br />
                            our robust AI systems, helping<br />
                            you gain a competitive edge<br />
                            in the AI market.
                        </>
                    }
                    backgroundColor="bg-white"
                    dimmedTextColor="text-[#E1E1E1]"
                    revealedTextColor="text-black"
                    spotlightSize={300}
                    textSize="text-7xl md:text-6xl"
                    defaultHighlightSize={470}
                />
            </div>
        </div>
    )
}

export default TextRevealSection
