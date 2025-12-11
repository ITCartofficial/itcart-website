
"use client"
import { industryData } from "@/lib/data/industryData";
import ServiceCard from "../cards/ServiceCard";
import { newBlogData } from "@/lib/data/newBlogData";
import { usePathname } from "next/navigation";
import BlogCard from "./BlogCard";


interface IndustryGridProps {
    className?: string;
}

const Blogcategories: React.FC<IndustryGridProps> = ({ className = "" }) => {

    const convertToSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    };

    function slugToText(slug: string) {
        return slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    }

    const pathName = usePathname().split('/')[2]
    const filteredData = newBlogData?.filter(
        (blog) => blog.type.toLowerCase() === slugToText(pathName).toLowerCase()
    );

    return (
        <section className={`w-full flex pb-16 bg-black container ${className}`}>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredData.map((data, index) => (
                    <BlogCard
                        key={`${data.bannerTitle}-${index}`}
                        title={data.bannerTitle}
                        id={data?.id}
                        // title={data.bannerTitle}
                        description={data.bannerDiscription}
                        // linkUrl={`/blogs/${convertToSlug(data?.bannerTitle)}?id=${data?.id}`}
                        linkUrl={``}
                        imageSrc={data.image}
                        imageAlt={`${data.bannerTitle} illustration`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Blogcategories;
