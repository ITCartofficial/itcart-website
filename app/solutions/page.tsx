import HeroBanner from "@/components/HeroBanner";
import SolutionGrid from "@/components/SolutionGrid";

export default function page() {

    return (



        <html lang="en">

            <head>
                <title>AI-Powered Digital Transformation Solutions | iTCart </title>
                <meta name="description" content="Discover intelligent automation, ERP, BFSI, healthcare, and enterprise AI solutions from iTCart. Streamline operations, boost growth, and build future-ready businesses." />
                <meta property="og:url" content={`https://itcart.ai/solutions`} />
            </head>

            <body>
                <div className='bg-black'>
                    <HeroBanner title="Our Solutions"
                        description="At iTCart, our suite of solutions is tailored to optimize operations, supercharge productivity and propel client growth across varied industries. Explore our precision-crafted solutions, driven by an unwavering commitment to excellence, meticulous attention to detail and a transparent privacy policy governing data collection and usage for diverse purposes."
                        ctaText="Connect with Us"
                        ctaUrl="/contact-us"
                        breadcrumbItems={[
                            { label: 'Home', url: '/' },
                            { label: 'Our Solutions', url: '/solutions' }
                        ]}
                        backgroundImage="/images/vertical/vertical-bg.jpg"
                    />
                    <SolutionGrid className='container' />
                </div>
            </body>
        </html>


    )
}