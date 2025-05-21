'use client'
import React, { useState } from 'react'


import GradientTitle from '@/components/atoms/typography/GradientTitle'
import HorizontalCard from '../../../molecules/blogs/HorizontalCard'
import CaseStudyCard from '@/components/molecules/cards/CaseStudyCard'
import SearchInput from '@/components/molecules/common/SearchInput'
import SocialIcons from '@/components/molecules/common/SocialIcons'

import { blogPosts } from '@/components/data/blogsData'
import { CaseStudy } from '@/types/PropsTypes'

const SuggestedBlogSection = () => {
    const [search, setSearch] = useState('')

    const suggestedPostsCard = blogPosts.slice(0, 3)
    const caseStudyData: CaseStudy = {
        id: '1',
        title: "Experience a multi-functional AI-powered platform",
        image: "/images/blogs/blog-featured-2.jpg",
        link: "/contact",
        linkText: "Contact us",
    }

    return (
        <div>
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* Left: Blog Cards */}
                <div className='col-span-2'>
                    <GradientTitle
                        text="Must Read"
                        fontWeight="bold"
                        theme='dark'
                        className="text-4xl leading-tight"
                    />
                    <div className='flex flex-col gap-4 pt-10'>
                        {suggestedPostsCard.map((post) => (
                            <HorizontalCard key={post.id}
                                imageUrl={post.imageUrl}
                                title={post.title}
                                author={post.author}
                                date={post.date}
                                imageHeight='h-40'
                                titleSize="text-2xl"
                                titleWeight="bold"
                                showButton={true}
                                buttonUrl={`/blog/${post.slug}`}
                                buttonText="Continue Reading"
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Sidebar */}
                <div className='col-span-1 flex flex-col gap-6'>
                    <div className="w-full max-w-md">
                        <SearchInput value={search} onChange={setSearch} />
                    </div>
                    <GradientTitle
                        text="Stay Connected"
                        fontWeight="bold"
                        theme='dark'
                        className="text-4xl leading-tight"
                    />
                    <SocialIcons size={21} color="#ffffff" className='md:justify-center' />
                    <CaseStudyCard card={caseStudyData} />
                </div>
            </div>
        </div>
    )
}

export default SuggestedBlogSection
