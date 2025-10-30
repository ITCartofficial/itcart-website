import HeadingText from "@/components/typography/HeadingText";
import { Post } from "@/types/wordpress";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import OutlineBtn from "../buttons/OutlineBtn";
import { FaArrowRight } from "react-icons/fa6";

// interface Post {
//   title: string;
//   author: string;
//   date: string;
//   image: string;
//   featured?: boolean;
// }

const  PostLists = ({ posts, items = 3 }: { posts: Post[]; items: number }) => {
  return (
    <div className="flex flex-col gap-3 flex-grow-0">
      {posts?.slice(0, items).map((post, idx) => (
        <a
          href={`/blogs/${post?.slug}`}
          key={idx}
          className="flex items-center gap-4 hover:bg-white/5 p-2 rounded-lg transition "
        >
          <Image
            src={post?.featuredImage?.node.sourceUrl || ""}
            alt={post?.title}
            width={100}
            height={100}
            loading="lazy"
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            {/* <p className="text-sm text-gray-400">
              {post.author} &nbsp;&bull;&nbsp; {post.date}
            </p> */}

            <HeadingText
              text={post.title || ""}
              className="text-base font-bold"
              color="#ffffff"
            />
            <p className="text-sm text-gray-400">
              {format(new Date(post?.date), "MMMM dd, yyyy")}
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
