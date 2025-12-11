"use client";
import { usePathname, useSearchParams } from "next/navigation";
import HomeFaqSection from "@/app/(features)/home/HomeFaqSection";
import BlogContents from "@/components/BlogDetailPage/BlogContent";
import SectionBanner from "@/components/BlogDetailPage/SectionBanner";
import { newBlogData } from "@/lib/data/newBlogData";

const SingleBlogPage = () => {

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const pathName = usePathname()

  const convertToSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const filterdData = newBlogData.find((blog) => pathName.split('/')[2] === convertToSlug(blog?.bannerTitle));

  if (!filterdData) {
    return <div className="text-white">Blog post not found</div>;
  }

  return (
    <div className="mt-10 md:mt-30  space-y-20 mb-10">

      <SectionBanner filterdData={filterdData} />

      <BlogContents filterdData={filterdData} />

      {
        filterdData?.FAQsHeading &&
        <div className="bg-[#131313] border-b-2 border-b-zinc-600 -10">
          <HomeFaqSection
            FAQsHeading={filterdData?.FAQsHeading}
            faqs={filterdData?.FAQs ?? []} />
        </div>
      }

    </div>
  )
}
export default SingleBlogPage;
























//     return (
//       <article id="singlePostContainer">
//         <h1 style={{ color: "#ffff" }}>{data?.post?.title}</h1>
//         {data.post.featuredImage?.node?.sourceUrl && (
//           <Image
//             src={data?.post?.featuredImage?.node?.sourceUrl}
//             alt={data?.post?.featuredImage?.node?.altText || ""}
//             width={500}
//             height={300}
//             className="w-full h-[300px] object-cover mb-4"
//           />
//         )}
//         <div
//           id="postContent"
//           style={{ color: "#ffff" }}
//           dangerouslySetInnerHTML={{ __html: data?.post?.content }}
//         />
//       </article>
//     );
//   } catch (error) {
//     console.error("Error fetching blog data:", error);
//     return <div>Error fetching blog data</div>;
//   }
// }
