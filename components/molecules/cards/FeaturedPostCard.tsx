import HeadingText from '@/components/atoms/typography/HeadingText'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Featured {
    image: string,
    title: string,
    date: string,
    author: string
}

const FeaturedPostCard = (featured: Featured) => {
    return (
        <Link href='#' className="rounded-2xl overflow-hidden shadow-lg relative group">
            <Image
                src={featured?.image || ""}
                alt={featured?.title || ""}
                fill
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                <HeadingText text={featured?.title || ""} color="#ffffff" className="lg:text-2xl" theme='dark' />
                <p className="text-sm text-gray-300">
                    by {featured?.author} &nbsp;&bull;&nbsp; {featured?.date}
                </p>
            </div>
        </Link>
    )
}

export default FeaturedPostCard