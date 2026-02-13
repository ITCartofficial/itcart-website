"use client"
import React, { useEffect, useState } from 'react'
import ContentSection from '@/components/ContentSection'
import { privacyPolicyContent } from '@/lib/data/privacyPolicyData'
import HeroSection from '@/components/HeroSection'

const PrivacyPolicy = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (

        <html lang="en">
            <head>
                <title>Data Privacy Policy | Information Security Standards</title>
                <meta name="description" content="Your trust is our priority. Learn how iTCart protects your information and adheres to global data security standards to ensure total privacy." />
                <meta property="og:url" content={`https://itcart.ai/privacy-policy`} />
                <link rel="canonical" href="https://itcart.ai/privacy-policy"></link>
            </head>

            <div className='border-b-2 border-[#545454] pb-20'>
                <HeroSection
                    title="Privacy Policy For iTCart"
                    description="This privacy policy statement explains what personal data iTCart collects from you and how we use that data."
                    lastUpdated="Sept 10, 2024"
                />
                <div className="max-w-6xl mx-4 sm:mx-6 md:mx-10 lg:mx-auto border-2 border-[#545454] px-6 sm:px-10 py-10 sm:py-14 rounded-[30px]">
                    <ContentSection items={privacyPolicyContent}
                        theme="dark"
                        className="text-white"
                        textClassName="text-gray-300" />
                </div>
            </div>
        </html>

    )
}

export default PrivacyPolicy