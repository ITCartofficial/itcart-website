import React from "react";
import Image from "next/image";
import HeadingText from "@/components/typography/HeadingText";
// import BodyText from "@/components/atoms/typography/BodyText";
import LinkButton from "@/components/buttons/LinkButton";
import { format } from "date-fns";
// import { enUS } from "date-fns/locale";

interface BlogCardProps {
  imageUrl?: string; // Make optional
  title: string;
  description: string;
  author?: string;
  date: string;
  linkUrl?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  title,
  description,
  date,
}) => {
  let formattedDate = "Unknown date";
  if (date) {
    const dateObj = new Date(date);
    if (!isNaN(dateObj.getTime())) {
      formattedDate = format(dateObj, "MMMM dd, yyyy");
    }
  }

  return (
    <div className="flex flex-col h-full max-w-sm rounded-lg overflow-hidden shadow-lg bg-black text-white">
      {imageUrl && (
        <div className="relative h-70 w-full flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-md"
            loading="lazy"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 space-y-4 mt-2 p-2 ">
        <HeadingText
          text={title}
          fontWeight="bold"
          className="text-[24px] leading-tight"
        />

        <div>
          <p
            className="text-[18px] text-gray-300 line-clamp-3 flex-1"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className=" w-full items-center justify-between mt-4 text-xs text-gray-400">
            <span>{"By Ather name" + "-" + formattedDate}</span>
            <div className="mt-6">
              <LinkButton textColor={"white"}  text={"Continue Reading"} url={"buttonUrl"} />
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default BlogCard;