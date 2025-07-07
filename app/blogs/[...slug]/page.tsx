import { notFound } from 'next/navigation';
import Image from 'next/image';
import { GET_POST_BY_SLUG } from '@/lib/wp/queries';
import client from '@/lib/wp/graphqlClient';

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slugPath = params.slug.join('/');

  const result = await client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug: slugPath },
  });
  const post = result.data?.post;

  if (!post) {
    notFound();
    return null;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      {post.featuredImage?.node?.sourceUrl && (
        <Image
          src={post.featuredImage.node.sourceUrl}
          alt={post.title || ""}
          width={500}
          height={300}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}