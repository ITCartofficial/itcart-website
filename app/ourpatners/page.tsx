import SectionContact from "@/components/CunsultNow/SectionContact"
import HeroBanner from "@/components/HeroBanner"
import Partners from "@/components/OurPartners/Partners.tsx"

function OurPartners() {
    return (
        <div className='bg-black'>
            <HeroBanner title="Our Partners"
                description=""
                ctaText="Book a Free Session Now"
                ctaUrl="/contact"
                breadcrumbItems={[
                    { label: 'Home', url: '/' },
                    { label: 'Our Partners', url: '/industry' }
                ]}
                backgroundImage="/images/ourpartners/outpartners-bgimage.png"
                isCunsultNow={false}
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