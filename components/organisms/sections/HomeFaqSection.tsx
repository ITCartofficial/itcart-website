import React from 'react';
import { AccordionItem } from '@/components/atoms/common/Accordion';
import Faq from '@/components/molecules/common/Faq';


const sampleFAQs: AccordionItem[] = [
  {
    id: '1',
    title: 'What are the services of iTCart?',
    content: 'Our services revolve around digital transformation and AI automation. Starting from technology integration to managing data analytics, we cater to each vertical in the AI landscape.'
  },
  {
    id: '2',
    title: 'What is the Unique Selling Proposition of iTCart?',
    content: 'Our USP is to deliver personalized AI-powered solutions that help businesses leverage AI and automation needs.'
  },
  {
    id: '3',
    title: 'What are the industries where iTCart serves?',
    content: 'iTCart offers services in various industries, including banking, real estate, healthcare, cybersecurity, and more.'
  },
  {
    id: '4',
    title: 'What makes iTCart the best AI automation company in the US?',
    content: 'iTCart’s commitment to innovation, customer-centric solutions, and robust data privacy is the quality that sets the company apart. The company’s AI automation tools streamline processes, reduce operational costs, and drive smarter decision-making.'
  },
  {
    id: '5',
    title: 'How can iTCart help my company implement AI automation?',
    content: 'iTCart helps your company implement AI automation by offering end-to-end solutions that streamline workflows, reduce operational costs, and minimize human error. Their AI automation services include automating repetitive tasks and document management, as well as deploying chatbots and predictive analytics.'
  }
];

const HomeFaqSection: React.FC = () => {
  return (
    <div className='h-full'>
      <Faq
        mainTitle="Everything"
        subtitle="you need to know about"
        faqs={sampleFAQs}
        titleColor="white"
        subtitleColor="#8FD7DA"
        accentColor="#8FD7DA"
        backgroundColor="#131313"
      />
    </div>
  );
};

export default HomeFaqSection;