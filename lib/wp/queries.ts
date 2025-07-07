import { gql } from "@apollo/client";

export const GET_POST_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      slug
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query PageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      slug
    }
  }
`;

export const GET_ALL_POST_SLUGS = gql`
  query AllPostSlugs {
    posts(first: 10) {
      nodes {
        slug
        id
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_PAGE_SLUGS = gql`
  query AllPageSlugs {
    pages(first: 100) {
      nodes {
        slug
      }
    }
  }
`;
