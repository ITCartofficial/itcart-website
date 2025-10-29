import TextReveal from '@/components/common/TextReveal'
import GradientTitle from '@/components/typography/GradientTitle'
import React from 'react'

interface TextRevealSectionProps {
    title?: string;
    className?: string;
}

const TextRevealSection: React.FC<TextRevealSectionProps> = ({
    title = "Scaling brands with top-notch AI-powered solutions" 
}) => {
    return (
        <div className="w-full h-max flex flex-col justify-center items-center text-center bg-black ">
            <GradientTitle
                text={title}
                lineHeight="1.2"
                className="max-w-[800px] text-[30px] lg:text-[50px] mb-6 px-2 md:px-0"
                theme='dark'
            />
            <div className='md:px-0 px-2'>
                <TextReveal
                    text={
                        <>
                            Leverage AI automation with<br />
                            our robust AI systems, helping<br />
                            you gain a competitive edge<br />
                            in the AI market.
                        </>
                    }
                    backgroundColor="bg-red"
                    dimmedTextColor="text-grey-200"
                    revealedTextColor="text-white"
                    spotlightSize={300}
                    textSize="text-4xl md:text-[70px]"
                    defaultHighlightSize={470}
                />
            </div>
        </div>
    )
}

export default TextRevealSection
