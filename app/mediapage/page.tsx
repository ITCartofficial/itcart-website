import SectionTeam from "@/components/Csr/SectionTeam"
import HeroBanner from "@/components/HeroBanner"
import HomeFaqSection from "../(features)/home/HomeFaqSection"

function MediaPage() {

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
        <div className='bg-black'>
            <HeroBanner title="Technology Transforms Lives."
                description="At iTCart, innovation is a responsibility, not just advancement. Through our CSR initiatives, we drive change in healthcare, education, sustainability, and community empowerment. By supporting critical sectors and ethical innovation, we use technology as a force for good, making impact central to our mission."
                ctaText=""
                ctaUrl="/contact"
                breadcrumbItems={[
                    { label: 'Home', url: '/' },
                    { label: 'Our Industry', url: '/industry' }
                ]}
                backgroundImage="/images/csr/banner-image.png"
                isCunsultNow={true}
            />

            <div className="bg-black">
                <SectionTeam
                    heading=""
                    discription=""
                    removeBorder={true}
                />

            </div>


            <div className="bg-[#131313] py-10 border-b-2 border-b-zinc-600">
                <HomeFaqSection faqs={homeFAQs} />
            </div>



        </div>
    )
}
export default MediaPage