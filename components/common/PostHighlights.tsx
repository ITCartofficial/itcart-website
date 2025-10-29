import React from 'react'
import FeaturedPostCard from '../cards/FeaturedPostCard'
// import PostLists from './PostLists'
import { Post } from '@/types/wordpress'
import PostLists from './PostLists'


const PostHighlights = ({ featured, recent }: { featured: Post, recent: Post[] }) => {

    console.log("featured", featured);


    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Post */}
            <FeaturedPostCard
                featuredImage={featured?.featuredImage?.node?.sourceUrl || ''}
                title={featured?.title}
                slug={featured?.slug}
                date={featured?.date}
            />

            {/* Recent Posts */}
            <div className="flex flex-col justify-between gap-4">
                <PostLists posts={recent} items={3} />
                {/* <OutlineBtn url="#" text="See all Posts" /> */}
            </div>
        </div>
    )
}

export default PostHighlights