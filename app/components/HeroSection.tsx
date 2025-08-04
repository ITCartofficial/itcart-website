'use client'

import BodyText from '@/app/components/typography/BodyText'
import GradientTitle from '@/app/components/typography/GradientTitle'
import React from 'react'


type HeroSectionProps = {
    title: string
    description: string
    lastUpdated?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, lastUpdated }) => {
    return (
        <section className="w-full bg-black pt-30 md:pt-35 pb-12 md:pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <GradientTitle
                    text={title}
                    theme="dark"
                    className="text-4xl md:text-5xl lg:text-[64px] mb-4"
                />

                <BodyText
                    text={description}
                    color="white"
                    textAlign="center"
                    className="text-lg mb-8"
                />
                {lastUpdated && (
                    <div className="inline-block p-[1px] rounded bg-gradient-to-r from-[#4C4C4C] to-[#45C2CC]">
                        <div className="bg-zinc-800 px-4 py-2 rounded">
                            <BodyText
                                text={`Last updated ${lastUpdated}`}
                                color="#ccc"
                                className="text-sm"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default HeroSection;