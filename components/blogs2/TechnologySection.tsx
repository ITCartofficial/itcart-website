import React from 'react'
import BlogCard from '../blogs/BlogCard'
import { blogPosts } from '@/lib/data/blogsData';
import LinkButton from '@/components/buttons/LinkButton';
import GradientTitle from '@/components/typography/GradientTitle';

const TechnologySection = () => {
    // const technologyPostsCard = blogPosts.slice(0, 3);
    const technologyPostsCard = blogPosts
        .filter((blog) => blog.category === "Technology")
        .slice(0, 3);
    return (
        <div className='container'>
            <div className='flex justify-between'>
                <GradientTitle
                    text="Technology"
                    fontWeight="bold"
                    theme='dark'
                    className="text-4xl leading-tight"
                />
                <LinkButton text='View All' url='#' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 py-10 gap-10 lg:gap-20'>
                {technologyPostsCard.map((post, index) => (
                    <BlogCard key={index}
                        imageUrl={post.imageUrl}
                        title={post.title}
                        description={post.description}
                        author={post.author}
                        date={post.date}
                        linkUrl={`/blog/${post.slug}`} />
                ))}

            </div>
        </div>
    )
}

export default TechnologySection