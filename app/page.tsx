'use client';

import { useEffect, useState } from "react";
import VideoHeroBanner from "./(features)/home/VideoHeroBanner";
// import FaqSection from '../organisms/sections/home/FaqSection';
import { homeFAQs } from "../lib/data/faqsData";
import ClientsSection from "./(features)/home/ClientsSection";
import AboutInfoSection from "./(features)/home/AboutInfoSection";
// import TestimonialSection from "./(features)/home/TestimonialSection";
import HorizontalSliderSection from "./(features)/home/HorizontalSliderSection";

import {
  keyVerticalsData,
  // testimonialsData,
  aboutBrief,
  logos,
  homeBannerData,
  missionContent,
} from "@/lib/data/homePageData";
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


  return (

    <html lang="en">
      <head>
        <title></title>
        <meta name="description" content={""} />
        <meta property="og:title" content={""} />
        <meta property="og:description" content={""} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://itcart.ai`} />
      </head>

      <body>
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
              title="Our AI-powered Solutions for Intelligent Automation"
              cardDetails={aboutBrief}
            />
          </div>

          <div className="bg-black px-4 md:px-0">
            <PatentPendingSection />
          </div>

          <div id="our-verticals" className="bg-black py-16 pt-20">
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
      </body>
    </html>



  );
};

export default HomeTemplate;
