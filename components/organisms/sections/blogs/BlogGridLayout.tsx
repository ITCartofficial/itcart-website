import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/components/data/blogsData';

import HeadingText from '@/components/atoms/typography/HeadingText';
import BlogCard from '../../../molecules/blogs/BlogCard';
import HorizontalCard from '../../../molecules/blogs/HorizontalCard';
import NumberedCard from '../../../molecules/blogs/NumberCard';

const BlogGridLayout = () => {
  // Use first blog post for the featured card
  // const featuredPost = blogPosts[0];

  // Use the next 4 posts for the horizontal cards section
  // const horizontalCardsPosts = blogPosts.slice(0, 4);

  const editorsPickBlogs = blogPosts.filter(post => post.category === "Editor's Pick");
  const featuredPost = editorsPickBlogs[0];
  const horizontalCardsPosts = editorsPickBlogs.slice(1, 6);


  // Use the same posts for the numbered cards section
  // const numberedCardsPosts = blogPosts.slice(0, 4);
  const numberedCardsPosts = blogPosts
    .filter((blog) => blog.category === "Trending")
    .slice(0, 5);

  return (
    <div className="container bg-black text-white p-8 mt-20">
      <div className="w-full">
        {/* Header row with headings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
          <HeadingText text="Editor's Pick" className="text-lg" />
          <HeadingText text="" className="text-lg" />
          <HeadingText text="Trending" className="text-lg" />
        </div>

        {/* Content row with cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First Column - BlogCard */}
          <div>
            <BlogCard
              imageUrl={featuredPost.imageUrl}
              title={featuredPost.title}
              description={featuredPost.description}
              author={featuredPost.author}
              date={featuredPost.date}
              linkUrl={`/blog/${featuredPost.slug}`}
            />
          </div>

          {/* Second Column - Four Horizontal Cards */}
          <div className="flex flex-col gap-4">
            {horizontalCardsPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className='bg-[#212121] rounded-lg'>
                  <HorizontalCard
                    imageUrl={post.imageUrl}
                    title={post.title}
                    author={post.author}
                    date={post.date}
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Third Column - Numbered Cards */}
          <div className="space-y-6 flex flex-col gap-1">
            {numberedCardsPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <NumberedCard
                  number={`0${index + 1}`}
                  title={post.title}
                  author={post.author}
                  date={post.date}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGridLayout;