import React from 'react'
import FeaturedPostCard from '../cards/FeaturedPostCard'
// import PostLists from './PostLists'
import { Post } from '@/types/wordpress'
import PostLists from './PostLists'
import { newBlogData } from '@/lib/data/newBlogData'


const PostHighlights = ({ featured, recent }: { featured: Post, recent: Post[] }) => {

    const featuredItem = newBlogData

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Post */}
            <FeaturedPostCard
                featuredImage={featuredItem[0]?.image || ''}
                title={featuredItem[0].bannerTitle}
                slug={featuredItem[0]?.bannerDiscription}
                date={featured?.date}
                author={"Fazil Arfath"}
            />

            {/* Recent Posts */}
            <div className="flex flex-col justify-between gap-4">
                <PostLists />
                {/* <OutlineBtn url="#" text="See all Posts" /> */}
            </div>
        </div>
    )
}

export default PostHighlights