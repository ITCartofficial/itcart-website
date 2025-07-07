
import HeadingText from "@/components/atoms/typography/HeadingText";
import Image from "next/image";
// import Link from "next/link";
import React from "react";

interface Featured {
  title: string;
  featuredImage?: string;
  slug: string;
}

const FeaturedPostCard = ({ featuredImage="", title, slug }: Featured) => {
  return (
    <a
      href={`/blogs/${slug}`}
      className="rounded-2xl overflow-hidden shadow-lg relative group min-h-[260px] grow"
    >
      <Image
        src={featuredImage ? featuredImage : ""}
        alt={title || "Featured Post"}
        fill
        loading="lazy"
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
        <HeadingText
          text={title || "Featured Post"}
          color="#ffffff"
          className="lg:text-2xl"
          theme="dark"
        />
        {/* <p className="text-sm text-gray-300">
          by {featured?.author} &nbsp;&bull;&nbsp; {featured?.date}
        </p> */}
      </div>
    </a>
  );
};

export default FeaturedPostCard;
