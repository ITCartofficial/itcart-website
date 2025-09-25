import BodyText from '@/components/typography/BodyText'
import GradientTitle from '@/components/typography/GradientTitle'
import LeaderCard from '@/components/cards/LeaderCard'
import React from 'react'

interface FoundingMembersSectionProps {
    image: string,
    title: string,
    designation: string,
    description?: string,
}

const FoundingMembersSection = ({ members, theme, direction }: {
    members: FoundingMembersSectionProps[],
    direction: "row" | "col",
    theme: "dark" | "light",

}) => {
    return (
        <div className='container mx-auto lg:px-10 lg:py-16'>
            <div className="flex flex-col w-1/2 mb-10 container">
                <GradientTitle
                    text='Founding Members'
                    theme='light'
                    className='text-[30px] lg:text-[48px] '
                />
                <BodyText
                    text={"Meet our visionary founding members: Driving leadership, innovation and strategic excellence in IT."}
                    className={"text-[16px] lg:text-[20px]  lg:text-left"}
                    theme={theme}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    members.map((member, i) => (
                        <LeaderCard
                            key={i}
                            theme={theme}
                            designation={member.designation}
                            direction={direction}
                            title={member.title}
                            image={member.image}
                            description={member.description || ""}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default FoundingMembersSection