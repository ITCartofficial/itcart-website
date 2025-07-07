"use client";

import { useEffect, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import "../singlePost.css"; // Ensure this path is correct based on your project structure
import Image from "next/image";
import { GET_POST_BY_SLUG } from "@/lib/wp/queries";
import client from "@/lib/wp/graphqlClient";
// import { Post } from '@/types/wordpress';

interface PageProps {
  params: { slug: string | string[] };
}

interface Post {
  title: string;
  content: string;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
    };
  };
  // Add other fields as needed
}

export default function DynamicPage({ params }: PageProps) {
  const router = useRouter();
  const slugParam = params.slug;
  const slugSegments = Array.isArray(slugParam)
    ? slugParam
    : slugParam
    ? [slugParam]
    : [];
  const slugPath = slugSegments.join("/");

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const { data } = await client.query({
          query: GET_POST_BY_SLUG,
          variables: { slug: slugPath },
        });
        if (data?.post) {
          setPost(data.post);
        } else {
          notFound(); // Or handle as you prefer
        }
      } catch (err: unknown) {
        notFound(); // Or handle as you prefer
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slugPath, router]);

  if (loading) return <div>Loading...</div>;

  if (!post) return null;

  return (
    <article id="singlePostContainer">
      <h1>{post.title}</h1>
      {post.featuredImage?.node?.sourceUrl && (
        <Image
          src={post.featuredImage.node.sourceUrl}
          alt={post.title || ""}
          width={500}
          height={300}
          className="w-full h-[300px] object-cover mb-4"
        />
      )}
      <div
        id="postContent"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}