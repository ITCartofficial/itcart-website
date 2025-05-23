import React from 'react'
import VideoHeroBanner from '../organisms/sections/home/VideoHeroBanner'
import FaqSection from '../organisms/sections/home/FaqSection';
import { faqsData } from '../../lib/data/faqsData';
import ClientsSection from '../organisms/sections/home/ClientsSection';
import AboutInfoSection from '../organisms/sections/home/AboutInfoSection';
import TestimonialSection from '../organisms/sections/home/TestimonialSection';
import HorizontalSliderSection from '../organisms/sections/home/HorizontalSliderSection';

import { keyVerticalsData, testimonialsData, aboutBrief, logos, homeBannerData, missionContent, posts, caseStudies } from '@/lib/data/homePageData';
import ContentfulSection from '../organisms/sections/home/ContentfulSection';
import TextRevealSection from '../organisms/sections/home/TextRevealSection';
import AwardsSection from '../organisms/sections/home/AwardsSection';
import BusinessTransformSection from '../organisms/sections/home/BusinessTransformSection';
import HomeFaqSection from '../organisms/sections/home/HomeFaqSection';
import CaseStudySection from '../organisms/sections/home/CaseStudySection';
import BlogsFeatureSection from '../organisms/sections/home/BlogsFeatureSection';


const { videoSrc, poster, heading, description, buttonText } = homeBannerData

const HomeTemplate = () => {
  return (
    <div className='flex flex-col h-full bg-black'>
      <VideoHeroBanner className='h-full lg:pb-20' heading={heading} description={description} buttonText={buttonText} videoSrc={videoSrc} poster={poster} />
      <div className="bg-black py-16">
        <ClientsSection title='Trusted by these amazing companies' logos={logos} />
      </div>
      <div className="bg-black py-16 container mx-auto lg:px-10">
        <AboutInfoSection title='About Us – Creating Impact with a Clear Vision' cardDetails={aboutBrief} />
      </div>
      <div className="bg-black py-16">
        <FaqSection faqsData={faqsData} faqsCount={4} title="Our AI-powered Solutions for Intelligent Automation" />
      </div>
      <div className="bg-white py-16 lg:rounded-tl-[85px] lg:rounded-tr-[85px]">
        <HorizontalSliderSection
          text='Driving Innovation Across Our Key Verticals'
          cardLists={keyVerticalsData.map(card => ({
            ...card, logoBg: card.logoBg === 'dark' ? 'dark' : 'light'
          }))}
        />
      </div>
      <div className="bg-white py-16">
        <TextRevealSection />
      </div>
      <div className="bg-white">
        <ContentfulSection bgImage={missionContent.bgImage} description={missionContent.description} title={missionContent.title} />
      </div>
      <div className="bg-white py-16">
        <CaseStudySection caseStudies={caseStudies} />
      </div>
      <div className="bg-white py-16">
        <TestimonialSection testimonialsData={testimonialsData} />
      </div>
      <div className="bg-white pt-16">
        <BlogsFeatureSection posts={posts} />
      </div>
      <div className="bg-black py-16">
        <AwardsSection />
      </div>
      <div className="bg-black ">
        <BusinessTransformSection />
      </div>
      <div className="bg-[#131313] py-10 border-b-2 border-b-zinc-600">
        <HomeFaqSection faqs={homeFAQs} />
      </div>

    </div>
  )
}

export default HomeTemplate