"use client"
import HeroBanner from "@/components/HeroBanner";
import SolutionGrid from "@/components/SolutionGrid";
import { useEffect, useState } from "react";

export default function Page() {

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
                <title>Enterprise Digital Transformation Solutions Suite | iTCart</title>
                <meta name="description" content="Explore comprehensive enterprise digital transformation solutions. Discover B2B business software and AI-native technology solutions tailored for growth." />
                <meta property="og:url" content={`https://itcart.ai/solutions`} />
                <link rel="canonical" href={`https://itcart.ai/solutions`}></link>
            </head>

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

        </html >


    )
}