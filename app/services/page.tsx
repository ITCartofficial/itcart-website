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
            </head>

            <body>

                <div className='bg-black'>
                    <HeroBanner title="Our Services"
                        description="IT Cart offers a wide range of carefully curated services designed to empower businesses across industries. From advanced application development to robust cybersecurity solutions, we help unlock your enterprise's full potential. With a focus on innovation, efficiency, and security, we enable businesses to thrive in today's dynamic market."
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
            </body>
        </html>



    )
}

export default Services