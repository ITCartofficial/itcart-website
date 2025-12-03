import React from 'react';
import HeadingText from '@/components/typography/HeadingText';
import BlogCard from '../blogs/BlogCard';
import HorizontalCard from '../blogs/HorizontalCard';
import NumberedCard from '../blogs/NumberCard';

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const BlogGridLayout = ({ posts }: { posts: any[] }) => {
  const featuredPost = posts[0];

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
                imageUrl={featuredPost.image}
                title={featuredPost.bannerTitle}
                description={featuredPost.bannerDiscription}
                date={featuredPost.writtenDate}
                id={featuredPost.id}
                linkUrl={`/blogs/${slugify(featuredPost.bannerTitle)}?id=${featuredPost.id}`}

              />
            </div>

            {/* Second Column - Four Horizontal Cards */}
            <div className="flex flex-col gap-4">
              {posts.slice(1, 5).map((post) => (
                <a key={post.id} href={`/blogs/${slugify(post.bannerTitle)}?id=${post.id}`}>
                  <div className='bg-[#212121] rounded-lg'>
                    <HorizontalCard
                      imageUrl={post.image}
                      title={post.bannerTitle}
                      author={post.writtenBy}
                      imageWidth="w-25"
                      imageHeight="h-20"
                      date={post.writtenDate}
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
              <a
                key={post.id}
                href={`/blogs/${slugify(post.bannerTitle)}?id=${post.id}`}
              >
                <NumberedCard
                  number={`0${index + 1}`}
                  title={post.bannerTitle}
                  author={post.writtenBy}
                  date={post.writtenDate}
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