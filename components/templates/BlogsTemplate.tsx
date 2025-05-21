import React from 'react'
import BlogsHero from '@/components/organisms/sections/blogs/BlogsHero';
import BlogSlider from '../organisms/sections/blogs/BlogSlider';
import NewsletterSection from '../organisms/sections/blogs/NewsletterSection';
import TechnologySection from '../organisms/sections/blogs/TechnologySection';
import SuggestedBlogSection from '../organisms/sections/blogs/SuggestedBlogSection';
import BlogGridLayout from '../organisms/sections/blogs/BlogGridLayout';



const BlogsTemplate = () => {
    return (
        <section className="w-full bg-black text-white pt-32 pb-20 px-4 border-b-2 border-[#525252]">
            <div className='pb-20'>
                <BlogsHero
                    title="Blogs"
                    description="Explore our IT blog hub for cutting-edge insights, expert advice, and industry updates. Stay informed on the latest tech trends with our comprehensive collection of informative and engaging blog posts."
                    breadcrumbItems={[
                        { label: 'Home', url: '/' },
                        { label: 'Blogs', url: '/blogs' },
                    ]}
                    className='pb-20'
                />
            </div>
            <BlogSlider />
            <BlogGridLayout/>
            <NewsletterSection/>
            <TechnologySection/>
            <SuggestedBlogSection/>
        </section >
    );
};

export default BlogsTemplate;
