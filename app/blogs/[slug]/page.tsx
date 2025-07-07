
import { notFound } from 'next/navigation';
import "../singlePost.css"; // Ensure this path is correct based on your project structure
import Image from 'next/image';
import { GET_POST_BY_SLUG } from '@/lib/wp/queries';
import client from '@/lib/wp/graphqlClient';
// import { Post } from '@/types/wordpress';

interface PageProps {
  params: { slug: string[] };
}

export default async function DynamicPage({ params }: PageProps) {
  const slugPath = params.slug.join('/');

  // If no page, try fetching a post by slug
  const { data: postData }= await client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug: slugPath },
  });

  if (postData.post) {
    console.log('Post Data:', postData.post);
    return (
      <article id='singlePostContainer'>
        <h1>{postData.post.title}</h1>
        <Image
          src={postData.post.featuredImage.node.sourceUrl || ""}
          alt={postData.post.title || ""}
          width={500}
          height={300}
          className='w-full h-[300px] object-cover mb-4'
        />
        <div id='postContent' dangerouslySetInnerHTML={{ __html: postData.post.content }} />
      </article>
    );
  }

  // If neither found, show 404
  notFound();
}