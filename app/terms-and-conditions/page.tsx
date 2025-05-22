import React from 'react'
import { termsConditionContent } from '@/lib/data/termsConditionData'
import ContentSection from '@/components/organisms/sections/ContentSection'
import HeroSection from '@/components/organisms/sections/HeroSection'

const TermsConditions = () => {
    return (
        <div className='border-b-2 border-[#545454] pb-20'>
            <HeroSection
                title="Terms & Conditions"
                description="IT Cart have following Terms and conditions apply to all website development and design services provided by IT Cart to the client."
                lastUpdated="Sept 15 2024"
            />
            <div className='max-w-6xl mx-auto border-2 border-[#545454] px-10 py-14 rounded-[30px]'>
                <ContentSection items={termsConditionContent}
                    theme="dark"
                    className="text-white"
                    textClassName="text-gray-300" />
            </div>
        </div>
    )
}

export default TermsConditions