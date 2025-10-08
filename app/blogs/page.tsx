'use client';

import React, { useEffect } from "react";
import BlogsHero from "@/components/blogs2/BlogsHero";
import BlogSlider from "@/components/blogs2/BlogSlider";
import NewsletterSection from "@/components/blogs2/NewsletterSection";
// import TechnologySection from "../organisms/sections/blogs/TechnologySection";
// import SuggestedBlogSection from "../organisms/sections/blogs/SuggestedBlogSection";
import BlogGridLayout from "@/components/blogs2/BlogGridLayout";
import { GET_ALL_POST_SLUGS } from "@/lib/wp/queries";
import client from "@/lib/wp/graphqlClient";
import { Post } from "@/types/wordpress";
import { notFound } from "next/navigation";
import TechnologySection from "@/components/blogs2/TechnologySection";
import SuggestedBlogSection from "@/components/blogs2/SuggestedBlogSection";

const BlogsTemplate = () => {
  const getBlogs = async () => {
    try {
      const { data } = await client.query({
        query: GET_ALL_POST_SLUGS,
      });
      return data.posts.nodes;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  };

  const [posts, setPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    // This effect runs only once when the component mounts
    const fetchPosts = async () => {
      const fetchedPosts = await getBlogs();
      if (fetchedPosts.length === 0) {
        notFound(); // If no posts are found, trigger a 404 page
      } else {
        setPosts(fetchedPosts);
      }
    };
    fetchPosts();
    // console.log("Fetching posts...");
  }, []);

  return (
    <section className="w-full bg-black text-white pt-32 pb-20 px-4 border-b-2 border-[#525252]">
      <div className="pb-20">
        <BlogsHero
          title="Blogs"
          description="Explore our IT blog hub for cutting-edge insights, expert advice, and industry updates. Stay informed on the latest tech trends with our comprehensive collection of informative and engaging blog posts."
          breadcrumbItems={[
            { label: "Home", url: "/" },
            { label: "Blogs", url: "/blogs" },
          ]}
          className="pb-20"
        />
      </div>
      <BlogSlider posts={posts} />
      <BlogGridLayout posts={posts} />
      <NewsletterSection />
      <TechnologySection />
      <SuggestedBlogSection />

    </section>
  );
};

export default BlogsTemplate;
