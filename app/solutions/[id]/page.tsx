"use client"
import { solutionData } from "@/lib/data/solutionData";
import { usePathname } from "next/navigation";
import VerticalHeroBanner from '@/components/verticalDetailPage/VerticalHeroBanner'
import SectionAbout from "@/components/verticalDetailPage/SectionAbout";
import CollaburationSection from "@/components/SolutionDetailPage/CollaburationSection";
import SolutionGrid from "@/components/SolutionDetailPage/SolutionGrid";
import ServiceCard from "@/components/DetailPageComponents/ServiceCard";
import SectionResult from "@/components/SolutionDetailPage/SectionResult";
import SolutionAboutSection from "@/components/SolutionDetailPage/SolutionAboutSection";
import SectionContact from "@/components/CunsultNow/SectionContact";
import HomeFaqSection from "@/app/(features)/home/HomeFaqSection";
import FutureSectionSolution from "@/components/SolutionDetailPage/FutureSection";

// import CollaburationSection from "@/components/SolutionDetailPage/sectionCollab";
// import FutureSection from "@/components/DetailPageComponents/FutureSection";



function SolutionDetailPage() {
    const pathName = usePathname().split('/')[2].replace(/-&-/g, ' & ').replace(/-/g, ' ')

    // const filterdItem = solutionData.find(item => item.title === pathName);

    // console.log("filterdItem", filterdItem);x
    const filterdItem = solutionData.find(item =>
        item.title.toLowerCase().replace(/™/g, '').trim() ===
        pathName.toLowerCase().replace(/™/g, '').trim()
    ) || solutionData[0]

    console.log("filterdItem", filterdItem?.detailPage);


    return (
        <div>
            <VerticalHeroBanner
                title={filterdItem?.detailPage?.bannerTitle ?? ""}
                description={filterdItem?.detailPage?.bannerDescription ?? ""}
                ctaText="Connect with Us"
                ctaUrl="/contact"
                breadcrumbItems={[
                    { label: 'Home', url: '/' },
                    { label: 'Our Verticals', url: '/services' }
                ]}
                backgroundImage={filterdItem?.detailPage?.bannerImage ?? ""}
            />


            <div className='bg-black py-16 container mx-auto lg:px-10'>
                <SectionAbout
                    showLogo={true}
                    aboutProduct={true}
                    contentOne={filterdItem?.detailPage?.aboutSection?.contentOne ?? ""}
                    contenttwo={filterdItem?.detailPage?.aboutSection?.contenttwo ?? ""}
                    image={filterdItem?.detailPage?.aboutSection?.aboutImage ?? ""}
                    logo={filterdItem?.detailPage?.aboutSection?.logo ?? ""}
                    contentthree={(filterdItem?.detailPage?.aboutSection as unknown as { contentthree?: string })?.contentthree ?? ""}
                    contentfour={(filterdItem?.detailPage?.aboutSection as unknown as { contentfour?: string })?.contentfour ?? ""}
                    aboutSectionHeading={filterdItem?.detailPage?.aboutSectionHeading ?? ""}
                />
            </div>

            <div className='bg-black py-16 container mx-auto lg:px-10'>
                <FutureSectionSolution
                    futurSectionHeading={filterdItem?.detailPage?.futureGridHeading ?? ''}
                    futurSectionDescription={filterdItem?.detailPage?.futureGridDiscription ?? ''}
                    futureItems={filterdItem?.detailPage?.futureItems ?? []}
                />
            </div>
            {/* collaburationItems */}
            <div className='bg-black py-16 container mx-auto lg:px-10'>
                <CollaburationSection
                    futurSectionHeading={filterdItem?.detailPage?.collabSectionHeading ?? ''}
                    futurSectionDescription={filterdItem?.detailPage?.colabSectionDiscription ?? ''}
                    collaburationItems={filterdItem?.detailPage?.collaburationItems}
                />
            </div>

            <div className='bg-black py-16 container mx-auto lg:px-10'>
                <SolutionGrid
                    futurSectionHeading={filterdItem?.detailPage?.solutionGridHeading ?? ''}
                    futurSectionDescription={filterdItem?.detailPage?.solutionGridHeadingDiscription ?? ''}
                    solutionItems={filterdItem?.detailPage?.solutionGridItems ?? []}
                />
            </div>

            <div className='bg-black container py-10'>
                <ServiceCard
                    serviceCardItems={(filterdItem?.detailPage)?.chooseItems ?? []}
                    serviceCardHeading={(filterdItem?.detailPage)?.chooseHeading ?? ""}
                />
            </div>

            <div className='bg-black container py-10'>
                <SectionResult />
            </div>

            <div className='bg-black container py-10'>
                <SolutionAboutSection className="" />
            </div>

            <div className="bg-black py-8">
                <SectionContact
                    showContent={"noShow"}
                    image="/images/solutions/contact-us.png"
                />
            </div>

            {/* <div className="py-10 border-b-2 border-b-zinc-600">
                <FutureSection
                    futurSectionHeading={filterdItem?.detailPage?.futurSectionHeading ?? ""}
                    futurSectionDescription={filterdItem?.detailPage?.futurSectionDescription ?? ""}
                />
            </div> */}

            <div className="bg-[#131313] py-10 border-b-2 border-b-zinc-600">
                <HomeFaqSection
                    FAQsHeading={filterdItem?.detailPage?.FAQsHeading}
                    faqs={filterdItem?.detailPage?.FAQs ?? []} />
            </div>

        </div >
    )
}
export default SolutionDetailPage