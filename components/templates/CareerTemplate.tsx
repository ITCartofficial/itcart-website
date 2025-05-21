import React from 'react'
import BlogsHero from '../organisms/sections/blogs/BlogsHero'
import OutlineBtn from '../atoms/buttons/OutlineBtn'
import { FaArrowRight } from 'react-icons/fa6';
import HomeFaqSection from '../organisms/sections/HomeFaqSection';


interface CareersTemplateProps {
  buttonText?: string;
}

const CareersTemplate: React.FC<CareersTemplateProps> = ({buttonText = "View all open positions"}) => {
    return (
        <section className="w-full bg-black text-white pt-32 pb-20 px-4 border-b-2 border-[#525252]">
            <div className='pb-20'>
                <BlogsHero
                    title="Build Your Future with Us"
                    description="At iTCart, we're shaping the future with cutting-edge technology and a passion for innovation. Join us to transform industries, solve global challenges, and grow in a vibrant and inclusive workplace."
                    breadcrumbItems={[
                        { label: 'Home', url: '/' },
                        { label: 'Career', url: '/career' },
                    ]}
                    className='pb-20'
                />
                <div className='w-full flex justify-center py-10'>
                <OutlineBtn text={buttonText} icon={<FaArrowRight className="text-sm font-semibold text-white" />} textColor="#ffffff" />
                </div>
            </div>
            <HomeFaqSection/>
        </section>
    )
}

export default CareersTemplate