import React from 'react'
import VideoHeroBanner from '../organisms/sections/VideoHeroBanner'
import FaqSection from '../organisms/sections/FaqSection';
import { faqsData } from '../data/faqsData';
import ClientsSection from '../organisms/sections/ClientsSection';
import AboutInfoSection from '../organisms/sections/AboutInfoSection';
import { ImageInfoCardProps } from '@/types/PropsTypes';
import HeroSection from '../organisms/sections/HeroSection';
import TextRevealSection from '../organisms/sections/TextRevealSection';
import AwardsSection from '../organisms/sections/AwardsSection';
import HomeFaqSection from '../organisms/sections/HomeFaqSection';


const homeBannerData = {
  videoSrc: '/videos/home-banner.mp4',
  poster: '/images/home-banner.jpg',
  heading: "The world's first native operating system",
  description: "Experience unmatched efficiency, innovation, and business agility with a multi-functional AI-powered platform.",
  buttonText: "Get Started"
};

const logos = [
  "/logos/pif.png",
  "/logos/acec.png",
  "/logos/healthai.png",
  "/logos/rbs.png",
  "/logos/alghurair.png",
  "/logos/boston.png",
  "/logos/osborn.png",
  "/logos/iisc.png",
  "/logos/pif.png",
  "/logos/acec.png",
  "/logos/healthai.png",
  "/logos/rbs.png",
  "/logos/alghurair.png",
  "/logos/boston.png",
  "/logos/osborn.png",
  "/logos/iisc.png",
];

const aboutBrief: ImageInfoCardProps[] = [
  {
    bgImage: "/images/about-card-1.jpg",
    title: "Our Mission & Vision",
    description: "iTCart is a global AI automation company offering secure AI tools and enterprise IT solutions to accelerate digital transformation.",
  },
  {
    bgImage: "/images/about-card-2.jpg",
    title: "Patent-Pending AI Framework",
    description: "AiXHub is a patent-pending AI orchestration framework that unifies governance, automation, and human oversight to help enterprises build secure, scalable, and responsible AI systems.",
  }
]

const { videoSrc, poster, heading, description, buttonText } = homeBannerData


const HomeTemplate = () => {
  return (
    <div className='flex flex-col h-full bg-black'>
      <VideoHeroBanner className='h-full lg:pb-20' heading={heading} description={description} buttonText={buttonText} videoSrc={videoSrc} poster={poster} />
      <ClientsSection title='Trusted by these amazing companies' logos={logos} />
      <AboutInfoSection title='About Us - Creating Impact with a Clear Vision' cardDetails={aboutBrief} />
      <FaqSection faqsData={faqsData} faqsCount={4} title="Our AI-powered Solutions for Intelligent Automation" />
      <TextRevealSection/>
      <AwardsSection/>
      <HeroSection />
      <HomeFaqSection/>
    </div>
  )
}

export default HomeTemplate