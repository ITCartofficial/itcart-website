// "use client";
// import { useSearchParams } from "next/navigation";
// import HomeFaqSection from "@/app/(features)/home/HomeFaqSection";
// import BlogContents from "@/components/BlogDetailPage/BlogContent";
// import SectionBanner from "@/components/BlogDetailPage/SectionBanner";
// import { newBlogData } from "@/lib/data/newBlogData";

// const SingleBlogPage = () => {

//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");



//   const filterdData = newBlogData.find((blog) => blog.id?.toString() === id);

//   // const filterdData =fData; 

//   // console.log("fData", fData);


//   if (!filterdData) {
//     return <div>Blog post not found</div>;
//   }

//   return (
//     <div className="mt-10 md:mt-30  space-y-20 mb-10">

//       <SectionBanner filterdData={filterdData} />

//       <BlogContents filterdData={filterdData} />

//       {
//         filterdData?.FAQsHeading &&
//         <div className="bg-[#131313] border-b-2 border-b-zinc-600 -10">
//           <HomeFaqSection
//             FAQsHeading={filterdData?.FAQsHeading}
//             faqs={filterdData?.FAQs ?? []} />
//         </div>
//       }

//     </div>
//   )
// }
// export default SingleBlogPage;



























import client from "@/lib/wp/graphqlClient";
import { GET_POST_BY_SLUG } from "@/lib/wp/queries";
import Image from "next/image";
import '@/app/blogs/singlePost.css'; // Import your CSS file for styling

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const param = slug;

  try {
    // Simulate fetching blog data based on the slug
    const { data } = await client.query({
      query: GET_POST_BY_SLUG,
      variables: { slug: param },
    });

    console.log("ONEEEEEEEEEEEEEEEE", data?.post?.content);


    return (
      <article id="singlePostContainer">
        <h1 style={{ color: "#ffff" }}>{data?.post?.title}</h1>
        {data.post.featuredImage?.node?.sourceUrl && (
          <Image
            src={data?.post?.featuredImage?.node?.sourceUrl}
            alt={data?.post?.featuredImage?.node?.altText || ""}
            width={500}
            height={300}
            className="w-full h-[300px] object-cover mb-4"
          />
        )}
        <div
          id="postContent"
          style={{ color: "#ffff" }}
          dangerouslySetInnerHTML={{ __html: data?.post?.content }}
        />
      </article>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return <div>Error fetching blog data</div>;
  }
}