import React from 'react'
import HeroBanner from '../organisms/sections/HeroBanner'
import ServicesGrid from '../organisms/sections/ServiceGrid'

const AboutTemplate = () => {
    return (
        <>
            <HeroBanner title="Our Services"
                description="IT Cart offers a wide range of carefully curated services designed to empower businesses across industries. From advanced application development to robust cybersecurity solutions, we help unlock your enterprise's full potential. With a focus on innovation, efficiency, and security, we enable businesses to thrive in today's dynamic market."
                ctaText="Connect with Us"
                ctaUrl="/contact"
                breadcrumbItems={[
                    { label: 'Home', url: '/' },
                    { label: 'Our Services', url: '/services' }
                ]}
                backgroundImage="/images/services/service-bg.png" />
            <ServicesGrid />
        </>
    )
}

export default AboutTemplate