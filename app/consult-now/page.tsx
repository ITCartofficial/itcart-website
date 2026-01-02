"use client"
// import ExecutiveLeadersSection from "@/components/about/ExecutiveLeadersSection"
// import EnterPriceGrid from "@/components/CunsultNow/EnterPriceGrid"
import ImplementationStratogy from "@/components/CunsultNow/ImplementationStratogy"
import WhyImplementation from "@/components/CunsultNow/WhyImplementation"
// import HeroBanner from "@/components/HeroBanner"
// import { executiveLeadership } from '@/lib/data/aboutPageData'
// import AwardsSection from "../(features)/home/AwardsSection"
// import TestimonialSection from "../(features)/home/TestimonialSection"
import { logos } from "@/lib/data/homePageData"
import AboutSection from "@/components/CunsultNow/AboutSection"
import SectionContact from "@/components/CunsultNow/SectionContact"
import HomeFaqSection from "../(features)/home/HomeFaqSection"
import ClientsSection from "../(features)/home/ClientsSection"
import VerticalHeroBanner from '@/components/verticalDetailPage/VerticalHeroBanner'
import { useEffect, useState } from "react"
import { cunsultNowSchema } from "@/lib/schema/cunsultNowSchema"



function CunsultNow() {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }


    const homeFAQs = [
        {
            id: '1',
            title: "How does AiXHub™ differ from traditional AI tools we're already using?",
            content: "AiXHub™ is the first AI-native Enterprise Operating System designed to replace fragmented software stacks with unified intelligent execution. Unlike point solutions, AiXHub™ consolidates multiple applications into a single platform with autonomous decision-making capabilities.",
        },
        {
            id: '2',
            title: 'What ROI can we expect from AiXHub™ implementation?',
            content: 'Organizations have reported up to 300% ROI within 12–36 months, with operational cost reductions of 30–50% and efficiency gains up to 85%. Typical payback periods range from 6–12 months. '
        },
        {
            id: '3',
            title: 'How long does AiXHub™ implementation take?',
            content: 'Full transformation follows our UNITE Framework across five phases spanning approximately 36 weeks. Pilot outcomes typically appear in 4–12 weeks; adoption and results vary by organization.'
        },
        {
            id: '4',
            title: 'Is AiXHub™ compliant with industry regulations?',
            content: 'AiXHub includes embedded governance and real-time compliance controls for GDPR, HIPAA, SOC-2, and industry standards, and provides automated audit trails to support regulatory reporting.'
        },
        {
            id: '5',
            title: 'Can AiXHub™ integrate with our existing ERP, CRM, and other systems?',
            content: "Yes — the Cross-System Orchestration Model supports integration across ERP, CRM, HRMS, ITSM, and GRC systems while minimizing custom development and preserving existing infrastructure."
        },
        {
            id: '6',
            title: 'What happens to our current software licenses after AiXHub™ implementation?',
            content: 'Organizations often reduce application count significantly, leading to substantial license savings and lower integration costs; results depend on the existing application landscape and consolidation strategy.'
        }
    ];


    return (
        <html lang="en">
            <head>
                <title>AI Consulting Company | Enterprise AI Transformation – iTCart</title>
                <meta name="description" content="iTCart is a leading artificial intelligence consulting company. We help enterprises integrate, automate, and scale AI transformation. Consult now.  " />
                <meta property="og:url" content={`https://itcart.ai/consult-now`} />
                <link rel="canonical" href="https://itcart.ai/consult-now"></link>
            </head>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(cunsultNowSchema),
                }}
            />

            <>
                <div className='bg-black space-y-15 lg:space-y-25'>

                    <VerticalHeroBanner
                        title={"Artificially Intelligent Digital Transformation (AiX) "}
                        description={"The world’s first AI-native operating system that replaces fragmented application stacks with unified intelligent execution. "}
                        ctaText="Connect with Us"
                        ctaUrl="/contact"
                        breadcrumbItems={[
                            { label: 'Home', url: '/' },
                            { label: 'Consult Now', url: '/services' }
                        ]}
                        backgroundImage="/images/cunsultnow/cunsultnow-banner.jpg"
                        contentClass="lg:items-center lg:text-center"
                        backgroundPosition="center 10px"
                    // backgroundPosition: "center 20px",
                    />

                    <div className='bg-black container mx-auto lg:px-10'>
                        <WhyImplementation />
                    </div>

                    <div className='bg-black container mx-auto lg:px-10 '>
                        <ImplementationStratogy />
                    </div>



                    {/* <div className="bg-black rounded-bl-[85px] rounded-br-[85px] lg:px-10 ">
                    <ExecutiveLeadersSection
                        execLeaders={executiveLeadership}
                        bgColor="dark"
                    />
                </div> */}

                    {/* <div className="bg-black ">
                    <AwardsSection />
                </div> */}

                    <div className="bg-black">
                        <ClientsSection
                            title="Trusted by these amazing companies"
                            logos={logos}
                        />
                    </div>
                    {/* <div className="bg-black">
                    <TestimonialSection bgColor={"dark"} testimonialsData={testimonialsData} />
                </div> */}

                    <div className="bg-black">
                        <AboutSection />
                    </div>

                    <div className="bg-black">
                        <SectionContact showContent={""} image="/images/contact/contact-form-img.png" />
                    </div>

                </div>
                <div className="">
                    <HomeFaqSection faqs={homeFAQs} />
                </div>
            </>

        </html>


    )
}
export default CunsultNow