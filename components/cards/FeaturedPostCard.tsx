
import HeadingText from "@/components/typography/HeadingText";
import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { format } from "date-fns";

interface Featured {
  title: string;
  featuredImage?: string;
  slug: string;
  date: string;
  author?: string
}

const FeaturedPostCard = ({ featuredImage = "", title, slug, date, author }: Featured) => {

  const slugify = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  return (
    <a
      href={`/blogs/${slugify(title)}`}
      // href={`/blogs/${slug}`}
      className=" overflow-hidden shadow-lg relative group min-h-[260px] grow"
    >
      {featuredImage?.trim() && (
        <Image
          src={featuredImage}
          alt={title || "Featured Post"}
          fill
          loading="lazy"
          className="w-full h-64 rounded-2xl  transition-transform duration-300 border-1 border-[#2BADB7]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
        <p className="lg:text-2xl text-white font-bold hover:text-[#2BADB7] hover:font-black">
          {title}
        </p>

        {/* <p className="lg:text-2xl text-white font-bold hover:font-black">{title || "Featured Post"}</p> */}
        {/* <HeadingText
          text={title || "Featured Post"}
          color="#ffffff"
          className="lg:text-2xl "
          theme="dark" */}
        {/* /> */}
        {
          date &&
          <p className="text-sm text-gray-300 mt-2">
            by {author ? author : "Author name"} &nbsp;&bull;&nbsp; {format(new Date(date), "MMMM dd, yyyy")}
          </p>
        }

      </div>
    </a>
  );
};

export default FeaturedPostCard;
