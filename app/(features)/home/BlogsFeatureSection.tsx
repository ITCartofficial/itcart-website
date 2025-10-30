"use client";

import BodyText from "@/components/typography/BodyText";
import GradientTitle from "@/components/typography/GradientTitle";
import PostHighlights from "@/components/common/PostHighlights";

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

  const featured: Post = posts[0];
    const recent: Post[] = posts?.slice(1, 5);

  return (
    <div className="bg-black lg:rounded-tl-[85px] lg:rounded-tr-[85px] overflow-hidden md:pt-4">
      <section className="bg-black text-white container mx-auto lg:px-10 md:py-16">
        <div className="flex flex-col gap-2 mb-8">
          <BodyText
            text="News & Blogs"
            className="text-[24px] font-semibold text-center md:text-start"
            color="#ffffff"
          />
          <GradientTitle
            text="Insights & Thought Leadership"
            theme="dark"
            className="text-[30px] lg:text-[48px]leading-[1.3] w-full md:w-full text-center md:text-start"
          />
        </div>
        <PostHighlights featured={featured} recent={recent} />
      </section>
    </div>
  );
}
