import React from 'react'
import VideoHeroBanner from '../organisms/sections/VideoHeroBanner'
import FaqSection from '../organisms/sections/FaqSection';
import { faqsData } from '../data/faqsData';
import ClientsSection from '../organisms/sections/ClientsSection';
import AboutInfoSection from '../organisms/sections/AboutInfoSection';
import { ImageInfoCardProps } from '@/types/PropsTypes';
import TestimonialSection from '../organisms/sections/TestimonialSection';

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

const testimonialsData = [
  {
    rating: 4.9,
    userName: "Ava Thompson",
    userDesignation: "Product Manager at NovaTech",
    userImage: "https://randomuser.me/api/portraits/women/65.jpg",
    testimonialMessage:
      "AIX Hub has completely transformed how our team collaborates. The intuitive interface and powerful features have boosted our productivity like never before.",
  },
  {
    rating: 4.7,
    userName: "Liam Patel",
    userDesignation: "CTO at ByteForge",
    userImage: "https://randomuser.me/api/portraits/men/22.jpg",
    testimonialMessage:
      "The platform is incredibly powerful and easy to use. We were able to onboard quickly and saw immediate improvements in our workflow.",
  },
  {
    rating: 4.5,
    userName: "Sophia Lin",
    userDesignation: "UX Designer at PixelCore",
    userImage: "https://randomuser.me/api/portraits/women/34.jpg",
    testimonialMessage:
      "AIX Hub is sleek, efficient, and exactly what we needed to streamline our design processes. Kudos to the team!",
  },
  {
    rating: 4.8,
    userName: "Noah Smith",
    userDesignation: "Marketing Lead at GrowthLoop",
    userImage: "https://randomuser.me/api/portraits/men/17.jpg",
    testimonialMessage:
      "We’ve seen a 40% increase in engagement since switching to AIX Hub. It’s truly a game-changer for marketing automation.",
  },
  {
    rating: 4.6,
    userName: "Isabella Garcia",
    userDesignation: "HR Manager at TalentHive",
    userImage: "https://randomuser.me/api/portraits/women/41.jpg",
    testimonialMessage:
      "Managing internal communication has never been this smooth. AIX Hub brings clarity and efficiency to our daily operations.",
  },
  {
    rating: 4.9,
    userName: "James Rodriguez",
    userDesignation: "Software Engineer at DevNest",
    userImage: "https://randomuser.me/api/portraits/men/38.jpg",
    testimonialMessage:
      "The performance and reliability of AIX Hub are outstanding. I use it daily and can’t imagine going back to our old tools.",
  },
  {
    rating: 4.4,
    userName: "Emily Nguyen",
    userDesignation: "Operations Lead at SyncWave",
    userImage: "https://randomuser.me/api/portraits/women/52.jpg",
    testimonialMessage:
      "Our entire operations team relies on AIX Hub now. It simplifies complex tasks and offers great analytics.",
  },
  {
    rating: 4.7,
    userName: "Benjamin Lee",
    userDesignation: "Founder of StartupSpree",
    userImage: "https://randomuser.me/api/portraits/men/56.jpg",
    testimonialMessage:
      "It’s rare to find a product that’s both powerful and beautifully designed. AIX Hub nails both!",
  },
  {
    rating: 5.0,
    userName: "Olivia Martin",
    userDesignation: "Customer Success Manager at Cloudify",
    userImage: "https://randomuser.me/api/portraits/women/27.jpg",
    testimonialMessage:
      "Exceptional support, fantastic features, and a clean interface—AIX Hub has everything we need.",
  },
  {
    rating: 4.6,
    userName: "Ethan Walker",
    userDesignation: "Analyst at FinScope",
    userImage: "https://randomuser.me/api/portraits/men/45.jpg",
    testimonialMessage:
      "From dashboards to real-time insights, AIX Hub delivers exactly what we need to stay ahead in the game.",
  },
];


const HomeTemplate = () => {
  return (
    <div className='flex flex-col gap-14 h-full bg-black'>
      <VideoHeroBanner className='h-full lg:pb-20' heading={heading} description={description} buttonText={buttonText} videoSrc={videoSrc} poster={poster} />
      <ClientsSection title='Trusted by these amazing companies' logos={logos} />
      <AboutInfoSection title='About Us – Creating Impact with a Clear Vision' cardDetails={aboutBrief} />
      <FaqSection faqsData={faqsData} faqsCount={4} title="Our AI-powered Solutions for Intelligent Automation" />
      <div className="my-8">
        <TestimonialSection testimonialsData={testimonialsData}  />
      </div>
    </div>
  )
}

export default HomeTemplate