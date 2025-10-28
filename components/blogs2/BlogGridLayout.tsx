import React from 'react';
// import Link from 'next/link';
// import { blogPosts } from '@/lib/data/blogsData';

import HeadingText from '@/components/typography/HeadingText';
import BlogCard from '../blogs/BlogCard';
import HorizontalCard from '../blogs/HorizontalCard';
import NumberedCard from '../blogs/NumberCard';
import { Post } from '@/types/wordpress';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

const BlogGridLayout = ({ posts }: { posts: Post[] }) => {
  // Use first blog post for the featured card
  // const featuredPost = blogPosts[0];
  const featuredPost = posts[0];

  // Use the next 4 posts for the horizontal cards section
  // const horizontalCardsPosts = blogPosts.slice(0, 4);

  // const editorsPickBlogs = blogPosts.filter(post => post.category === "Editor's Pick");
  // const featuredPost = editorsPickBlogs[0];
  // const horizontalCardsPosts = editorsPickBlogs.slice(1, 6);


  // Use the same posts for the numbered cards section
  // const numberedCardsPosts = blogPosts.slice(0, 4);
  // const numberedCardsPosts = blogPosts
  //   .filter((blog) => blog.category === "Trending")
  //   .slice(0, 5);

  return (
    <div className="container bg-black text-white px-8">
      <div className="w-full">
        {/* Header row with headings */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
          <HeadingText text="Editor's Pick" className="text-lg" />
          <HeadingText text="" className="text-lg hidden sm:hidden lg:block" />
          <div className='hidden lg:block'>
            <HeadingText text="Trending" className="text-lg" />
          </div>
        </div>

        {/* Content row with cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First Column - BlogCard */}
          <>
            <div>
              <BlogCard
                imageUrl={featuredPost?.featuredImage?.node.sourceUrl || ''}
                title={featuredPost?.title}
                description={featuredPost?.excerpt}
                author={""}
                date={featuredPost?.date}
                linkUrl={`/blog/${featuredPost?.slug}`}
              />
            </div>

            {/* Second Column - Four Horizontal Cards */}
            <div className="flex flex-col gap-4">
              {posts.slice(1, 5).map((post) => (
                <a key={post.id} href={`/blogs/${post.slug}`}>
                  <div className='bg-[#212121] rounded-lg'>
                    <HorizontalCard
                      imageUrl={post?.featuredImage?.node.sourceUrl || ''}
                      title={post?.title}
                      author={""}
                      imageWidth="w-25"
                      imageHeight="h-20"
                      date={format(new Date(post?.date), 'MMMM dd, yyyy', { locale: enUS })}// Format date to 'MMMM dd, yyyy'
                    />
                  </div>
                </a>
              ))}
            </div>
          </>

          <div className='lg:hidden block'>
            <HeadingText text="Trending" className="text-lg" />
          </div>
          {/* Third Column - Numbered Cards */}
          <div className="space-y-6 flex flex-col gap-1">
            {posts.slice(5, 10).map((post, index) => (
              <a key={post.id} href={`/blogs/${post.slug}`}>
                <NumberedCard
                  number={`0${index + 1}`}
                  title={post?.title}
                  author={""}
                  date={format(new Date(post?.date), 'MMMM dd, yyyy', { locale: enUS })}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGridLayout;