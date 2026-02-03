"use client"
import HeroBanner from '@/components/HeroBanner'
import OurVwerticalGrid from '@/components/OurVwerticalGrid'
import { verticalSchema } from '@/lib/schema/verticalSchema'
import React, { useEffect, useState } from 'react'

const OurVerticals = () => {

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
                <title>Industrial Automation Solutions & Process Automation | iTCart</title>
                <meta name="description" content="Scale your enterprise with digital transformation services. We offer industrial automation solutions and business process automation to drive efficiency." />
                <meta property="og:url" content={`https://itcart.ai/products`} />
                <link rel="canonical" href="https://itcart.ai/products"></link>
            </head>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(verticalSchema),
                }}
            />


            <div className='bg-black'>
                <HeroBanner title="Our Products"
                    description="Our company showcases expertise across tech, healthcare, finance, and E-Commerce industries. Specializing in software development, cybersecurity, healthcare IT, fintech, and E-Commerce solutions, we deliver Automation innovation and tailored services to optimize operations and bolster client growth in these sectors."
                    ctaText="Connect with Us"
                    ctaUrl="/contact-us"
                    breadcrumbItems={[
                        { label: 'Home', url: '/' },
                        { label: 'Our Products', url: '/products' }
                    ]}
                    backgroundImage="/images/vertical/vertical-bg.jpg"
                />

                <div className='bg-black'>
                    <OurVwerticalGrid className='container' />
                </div>
            </div>
        </html>


    )
}

export default OurVerticals