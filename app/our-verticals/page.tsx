import HeroBanner from '@/components/HeroBanner'
import OurVwerticalGrid from '@/components/OurVwerticalGrid'
import React from 'react'

const OurVerticals = () => {

    return (
        <div className='bg-black'>
            <HeroBanner title="Our Verticals"
                description="Our company showcases expertise across tech, healthcare, finance, and e-commerce industries. Specializing in software development, cybersecurity, healthcare IT, fintech, and e-commerce solutions, we deliver Automation innovation and tailored services to optimize operations and bolster client growth in these sectors."
                ctaText="Connect with Us"
                ctaUrl="/contact"
                breadcrumbItems={[
                    { label: 'Home', url: '/' },
                    { label: 'Our Verticals', url: '/our-verticals' }
                ]}
                backgroundImage="/images/vertical/vertical-bg.jpg"
            />
            <div className='bg-black'>

                <OurVwerticalGrid className='container' />
            </div>
        </div>
    )
}

export default OurVerticals