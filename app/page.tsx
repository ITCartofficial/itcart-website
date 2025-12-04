'use client';
import { useEffect, useState } from "react";
import VideoHeroBanner from "./(features)/home/VideoHeroBanner";
import { homeFAQs } from "../lib/data/faqsData";
import ClientsSection from "./(features)/home/ClientsSection";
import AboutInfoSection from "./(features)/home/AboutInfoSection";
import HorizontalSliderSection from "./(features)/home/HorizontalSliderSection";
import { keyVerticalsData, aboutBrief, logos, homeBannerData, missionContent, } from "@/lib/data/homePageData";
import ContentfulSection from "./(features)/home/ContentfulSection";
import TextRevealSection from "./(features)/home/TextRevealSection";
import AwardsSection from "./(features)/home/AwardsSection";
import BusinessTransformSection from "./(features)/home/BusinessTransformSection";
import HomeFaqSection from "./(features)/home/HomeFaqSection";
import CaseStudySection from "./(features)/home/CaseStudySection";
import BlogsFeatureSection from "./(features)/home/BlogsFeatureSection";
import PatentPendingSection from "./(features)/home/PatentPendingSection";
import { Post } from "@/types/wordpress";
import { notFound } from "next/navigation";
import client from "@/lib/wp/graphqlClient";
import { GET_ALL_POST_SLUGS } from "@/lib/wp/queries";
import { caseStudyData } from '@/lib/data/caseStudyData';
import AiSection from "./(features)/home/AiSection";

const { videoSrc, poster, heading, description, buttonText } = homeBannerData;

const HomeTemplate = () => {

  const getBlogs = async () => {
    try {
      const { data } = await client.query({
        query: GET_ALL_POST_SLUGS,
      });
      return data.posts.nodes;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  };

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getBlogs();
      if (fetchedPosts.length === 0) {
        notFound();
      } else {
        setPosts(fetchedPosts);
      }
    };
    fetchPosts();
  }, []);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }


  return (

    <html lang="en">
      <head>
        <title>Best AI Automation Services & IT Solutions for Enterprises</title>
        <meta name="description" content="Scale faster with AI automation, RPA services, IT solutions, intelligent process automation, cloud migration, AI consulting, software development & managed IT services globally" />
        <meta property="og:url" content={`https://itcart.ai`} />
        <link rel="canonical" href="https://itcart.ai"></link>
      </head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{  
          __html: JSON.stringify(

            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "iTCart",
              "legalName": "iTCart Technologies",
              "url": "https://itcart.ai",
              "logo": "https://itcart.ai/assets/logo.png",
              "description": "iTCart is a global AI-driven technology company delivering next-generation digital transformation through intelligent platforms, enterprise automation, cloud modernization, and industry-specific AI solutions built on the AiX Framework.",

              "foundingDate": "2021",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Mr. Rohim Uddin",
                  "jobTitle": "Founder"
                }
              ],

              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "email": "support@itcart.ai",
                  "availableLanguage": ["English"],
                  "areaServed": "Worldwide"
                }
              ],

              "sameAs": [
                "https://www.linkedin.com/company/itcart",
                "https://twitter.com/itcart_ai",
                "https://www.instagram.com/itcart.ai"
              ],

              "knowsAbout": [
                "Artificial Intelligence",
                "Generative AI",
                "Machine Learning",
                "Cloud Computing",
                "Data Engineering",
                "Enterprise Automation",
                "AI Consulting",
                "Digital Transformation",
                "ERP Modernization",
                "Analytics & BI",
                "Edge Computing",
                "IoT Solutions",
                "Industry Cloud Platforms"
              ],

              "service": [
                {
                  "@type": "Service",
                  "name": "AI & Automation",
                  "description": "GenAI copilots, workflows, automation, and enterprise AI platforms."
                },
                {
                  "@type": "Service",
                  "name": "Cloud & Infrastructure",
                  "description": "Cloud migration, DevOps, data modernization, and scalable architectures."
                },
                {
                  "@type": "Service",
                  "name": "Data & Analytics",
                  "description": "Data engineering, big data pipelines, BI dashboards, and predictive analytics."
                },
                {
                  "@type": "Service",
                  "name": "Application Development",
                  "description": "Custom software, mobile apps, enterprise systems, and API integrations."
                },
                {
                  "@type": "Service",
                  "name": "Cybersecurity",
                  "description": "Threat monitoring, SOC, identity management, and compliance solutions."
                }
              ],

              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AiX Industry Cloud Platforms",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "AiXBFS",
                    "description": "Financial services AI platform for banks, NBFCs, and fintechs."
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "AiXHealthcare",
                    "description": "AI-native EHR, diagnostics insights, patient experience, and automation."
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "AiXManufacturing",
                    "description": "Smart factory platform with predictive maintenance and production analytics."
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "AiXRealty",
                    "description": "AI platform for real estate, construction intelligence, and project automation."
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "AiXQP",
                    "description": "AI education platform offering personalized learning paths and certification."
                  }
                ]
              }
            }

          ),
        }}
      />



      <div className="flex flex-col h-full bg-black">
        <VideoHeroBanner
          className="h-full mt-20"
          heading={heading}
          description={description}
          buttonText={buttonText}
          videoSrc={videoSrc}
          poster={poster}
          gradiuntClass="text-[30px] lg:text-[64px] w-[90%]"

        />
        <div className="bg-black md:py-16">
          <ClientsSection
            title="Trusted by these amazing companies"
            logos={logos}
          />
        </div>
        <div className="bg-black py-10 md:py-1 container mx-auto lg:px-10">
          <AboutInfoSection
            title="Creating Impact with a Clear Vision"
            cardDetails={aboutBrief}
          />
        </div>

        <div className="bg-black container mx-auto  lg:px-10">
          <AiSection
            title="Our AI-native Solutions for Intelligent Automation"
            cardDetails={aboutBrief}
          />
        </div>

        <div className="bg-black px-4 md:px-0">
          <PatentPendingSection />
        </div>

        <div id="products" className="bg-black py-16 pt-20">
          <HorizontalSliderSection
            text="Driving Innovation Across Our Key Verticals"
            cardLists={keyVerticalsData.map((card) => ({
              ...card,
              logoBg: card.logoBg === "dark" ? "dark" : "light",
            }))}
          />
        </div>
        <div className="bg-black pb-16">
          <TextRevealSection />
        </div>
        <div className="bg-black ">
          <ContentfulSection
            bgImage={missionContent.bgImage}
            description={missionContent.description}
            title={"At iTCart, we empower businesses with intelligent automation and data-driven decisions."}
            bgImageMobile={missionContent.bgImageMobile}
          />
        </div>
        {/* lg:!max-w-[1875px] */}
        <div id="case-studies" className="bg-black md:pt-16 md:my-2">
          <CaseStudySection caseStudies={caseStudyData} />
        </div>
        {/* <div className="bg-black py-8">
        <TestimonialSection bgColor={"true"} testimonialsData={testimonialsData} />
      </div> */}
        <div className="bg-black md:mt-4  mt-10">
          <BlogsFeatureSection posts={posts} />
        </div>
        <div className="bg-black py-16">
          <AwardsSection />
        </div>
        <div className="bg-black ">
          <BusinessTransformSection />
        </div>
        <div className="">
          <HomeFaqSection faqs={homeFAQs} />
        </div>
      </div>

    </html>



  );
};

export default HomeTemplate;
