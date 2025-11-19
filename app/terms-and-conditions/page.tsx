import React from 'react'
import { termsConditionContent } from '@/lib/data/termsConditionData'
import ContentSection from '@/components/ContentSection'
import HeroSection from '@/components/HeroSection'

const TermsConditions = () => {
    return (
        <div className='border-b-2 border-[#545454] pb-20'>
            <HeroSection
                title="Terms & Conditions"
                description="iTCart have following Terms and conditions apply to all website development and design services provided by iTCart to the client."
                lastUpdated="Sept 15 2024"
            />
            <div className="max-w-6xl mx-4 sm:mx-6 md:mx-10 lg:mx-auto border-2 border-[#545454] px-6 sm:px-10 py-10 sm:py-14 rounded-[30px]">
                <ContentSection items={termsConditionContent}
                    theme="dark"
                    className="text-white"
                    textClassName="text-gray-300" />
            </div>
        </div>
    )
}

export default TermsConditions