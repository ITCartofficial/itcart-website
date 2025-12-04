import GradientTitle from '@/components/typography/GradientTitle'
import IconCard from '@/components/cards/IconCard'
import BodyText from '../typography/BodyText'

interface CoreValues {
    title: string,
    description: string,
    icon: string,
}

const OperativeSystem = ({ coreValues }: { coreValues: CoreValues[] }) => {
    return (
        <div className='w-full mx-auto flex flex-col gap-3 '>
            <GradientTitle
                text='The AI-Native Enterprise Operating System'
                theme='dark'
                className='text-center text-[30px] lg:text-[48px] leading-[1.2]'
            />

            <BodyText
                text={"AiXHub EOS is a unified intelligence layer that sits above your existing systems— ERP, CRM, HR, operations, finance, engineering—and turns them into an AI-native enterprise without ripping and replacing what already works. "}
                color="#ffffff"
                className="text-sm sm:text-base md:text-lg text-center  md:w-[80%] mx-auto"
            />

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-4 ">
                {coreValues?.map((card, i) => (
                    <IconCard
                        key={i}
                        title={card.title}
                        icon={card.icon}
                        description={card.description}
                        theme="dark"
                    />
                ))}
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 md:mx-15 mt-4 bg-green-400">
                {
                    coreValues && coreValues.map((card, i) => (
                        <IconCard
                            key={i}
                            title={card.title}
                            icon={card.icon}
                            description={card.description}
                            theme={'dark'}
                        />
                    ))
                }
            </div> */}
        </div>
    )
}

export default OperativeSystem