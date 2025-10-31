import HeroBanner from "@/components/HeroBanner";
import SolutionGrid from "@/components/SolutionGrid";

export default function page() {

    return (
        <div className='bg-black'>
            <HeroBanner title="Our Solutions"
                description="At IT Cart, our suite of solutions is tailored to optimize operations, supercharge productivity and propel client growth across varied industries. Explore our precision-crafted solutions, driven by an unwavering commitment to excellence, meticulous attention to detail and a transparent privacy policy governing data collection and usage for diverse purposes."
                ctaText="Connect with Us"
                ctaUrl="/contact-us"
                breadcrumbItems={[
                    { label: 'Home', url: '/' },
                    { label: 'Our Solutions', url: '/solutions' }
                ]}
                backgroundImage="/images/vertical/vertical-bg.jpg"
                // backgroundImage="/images/solutions/solutions-bg.png"
            />
            <SolutionGrid className='container'/>
        </div>
    )
}