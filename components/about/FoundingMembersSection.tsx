// import BodyText from '@/components/typography/BodyText'
// import GradientTitle from '@/components/typography/GradientTitle'
// import LeaderCard from '@/components/cards/LeaderCard'
// import React from 'react'


// interface FoundingMembersSectionProps {
//     image: string,
//     title: string,
//     designation: string,
//     description?: string,
// }

// const FoundingMembersSection = ({ members, theme, direction }: {
//     members: FoundingMembersSectionProps[],
//     direction: "row" | "col",
//     theme: "dark" | "light",

// }) => {

//     const bgColor = 'dark'

//     return (
//         <div className='container  mx-auto lg:px-10 '>
//             <div className=" mb-10">
//                 <GradientTitle
//                     text='Founding Members'
//                     theme='light'
//                     className='text-[30px] lg:text-[48px]'
//                 />
//                 <BodyText
//                     text={"Meet our visionary founding members: Driving leadership, innovation and strategic excellence in IT."}
//                     className={"text-[16px] lg:text-[20px]  lg:text-left w-[70%]"}
//                     theme={theme}
//                 />
//             </div>


//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">


//                 {
//                     members.map((member, i) => (
//                         <LeaderCard
//                             key={i}
//                             theme={theme}
//                             designation={member.designation}
//                             direction={direction}
//                             title={member.title}
//                             image={member.image}
//                             description={member.description || ""}
//                         />
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default FoundingMembersSection



"use client"

import BodyText from "@/components/typography/BodyText"
import GradientTitle from "@/components/typography/GradientTitle"
import LeaderCard from "@/components/cards/LeaderCard"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

interface FoundingMembersSectionProps {
    image: string
    title: string
    designation: string
    description?: string
}

const FoundingMembersSection = ({
    members,
    theme,
    direction,
}: {
    members: FoundingMembersSectionProps[]
    direction: "row" | "col"
    theme: "dark" | "light"
}) => {
    return (
        <div className="container mx-auto lg:px-10  pb-20 border-b-[.2px] border-zinc-600">
            {/* ===== Header ===== */}
            <div className="mb-10">
                <GradientTitle
                    text="Founding Members"
                    theme="light"
                    className="text-[30px] lg:text-[48px]"
                />
                <BodyText
                    text="Meet our visionary founding members: Driving leadership, innovation and strategic excellence in IT."
                    className="text-[16px] lg:text-[20px] lg:text-left w-[90%] md:w-[90%]"
                    theme={theme}
                />
            </div>

            {/* ===== Mobile / Tablet View (Swiper) ===== */}
            <div className="sm:hidden">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="pb-15"
                >
                    {members.map((member, i) => (
                        <SwiperSlide key={i}>
                            <LeaderCard
                                theme={theme}
                                designation={member.designation}
                                direction={direction}
                                title={member.title}
                                image={member.image}
                                description={member.description || ""}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* ===== Desktop View (Grid) ===== */}
            <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
                {members.map((member, i) => (
                    <LeaderCard
                        key={i}
                        theme={theme}
                        designation={member.designation}
                        direction={direction}
                        title={member.title}
                        image={member.image}
                        description={member.description || ""}
                    />
                ))}
            </div>
        </div>
    )
}

export default FoundingMembersSection
