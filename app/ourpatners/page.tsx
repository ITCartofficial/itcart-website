import SectionContact from "@/components/CunsultNow/SectionContact"
// import HeroBanner from "@/components/HeroBanner"
import Partners from "@/components/OurPartners/Partners.tsx"
// import BodyText from "@/components/typography/BodyText";
import VerticalHeroBanner from '@/components/verticalDetailPage/VerticalHeroBanner'


function OurPartners() {
    return (
        <div className='bg-black'>

            <VerticalHeroBanner
                title="Our Partners"
                description={"Collaborating with top IT service and solution providers to fuel your business growth."}
                breadcrumbItems={[
                    { label: 'Home', url: '/' },
                    { label: 'Our Partners', url: '/industry' }
                ]}
                backgroundImage="/images/ourpartners/outpartners-bgimage.jpg"
                isCunsultNow={true}
                // height={true}
                contentClass="lg:items-center lg:text-center"
            />

            <div className="bg-black md:py-4">
                <SectionContact showContent={"noShow"} image="" />
            </div>

            <div className="bg-black md:py-8">
                <Partners />
            </div>

        </div>
    )
}
export default OurPartners