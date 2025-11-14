"use client"
import React, { useEffect, useState } from 'react'
import HeroBanner from '@/components/HeroBanner'
import ServicesGrid from '@/components/ServiceGrid'

const Services = () => {

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
                <title>AI & Automation Services for Digital Transformation | iTCart</title>
                <meta name="description" content="Meta description: Explore end-to-end IT services including AI automation, ERP implementation, cloud solutions, cybersecurity, LMS, and workflow optimization to drive enterprise growth. " />
                <meta property="og:url" content={`https://itcart.ai/services`} />
                <link rel="canonical" href="https://itcart.ai/services"></link>
            </head>



            <div className='bg-black'>
                <HeroBanner title="Our Services"
                    description="Experience a complete suite of AI-powered services engineered to accelerate digital transformation and drive sustainable growth for modern enterprises. From cloud and cybersecurity to analytics, automation, and managed IT, iTCart empowers your business with advanced technology expertise and industry-best solutions for maximum impact at every stage."
                    ctaText="Connect with Us"
                    ctaUrl="/contact-us"
                    breadcrumbItems={[
                        { label: 'Home', url: '/' },
                        { label: 'Our Services', url: '/services' }
                    ]}
                    backgroundImage="/images/vertical/vertical-bg.jpg"
                // backgroundImage="/images/services/service-bg.png"
                />
                <ServicesGrid className='container' />
            </div>

        </html>



    )
}

export default Services