export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  id: string;
  author?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export interface WordPressResponse {
  posts: {
    nodes: Post[];
  };
  totalCount: number;
}
