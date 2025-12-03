"use client"
import SectionContact from "@/components/CunsultNow/SectionContact"
// import HeroBanner from "@/components/HeroBanner"
import Partners from "@/components/OurPartners/Partners.tsx"
// import BodyText from "@/components/typography/BodyText";
import VerticalHeroBanner from '@/components/verticalDetailPage/VerticalHeroBanner'
import { useEffect, useState } from "react";


function OurPartners() {


    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (

        <html lang="en">
            <head>
                <title>Our Trusted Partners – iTCart</title>
                <meta name="description" content="Meet the global and regional partners who share our vision for innovation. iTCart collaborates with technology leaders to create AI-driven solutions that empower industries." />
                <meta property="og:url" content={`https://itcart.ai/ourpatners`} />
                <link rel="canonical" href="https://itcart.ai/ourpatners"></link>
            </head>


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


                {/* <div className="bg-black md:py-8">
                    <Partners />
                </div> */}

                <div className="bg-black md:py-4">
                    <SectionContact showContent={"noShow"} image="" />
                </div>

                <div className="bg-black md:py-8">
                    <Partners />
                </div>


            </div>
        </html>


    )
}
export default OurPartners