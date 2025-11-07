import { MetadataRoute } from 'next'
import { serviceData } from '@/lib/data/serviceData';
import { verticalData } from '@/lib/data/verticalData';
import { industryData } from '@/lib/data/industryData';
import { solutionData } from '@/lib/data/solutionData';

// Function to fetch blog posts
async function getBlogPosts() {
  try {
    const res = await fetch('https://itcart.ai/api/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetBlogPostsForSitemap {
            posts {
              nodes {
                slug
                modified
              }
            }
          }
        `,
      }),
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    const { data } = await res.json();
    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    return [];
  }
}

// Function to fetch employee profiles
// async function getEmployeeProfiles() {
//   try {
//     const res = await fetch('https://employee365-aqese4eecvfbdxd8.westus2-01.azurewebsites.net/api/employee');
//     if (!res.ok) throw new Error('Failed to fetch employees');
//     const data = await res.json();
//     return Array.isArray(data) ? data : [];
//   } catch (error) {
//     console.error('Error fetching employee profiles for sitemap:', error);
//     return [];
//   }
// }



// Get verticals from local data
function getVerticals() {
  try {
    return verticalData.map(vertical => ({
      id: vertical.title.toLowerCase().replace(/\s+/g, '-'),
      slug: vertical.compenyName.split('/').pop()?.toLowerCase(),
      updatedAt: new Date().toISOString()
    }));
  } catch (error) {
    console.error('Error getting verticals for sitemap:', error);
    return [];
  }
}

// Get solutions from local data
function getSolutions() {
  try {
    return solutionData.map(solution => {

      const slug = solution.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

      return {
        id: slug,
        title: solution.title,
        slug: slug.toLowerCase(),
        updatedAt: new Date().toISOString()
      };
    });
  } catch (error) {
    console.error('Error getting solutions for sitemap:', error);
    return [];
  }
}

// Get industries from local data
function getIndustries() {
  try {
    return industryData.map(industry => {

      const slug = industry.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

      return {
        id: slug,
        title: industry.title,
        slug: slug,
        updatedAt: new Date().toISOString()
      };
    });
  } catch (error) {
    console.error('Error getting industries for sitemap:', error);
    return [];
  }
}

// Get services from local data
function getServices() {
  try {
    return serviceData.map(service => {

      const slug = service.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

      return {
        id: slug,
        title: service.title,
        slug: slug.toLowerCase(),
        updatedAt: new Date().toISOString()
      };
    });
  } catch (error) {
    console.error('Error getting services for sitemap:', error);
    return [];
  }
}


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://itcart.ai';

  // Static routes
  const routes = [
    '',
    'about-us',
    'blogs',
    'careers',
    'case-study',
    'consultnow',
    'contact-us',
    'csr',
    // 'employee',
    'industry',
    'mediapage',
    'our-verticals',
    'ourpatners',
    'privacy-policy',
    'services',
    'solutions',
    'terms-and-conditions',
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog post routes
  const blogPosts = await getBlogPosts();
  const blogRoutes = blogPosts.map((post: { slug: string; modified: string }) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.modified).toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic employee profile routes
  // const employees = await getEmployeeProfiles();
  // const employeeRoutes = employees.map((employee: { id: string; updatedAt?: string }) => ({
  //   url: `${baseUrl}/employee/${employee.id}`,
  //   lastModified: employee.updatedAt ? new Date(employee.updatedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }));

  // Dynamic service routes
  const services = await getServices();
  const serviceRoutes = services.map((service: { id: string; slug?: string; updatedAt?: string }) => ({
    url: `${baseUrl}/services/${service.slug || service.id}`,
    lastModified: service.updatedAt ? new Date(service.updatedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic vertical routes
  const verticals = await getVerticals();
  const verticalRoutes = verticals.map((vertical: { id: string; slug?: string; updatedAt?: string }) => ({
    url: `${baseUrl}/our-verticals/${vertical.slug || vertical.id}`,
    lastModified: vertical.updatedAt ? new Date(vertical.updatedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic industry routes
  const industries = await getIndustries();
  const industryRoutes = industries.map((industry: { id: string; slug?: string; updatedAt?: string }) => ({
    url: `${baseUrl}/industry/${industry.slug || industry.id}`,
    lastModified: industry.updatedAt ? new Date(industry.updatedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic solution routes
  const solutions = await getSolutions();
  const solutionRoutes = solutions.map((solution: { id: string; slug?: string; updatedAt?: string }) => ({
    url: `${baseUrl}/solutions/${solution.slug || solution.id}`,
    lastModified: solution.updatedAt ? new Date(solution.updatedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    ...routes,
    ...blogRoutes,
    // ...employeeRoutes,
    ...serviceRoutes,
    ...verticalRoutes,
    ...industryRoutes,
    ...solutionRoutes,
  ];
}
