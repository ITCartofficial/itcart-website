"use client";

import BodyText from "@/app/components/typography/BodyText";
import GradientTitle from "@/app/components/typography/GradientTitle";
import PostHighlights from "@/app/components/common/PostHighlights";

import { Post } from "@/types/wordpress";
// interface Featured {
//   id?: string;
//   image: string;
//   title: string;
//   date: string;
//   author: string;
//   featured?: boolean;
// }

export default function BlogsFeatureSection({posts}: {posts: Post[]}) {

  //   const featured = posts.find((p) => p.featured) || posts[0];
  //   const recent = posts.filter((p) => !p.featured);

  const featured: Post = posts[0];
    const recent: Post[] = posts?.slice(1, 5);

  return (
    <div className="bg-black lg:rounded-tl-[85px] lg:rounded-tr-[85px] overflow-hidden pt-4">
      <section className="bg-black text-white container mx-auto lg:px-10 py-16">
        <div className="flex flex-col gap-2 mb-8">
          <BodyText
            text="News & Blogs"
            className="text-[24px] font-semibold"
            color="#ffffff"
          />
          <GradientTitle
            text="Insights & Thought Leadership"
            theme="dark"
            className="text-[30px] lg:text-[50px] leading-tight w-full md:w-full"
          />
        </div>
        <PostHighlights featured={featured} recent={recent} />
      </section>
    </div>
  );
}
