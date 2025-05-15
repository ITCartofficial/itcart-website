import React from 'react'
import VideoHeroBanner from '../organisms/sections/VideoHeroBanner'
import FaqSection from '../organisms/sections/FaqSection';
import { faqsData } from '../data/faqsData';
import ClientsSection from '../organisms/sections/ClientsSection';
import AboutInfoSection from '../organisms/sections/AboutInfoSection';
import TestimonialSection from '../organisms/sections/TestimonialSection';
import HorizontalSliderSection from '../organisms/sections/HorizontalSliderSection';

import { keyVerticalsData, testimonialsData, aboutBrief, logos, homeBannerData, missionContent } from '../data/homePageData';
import ContentfulSection from '../organisms/sections/ContentfulSection';

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
      <div className="bg-white py-16 lg:rounded-tl-[85px] lg:rounded-tr-[85px]">
        <HorizontalSliderSection text='Driving Innovation Across Our Key Verticals' cardLists={keyVerticalsData} />
      </div>
      <div className="bg-black py-16">
        <FaqSection faqsData={faqsData} faqsCount={4} title="Our AI-powered Solutions for Intelligent Automation" />
      </div>
      <div className="bg-white py-16">
        <TestimonialSection testimonialsData={testimonialsData} />
      </div>
      <div className="bg-white">
        <ContentfulSection bgImage={missionContent.bgImage} description={missionContent.description} title={missionContent.title} />
      </div>
    </div>
  )
}

export default HomeTemplate