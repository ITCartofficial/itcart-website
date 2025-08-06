import GradientTitle from '@/components/typography/GradientTitle'
import IconCard from '@/components/cards/IconCard'

interface CoreValues {
    title: string,
    description: string,
    icon: string,
}

const CoreValueSection = ({ coreValues }: { coreValues: CoreValues[] }) => {
    return (
        <div className='container mx-auto lg:px-10 flex flex-col gap-14'>
            <GradientTitle
                text='Our Core Values'
                theme='dark'
                className='text-center text-[30px] lg:text-[50px]'
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
            </div>
        </div>
    )
}

export default CoreValueSection