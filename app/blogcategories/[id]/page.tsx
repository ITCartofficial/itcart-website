"use client";
import Blogcategories from "@/components/blogcategories/blogcategories";
import BlogsHero from "@/components/blogs2/BlogsHero";
import { usePathname } from "next/navigation";
import { useState } from "react";

const blogcategories = () => {

    const pathName = usePathname()

    const type = pathName.split('/')[2]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    const [categoryName, setCategoryName] = useState<string | undefined>();

    return (
        <section className="w-full bg-black text-white pt-32 pb-20 md:px-4 border-b-2 border-[#525252] space-y-15 lg:space-y-25">

            <div className="pb-20">
                <BlogsHero
                    title={categoryName ?? ""}

                    description="Explore our IT blog hub for cutting-edge insights, expert advice, and industry updates. Stay informed on the latest tech trends with our comprehensive collection of informative and engaging blog posts."
                    breadcrumbItems={[
                        { label: "Home", url: "/" },
                        { label: "Blogs", url: "/blogs" },
                        { label: "type", url: `/blogcategories/${"slug"}` }
                    ]}
                    reduceTitle={true}
                    className="pb-20 w-[80%]"
                />
            </div>
            <Blogcategories className='container' setCategoryName={setCategoryName} />
        </section>
    )

}
export default blogcategories;