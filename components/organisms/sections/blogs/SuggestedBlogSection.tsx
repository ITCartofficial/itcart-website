'use client'
import React, { useState, useEffect, useMemo, useRef } from 'react'

import GradientTitle from '@/components/atoms/typography/GradientTitle'
import HorizontalCard from '../../../molecules/blogs/HorizontalCard'
import CaseStudyCard from '@/components/molecules/cards/CaseStudyCard'
import SearchInput from '@/components/molecules/common/SearchInput'
import SocialIcons from '@/components/molecules/common/SocialIcons'

import { blogPosts } from '@/lib/data/blogsData'
import { CaseStudy } from '@/types/PropsTypes'
import Image from 'next/image'
import { socialLinks } from '@/lib/data/footerData'

// Define types for blog post
interface BlogPost {
    id: string;
    title: string;
    author: string;
    date: string;
    imageUrl: string;
    slug: string;
    category: string;
    description?: string;
    content?: string;
}

const SuggestedBlogSection = () => {
    const [search, setSearch] = useState<string>('')
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const [searchResults, setSearchResults] = useState<BlogPost[]>([])
    const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)

    // Get original must-read posts
    const suggestedPostsCard = useMemo<BlogPost[]>(() => {
        return blogPosts
            .filter((blog: BlogPost) => blog.category === "Must Read")
            .slice(0, 5)
    }, [])

    // Debounced search function
    const handleSearchChange = (value: string): void => {
        setSearch(value)

        // Clear any existing timer
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current)
        }

        // Set new timer for 300ms debounce
        debounceTimerRef.current = setTimeout(() => {
            if (value.trim() === '') {
                setSearchResults([])
                setShowDropdown(false)
            } else {
                const searchLower = value.toLowerCase()

                // First filter matching posts
                const matchingPosts = blogPosts.filter((blog: BlogPost) =>
                    blog.title.toLowerCase().includes(searchLower) ||
                    blog.author.toLowerCase().includes(searchLower) ||
                    (blog.description && blog.description.toLowerCase().includes(searchLower))
                )

                // Sort by relevance
                const sortedPosts = matchingPosts.sort((a: BlogPost, b: BlogPost) => {
                    const titleA = a.title.toLowerCase()
                    const titleB = b.title.toLowerCase()

                    // Exact title match takes highest priority
                    if (titleA === searchLower && titleB !== searchLower) return -1
                    if (titleB === searchLower && titleA !== searchLower) return 1

                    // Title starts with search term takes second priority
                    const aStartsWith = titleA.startsWith(searchLower)
                    const bStartsWith = titleB.startsWith(searchLower)
                    if (aStartsWith && !bStartsWith) return -1
                    if (bStartsWith && !aStartsWith) return 1

                    // Title contains search term takes third priority
                    const aContains = titleA.includes(searchLower)
                    const bContains = titleB.includes(searchLower)
                    if (aContains && !bContains) return -1
                    if (bContains && !aContains) return 1

                    // If both have same priority level, sort alphabetically
                    return titleA.localeCompare(titleB)
                })

                // Take more results (up to 10 for scrolling)
                const filtered = sortedPosts.slice(0, 10)

                setSearchResults(filtered)
                setShowDropdown(filtered.length > 0)
            }
        }, 300) // 300ms debounce time
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (): void => {
            setShowDropdown(false)
        }

        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    // Clean up debounce timer on unmount
    useEffect(() => {
        return () => {
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current)
            }
        }
    }, [])

    const caseStudyData = {
        id: '1',
        title: "Experience a multi-functional AI-powered platform",
        author: "ITCart Team",
        date: "2024-06-01",
        imageUrl: "/images/blogs/blog-featured-14.jpg",
        bannerImage: "/images/blogs/blog-featured-14-banner.jpg",
        description: "Discover how our AI-powered platform transforms your business.",
        link: "/contact-us",
        linkText: "Contact us",
        slug: "ai-powered-platform",
        content: [
            {
                title: "Overview",
                content: "Learn more about our multi-functional AI-powered platform and how it can benefit your business."
            }
        ]
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
                        {suggestedPostsCard.map((post: BlogPost) => (
                            <HorizontalCard key={post.id}
                                imageUrl={post.imageUrl}
                                title={post.title}
                                author={post.author}
                                date={post.date}
                                imageHeight='h-40'
                                titleSize="text-2xl"
                                showButton={true}
                                buttonUrl={`/blog/${post.slug}`}
                                buttonText="Continue Reading"
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Sidebar */}
                <div className='col-span-1 flex flex-col gap-6'>
                    <div className="w-full max-w-md relative">
                        <SearchInput value={search} onChange={handleSearchChange} />

                        {/* Search Results Dropdown */}
                        {showDropdown && searchResults.length > 0 && (
                            <div
                                className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-lg max-h-80 overflow-y-auto"
                                onClick={(e: React.MouseEvent) => e.stopPropagation()} // Prevent closing when clicking inside
                            >
                                {searchResults.map((post: BlogPost) => (
                                    <a
                                        key={post.id}
                                        href={`/blog/${post.slug}`}
                                        className="block p-3 border-b border-gray-700 last:border-0 hover:bg-gray-700 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            {post.imageUrl && (
                                                <div className="w-16 h-16 flex-shrink-0 relative">
                                                    <Image
                                                        src={post.imageUrl}
                                                        alt={post.title}
                                                        fill
                                                        className="w-full h-full object-cover rounded"
                                                    />
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="text-white font-medium line-clamp-1">
                                                    {post.title}
                                                </h4>
                                                <p className="text-gray-400 text-sm">
                                                    {post.author} • {post.date}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                                {searchResults.length >= 10 && (
                                    <div className="p-3 text-center text-sm text-gray-400 border-t border-gray-700">
                                        Search for more results...
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <GradientTitle
                        text="Stay Connected"
                        fontWeight="bold"
                        theme='dark'
                        className="text-3xl md:text-4xl leading-tight"
                    />
                    <SocialIcons size={21} color="#ffffff" className='md:justify-center' socialMedia={socialLinks} />
                    <div className='h-[350px] md:h-[450px]'>
                        <CaseStudyCard card={caseStudyData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuggestedBlogSection




// 'use client'
// import React, { useState } from 'react'


// import GradientTitle from '@/components/atoms/typography/GradientTitle'
// import HorizontalCard from '../../../molecules/blogs/HorizontalCard'
// import CaseStudyCard from '@/components/molecules/cards/CaseStudyCard'
// import SearchInput from '@/components/molecules/common/SearchInput'
// import SocialIcons from '@/components/molecules/common/SocialIcons'

// import { blogPosts } from '@/components/data/blogsData'
// import { CaseStudy } from '@/types/PropsTypes'

// const SuggestedBlogSection = () => {
//     const [search, setSearch] = useState('')

//     // const suggestedPostsCard = blogPosts.slice(0, 3)
//     const suggestedPostsCard = blogPosts
//         .filter((blog) => blog.category === "Must Read")
//         .slice(0, 5);
//     const caseStudyData: CaseStudy = {
//         id: '1',
//         title: "Experience a multi-functional AI-powered platform",
//         image: "/images/blogs/blog-featured-14.jpg",
//         link: "/contact",
//         linkText: "Contact us",
//     }

//     return (
//         <div>
//             <div className='container grid grid-cols-1 md:grid-cols-3 gap-8'>
//                 {/* Left: Blog Cards */}
//                 <div className='col-span-2'>
//                     <GradientTitle
//                         text="Must Read"
//                         fontWeight="bold"
//                         theme='dark'
//                         className="text-4xl leading-tight"
//                     />
//                     <div className='flex flex-col gap-4 pt-10'>
//                         {suggestedPostsCard.map((post) => (
//                             <HorizontalCard key={post.id}
//                                 imageUrl={post.imageUrl}
//                                 title={post.title}
//                                 author={post.author}
//                                 date={post.date}
//                                 imageHeight='h-40'
//                                 titleSize="text-2xl"
//                                 showButton={true}
//                                 buttonUrl={`/blog/${post.slug}`}
//                                 buttonText="Continue Reading"
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right: Sidebar */}
//                 <div className='col-span-1 flex flex-col gap-6'>
//                     <div className="w-full max-w-md">
//                         <SearchInput value={search} onChange={setSearch} />
//                     </div>
//                     <GradientTitle
//                         text="Stay Connected"
//                         fontWeight="bold"
//                         theme='dark'
//                         className="text-4xl leading-tight"
//                     />
//                     <SocialIcons size={21} color="#ffffff" className='md:justify-center' />
//                     <CaseStudyCard card={caseStudyData} />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SuggestedBlogSection