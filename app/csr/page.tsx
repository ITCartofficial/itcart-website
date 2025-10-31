import BetterFutureSection from "@/components/Csr/BetterFutureSection"
import ShappingSection from "@/components/Csr/ShappingSection"
// import HeroBanner from "@/components/HeroBanner"
// import TestimonialSection from "../(features)/home/TestimonialSection"
// import { testimonialsData } from "@/lib/data/homePageData"
import SectionTeam from "@/components/Csr/SectionTeam"
import JoinSection from "@/components/Csr/JoinSection"
import HomeFaqSection from "../(features)/home/HomeFaqSection";
import VerticalHeroBanner from '@/components/verticalDetailPage/VerticalHeroBanner'


function Csr() {

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
        <>
            <div className='bg-black space-y-15 lg:space-y-25'>
            
                <VerticalHeroBanner
                    title="Technology transforms lives."
                    description="At iTCart, innovation is our responsibility. Through focused CSR initiatives in healthcare, education, sustainability, and community empowerment, we use technology as a force for good."
                    // ctaText="Book a Free Session Now"
                    ctaUrl="/contact"
                    breadcrumbItems={[
                        { label: 'Home', url: '/' },
                        { label: 'Our CSR', url: '/' }
                    ]}
                    backgroundImage="/images/csr/banner-image.jpg"
                    // isCunsultNow={true}
                    contentClass="lg:items-center lg:text-center"
                />

                <div className='bg-black container mx-auto lg:px-10'>
                    <BetterFutureSection />
                </div>

                <div className='bg-black container mx-auto lg:px-10'>
                    <ShappingSection />
                </div>

                {/* <div className="bg-black">
                    <TestimonialSection bgColor={"dark"} testimonialsData={testimonialsData} />
                </div> */}

                <div className="bg-black">
                    <SectionTeam
                        removeBorder={false}
                        heading="Witness Our Commitment To Change"
                        discription="Explore moments from our CSR initiatives, showcasing our commitment to education, healthcare, sustainability and community development through impactful efforts."
                    />
                </div>

                <div className="bg-black ">
                    <JoinSection className="" />
                </div>

            </div>

            <div className="bg-[#131313] border-b-2 border-b-zinc-600 mt-15 md:mt-10">
                <HomeFaqSection faqs={homeFAQs} />
            </div>

        </>
    )
}
export default Csr