import BodyText from '@/components/typography/BodyText'
import GradientTitle from '@/components/typography/GradientTitle'
import React from 'react'
import JobListings from './JobListing'

const JobSection = () => {
    return (
        <div className='container pb-20'>
            <GradientTitle
                text="Explore all Open Position"
                lineHeight="1.2"
                className="text-3xl md:text-[50px] pb-6 text-center"
                theme='dark'
            />
            <BodyText
                text="At iTCart, we believe in empowering individuals to play to their strengths. Explore what each team excels at and discover where you fit best."
                lineHeight="1.2"
                className="text-base pb-4 md:pb-12 text-center"
            />
            <JobListings />
        </div>
    )
}

export default JobSection