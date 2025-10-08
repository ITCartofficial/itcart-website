import React from 'react'
import ContentSection from '@/components/ContentSection'
import { privacyPolicyContent } from '@/lib/data/privacyPolicyData'
import HeroSection from '@/components/HeroSection'

const PrivacyPolicy = () => {
    return (
        <div className='border-b-2 border-[#545454] pb-20'>
            <HeroSection
                title="Privacy Policy For IT Cart"
                description="This privacy policy statement explains what personal data ITCart collects from you and how we use that data."
                lastUpdated="Sept 10, 2024"
            />
            <div className="max-w-6xl mx-4 sm:mx-6 md:mx-10 lg:mx-auto border-2 border-[#545454] px-6 sm:px-10 py-10 sm:py-14 rounded-[30px]">
                <ContentSection items={privacyPolicyContent}
                    theme="dark"
                    className="text-white"
                    textClassName="text-gray-300" />
            </div>
        </div>
    )
}

export default PrivacyPolicy