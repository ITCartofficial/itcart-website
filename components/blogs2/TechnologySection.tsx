import React from 'react'
import BlogCard from '../blogs/BlogCard'
import { newBlogData } from '@/lib/data/newBlogData';
// import { newBlogData } from '@/lib/data/blogsData';
import LinkButton from '@/components/buttons/LinkButton';
import GradientTitle from '@/components/typography/GradientTitle';

// const TechnologySection = () => {
//     // const technologyPostsCard = blogPosts.slice(0, 3);
//     const technologyPostsCard = newBlogData
//         .filter((blog) => blog.type === "Technology")
//         .slice(0, 3);
const TechnologySection = ({ type }: { type: string }) => {
    const filteredPosts = newBlogData
        .filter((blog) => blog.type === type)
        .slice(0, 3);

    const convertToSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    };

    return (
        <div className='container'>
            <div className='flex justify-between'>
                <GradientTitle
                    text={type}
                    fontWeight="bold"
                    theme='dark'
                    className="text-4xl leading-tight"
                />
                {/* ${convertToSlug(post?.bannerTitle) */}
                <LinkButton text='View All' url={`blogcategories/${convertToSlug(filteredPosts[0]?.type)  }`} />
            </div>
            {/* <div className='grid grid-cols-1 md:grid-cols-3 py-10 gap-10 lg:gap-20'>
                {filteredPosts.map((post, index) => (
                    <BlogCard key={index}
                        imageUrl={post.image}
                        title={post.bannerTitle}
                        description={post.bannerDiscription}
                        author={post.writtenBy}
                        date={post.writtenDate}
                        linkUrl={`/blog/${post.slug}`} />
                ))}

            </div> */}
            <div className="py-10 overflow-x-auto scrollbar-hide">
                <div className="flex gap-10">
                    {filteredPosts.map((post, index) => (
                        <BlogCard
                            key={index}
                            imageUrl={post.image}
                            title={post.bannerTitle}
                            description={post.bannerDiscription}
                            author={post.writtenBy}
                            date={post.writtenDate}

                            linkUrl={`/blogs/${convertToSlug(post?.bannerTitle)}?id=${post?.id}`}
                        // linkUrl={`/blogs/${post?.bannerTitle}/${post.id}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechnologySection