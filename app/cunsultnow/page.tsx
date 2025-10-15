import ExecutiveLeadersSection from "@/components/about/ExecutiveLeadersSection"
import EnterPriceGrid from "@/components/CunsultNow/EnterPriceGrid"
import ImplementationStratogy from "@/components/CunsultNow/ImplementationStratogy"
import WhyImplementation from "@/components/CunsultNow/WhyImplementation"
import HeroBanner from "@/components/HeroBanner"
import IndustryGrid from "@/components/IndustryGrid"
import { coreValues, foundingMembers, executiveLeadership, globalStrategists, ambassadorsList, historyData } from '@/lib/data/aboutPageData'
import AwardsSection from "../(features)/home/AwardsSection"
import TestimonialSection from "../(features)/home/TestimonialSection"
import { testimonialsData } from "@/lib/data/homePageData"
import AboutSection from "@/components/CunsultNow/AboutSection"
import ContactFormSection from "@/components/contact/ContactFormSection"
import SectionContact from "@/components/CunsultNow/SectionContact"
import HomeFaqSection from "../(features)/home/HomeFaqSection"


function CunsultNow() {


    const homeFAQs = [
        {
            id: '1',
            title: 'What is AiXHUB?',
            content: "AiXHub is iTCart's proprietary AI-native EOS (Enterprise Operating System), designed to unify data, decision-making, and automation into one adaptive, high-performance ecosystem. Built for speed, scale, and self-learning, AiXHub powers intelligent transformation across industries—turning complexity into clarity, and ideas into real-time impact. ",
        },
        {
            id: '2',
            title: 'What are the services of iTCart?',
            content: 'Our services revolve around digital transformation and AI automation. Starting from technology integration to managing data analytics, we cater to each vertical in the AI landscape.'
        },
        {
            id: '3',
            title: 'What is the Unique Selling Proposition of iTCart?',
            content: 'Our USP is to deliver personalized AI-powered solutions that help businesses leverage AI and automation needs.'
        },
        {
            id: '4',
            title: 'What are the industries where iTCart serves?',
            content: 'iTCart offers services in various industries, including banking, real estate, healthcare, cybersecurity, and more.'
        },
        {
            id: '5',
            title: 'What makes iTCart the best AI automation company in the US?',
            content: "iTCart's commitment to innovation, customer-centric solutions, and robust data privacy is the quality that sets the company apart. The company’s AI automation tools streamline processes, reduce operational costs, and drive smarter decision-making."
        },
        {
            id: '6',
            title: 'How can iTCart help my company implement AI automation?',
            content: 'iTCart helps your company implement AI automation by offering end-to-end solutions that streamline workflows, reduce operational costs, and minimize human error. Their AI automation services include automating repetitive tasks and document management, as well as deploying chatbots and predictive analytics.'
        }
    ];

    return (
        <div className='bg-black'>
            <HeroBanner title="Artificially Intelligent Digital Transformation (AiX)"
                description="World's first AI-native operating system replacing 342 fragmented applications with unified intelligent execution."
                ctaText="Connect with Us"
                ctaUrl="/contact"
                breadcrumbItems={[
                    { label: 'Home', url: '/' },
                    { label: 'Our Industry', url: '/industry' }
                ]}
                backgroundImage="/images/cunsultnow/cunsultnow-banner.png"
                isCunsultNow={true}
            />

            <div className='bg-black py-10 container mx-auto lg:px-10'>
                <WhyImplementation />
            </div>

            <div className='bg-black py-10 container mx-auto lg:px-10'>
                <ImplementationStratogy />
            </div>

            <div className='bg-black py-10 container mx-auto lg:px-10'>
                <EnterPriceGrid />
            </div>

            <div className="bg-black py-8 rounded-bl-[85px] rounded-br-[85px] lg:px-10">
                <ExecutiveLeadersSection
                    execLeaders={executiveLeadership}
                    bgColor="dark"
                />
            </div>

            <div className="bg-black py-16">
                <AwardsSection />
            </div>

            <div className="bg-black py-8">
                <TestimonialSection bgColor={"dark"} testimonialsData={testimonialsData} />
            </div>

            <div className="bg-black py-8">
                <AboutSection />
            </div>

            <div className="bg-black py-8">
                <SectionContact />
            </div>

            <div className="bg-[#131313] py-10 border-b-2 border-b-zinc-600">
                <HomeFaqSection faqs={homeFAQs} />
            </div>

        </div>
    )
}
export default CunsultNow