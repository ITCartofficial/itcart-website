import GradientTitle from '@/components/atoms/typography/GradientTitle'
import IconCard from '@/components/molecules/cards/IconCard'
import React from 'react'

const workWithUsCard = [
    {
        title: 'Best Environment',
        description: 'Work on transformative projects like AiX Hub, revolutionizing industries with AI.',
        icon: '/icons/work-environment.png',
    },
    {
        title: 'Vibrant Culture',
        description: 'Enjoy a dynamic workplace with peaceful workspaces, a gaming area, and a fun zone.',
        icon: '/icons/vibrant-culture.png',
    },
    {
        title: 'Work-Life Balance',
        description: 'Flexible hours and a supportive environment that values your well-being and mental peace.',
        icon: '/icons/work-life-balance.png',
    },
    {
        title: 'Global Recognition',
        description: 'Join a company led by award-winning innovators like Mr. Rohim Uddin and Mr. Jeffrey R. Hubbard.',
        icon: '/icons/global-recognition.png',
    },
]

const WhyWorkWithUsSection = () => {
    return (
        <div className='container pt-10 pb-20'>
            <GradientTitle
                text='Why Work with Us?'
                lineHeight="1.2"
                className="text-[50px] pb-6 text-center"
                theme='dark'
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    workWithUsCard.map((card, i) => (
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

export default WhyWorkWithUsSection