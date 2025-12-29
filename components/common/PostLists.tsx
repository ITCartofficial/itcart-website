import HeadingText from "@/components/typography/HeadingText";
// import { Post } from "@/types/wordpress";
// import { format } from "date-fns";
import Image from "next/image";
// import React from "react";
import OutlineBtn from "../buttons/OutlineBtn";
import { FaArrowRight } from "react-icons/fa6";
import { newBlogData } from "@/lib/data/newBlogData";

// interface Post {
//   title: string;
//   author: string;
//   date: string;
//   image: string;
//   featured?: boolean;
// }

const PostLists = () => {

  const featuredItem = newBlogData

  const slugify = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  return (
    <div className="flex flex-col gap-3 flex-grow-0">
      {featuredItem?.slice(20, 23).map((post, idx) => (
        <a
          href={`/blogs/${slugify(post?.bannerTitle)}`}
          key={idx}
          className="flex items-center gap-4 hover:bg-white/5 p-2 rounded-lg transition "
        >
          <Image
            src={post?.image || ""}
            alt={post?.bannerTitle}
            width={100}
            height={100}
            loading="lazy"
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <p className="text-base text-white font-bold hover:text-[#2BADB7] hover:font-black">
              {post.bannerTitle || ""}
            </p>
            {/* <HeadingText
              text={post.bannerTitle || ""}
              className="text-base font-bold hover:text-red-400"
              color="#ffffff"
            /> */}
            <p className="text-sm text-gray-400">
              {post?.writtenBy} - {post?.writtenDate}
            </p>
          </div>
        </a>
      ))}

      <div className="md:mt-4 mt-3  flex md:justify-start justify-center">
        <OutlineBtn
          text="See all posts"
          url="/blogs"
          textColor='#ffffff'
          icon={<FaArrowRight className="text-sm font-semibold text-white" />}
        />
      </div>

    </div>
  );
};

export default PostLists;
