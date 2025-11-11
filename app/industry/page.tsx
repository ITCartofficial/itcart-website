import HeroBanner from "@/components/HeroBanner";
import IndustryGrid from "@/components/IndustryGrid";

export default function page() {



    return (

        <html lang="en">

            <head>
                <title>Digital Transformation Solutions for All Industries | iTCart </title>
                <meta name="description" content="Meta description: From banking to manufacturing, healthcare to telecom—iTCart delivers AI-powered industry solutions that modernize operations, enhance efficiency, and fuel growth. " />
                <meta property="og:url" content={`https://itcart.ai/industry`} />
            </head>

            <body>
                <div className='bg-black'>
                    <HeroBanner title="Our Industry"
                        description="Our company showcases expertise across tech, healthcare, finance, and e-commerce industries. Specializing in software development, cybersecurity, healthcare IT, fintech, and e-commerce solutions, we deliver Automation innovation and tailored services to optimize operations and bolster client growth in these sectors."
                        ctaText="Connect with Us"
                        ctaUrl="/contact-us"
                        breadcrumbItems={[
                            { label: 'Home', url: '/' },
                            { label: 'Our Industry', url: '/industry' }
                        ]}
                        backgroundImage="/images/vertical/vertical-bg.jpg"
                    // backgroundImage="/images/industries/industry-bg.png"
                    />
                    <IndustryGrid className='container' />
                </div>
            </body>
        </html>

    )
}