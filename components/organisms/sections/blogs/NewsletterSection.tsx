'use client'

import React from 'react'
import CaseStudyCard from '@/components/molecules/cards/CaseStudyCard'
import { CaseStudy } from '@/types/PropsTypes'
import NewsletterSubscription from '../../../molecules/blogs/NewsLetterSubscription'

const NewsletterSection = () => {
    const caseStudyData: CaseStudy = {
        id: '1',
        title: "Experience a multi-functional AI-powered platform",
        image: "/images/blogs/blog-featured-2.jpg",
        link: "/contact",
        linkText: "Contact us",
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