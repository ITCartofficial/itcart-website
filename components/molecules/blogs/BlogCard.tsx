import React from "react";
import Image from "next/image";
import HeadingText from "@/components/atoms/typography/HeadingText";
// import BodyText from "@/components/atoms/typography/BodyText";
import LinkButton from "@/components/atoms/buttons/LinkButton";
import { format } from "date-fns";
// import { enUS } from "date-fns/locale";

interface BlogCardProps {
  imageUrl: string;
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
  linkUrl = "#",
}) => {

  let formattedDate = 'Unknown date';
  if (date) {
    const dateObj = new Date(date);
    if (!isNaN(dateObj.getTime())) {
      formattedDate = format(dateObj, 'MMMM dd, yyyy');
    }
  }
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-black text-white">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      <div className="space-y-3 pt-6">
        <HeadingText
          text={title}
          fontWeight="bold"
          className="text-xl leading-tight"
        />

        <p className="text-sm text-gray-300 line-clamp-3" dangerouslySetInnerHTML={{ __html: description }} />

        <div className="flex items-center pt-3 text-xs text-gray-400">
          {/* <span>by {author}</span> */}
          <span className="mx-2">•</span>
          <span>{formattedDate}</span>
        </div>

        <LinkButton text="Continue Reading" url={linkUrl} className="pt-2" />
      </div>
    </div>
  );
};

export default BlogCard;
