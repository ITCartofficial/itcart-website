'use client'

import React from 'react'
import CaseStudyCard from '@/components/cards/CaseStudyCard'
import NewsletterSubscription from '../blogs/NewsLetterSubscription'

const NewsletterSection = () => {
    const caseStudyData = {
        id: '1',
        title: "Experience a multi-functional AI-powered platform",
        image: "/images/blogs/blog-featured-2.jpg",
        link: "/contact",
        linkText: "Contact us",
        author: "John Doe",
        date: "2024-06-01",
        imageUrl: "/images/blogs/blog-featured-2.jpg",
        bannerImage: "/images/blogs/blog-banner-2.jpg",
        description: "Discover how our AI-powered platform can transform your business operations.",
        slug: "ai-powered-platform",
        content: [
            {
                title: "Overview",
                content: "This case study explores the features and benefits of our multi-functional AI-powered platform, showcasing real-world applications and results.",
            }
        ],
        // Add any other required properties with appropriate values
    }

    return (
        <div className="container bg-black pt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2 order-2 md:order-1">
                    <NewsletterSubscription theme="dark"/>
                </div>

                <div className='col-span-1 md:col-span-1 h-[350px] md:h-full lg:h-[425px] order-1 md:order-2'>
                    <CaseStudyCard card={caseStudyData} />
                </div>
            </div>
        </div>
    )
}

export default NewsletterSection