import HeadingText from "@/components/atoms/typography/HeadingText";
import Image from "next/image";
import React from "react";

interface Post {
  title: string;
  author: string;
  date: string;
  image: string;
  featured?: boolean;
}

const PostLists = ({ posts, items = 3 }: { posts: Post[]; items: number }) => {
  return (
    <div className="flex flex-col gap-3 flex-grow-0">
      {posts.slice(0, items).map((post, idx) => (
        <div
          key={idx}
          className="flex items-center gap-4 hover:bg-white/5 p-2 rounded-lg transition "
        >
          <Image
            src={post.image}
            alt={post.title}
            width={100}
            height={100}
            loading="lazy"
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <p className="text-sm text-gray-400">
              {post.author} &nbsp;&bull;&nbsp; {post.date}
            </p>
            <HeadingText
              text={post.title || ""}
              className="text-base font-bold"
              color="#ffffff"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostLists;
