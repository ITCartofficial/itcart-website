"use client";
import { usePathname } from "next/navigation";
import HomeFaqSection from "@/app/(features)/home/HomeFaqSection";
import BlogContents from "@/components/BlogDetailPage/BlogContent";
import SectionBanner from "@/components/BlogDetailPage/SectionBanner";
import { newBlogData } from "@/lib/data/newBlogData";

const SingleBlogPage = () => {


  const pathName = usePathname()

  const convertToSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const filterdData = newBlogData.find((blog) => pathName.split('/')[2] === convertToSlug(blog?.bannerTitle));

  console.log("filterdData:", filterdData);



  if (!filterdData || !filterdData.contents) {
    return <div className="text-white">Blog post not found</div>;
  }

  return (
    <html lang="en">

      <head>
        <title>{filterdData?.metaTitle ?? ""}</title>
        <meta name="description" content={filterdData?.metdescription ?? ""} />
        <meta property="og:title" content={filterdData?.metaTitle} />
        <meta property="og:description" content={filterdData?.metdescription ?? ""} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://itcart.ai/blogs/${pathName}`} />
        <link rel="canonical" href={`https://itcart.ai/blogs/${pathName}`}></link>
      </head>

      <>
        <div className="mt-20 md:mt-30  space-y-20 mb-10 ">

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
      </>

    </html>

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
