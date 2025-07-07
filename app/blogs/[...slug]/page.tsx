import { notFound } from 'next/navigation';
import "../singlePost.css";
import Image from 'next/image';
import { GET_POST_BY_SLUG } from '@/lib/wp/queries';
import client from '@/lib/wp/graphqlClient';

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slugPath = params.slug.join('/');

  let postData;
  try {
    const result = await client.query({
      query: GET_POST_BY_SLUG,
      variables: { slug: slugPath },
    });
    postData = result.data;
  } catch (error) {
    console.error('GraphQL query failed:', error);
    notFound();
    return null;
  }

  const post = postData?.post;
  if (post) {
    const imageUrl = post.featuredImage?.node?.sourceUrl || "";
    const imageAlt = post.title || "Post image";

    return (
      <article id='singlePostContainer'>
        <h1>{post.title}</h1>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={500}
            height={300}
            className='w-full h-[300px] object-cover mb-4'
          />
        )}
        <div id='postContent' dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    );
  }

  notFound();
  return null;
}