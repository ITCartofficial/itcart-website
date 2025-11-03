'use client';
// import OutlineBtn from '@/components/buttons/OutlineBtn';
import BodyText from '@/components/typography/BodyText';
import GradientTitle from '@/components/typography/GradientTitle';
import React from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaBookOpen, FaArrowRight } from 'react-icons/fa';
import OutlineBtn from '../buttons/OutlineBtn';



export interface JobCardProps {
    title: string;
    location: string;
    employmentType: string;
    jobCategory: string;
    jobDescriptionUrl: string;
    className?: string;
    btnName?:string
}

const JobCard: React.FC<JobCardProps> = ({
    title,
    location,
    employmentType,
    jobCategory,
     jobDescriptionUrl,
    className = '',
    btnName
}) => {
    return (
        <div className={`flex flex-col lg:flex-row justify-between items-center w-full p-4 border border-gray-700 rounded-lg bg-black my-6 md:my-3 ${className}`}>
            <div>
                <GradientTitle
                    text={title}
                    lineHeight="1.2"
                    className="text-2xl pb-5 text-left"
                    theme='dark'
                />
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-white" />
                        <BodyText text={location} className="text-sm" />
                    </div>
                    <div className="flex items-center gap-1">
                        <FaBriefcase className="text-white" />
                        <BodyText text={employmentType} className="text-sm" />
                    </div>
                    <div className="flex items-center gap-1">
                        <FaBookOpen className="text-white" />
                        <BodyText text={jobCategory} className="text-sm" />
                    </div>
                </div>
            </div>

            <OutlineBtn
                text={btnName ?? ''}
                url={`careers/${jobDescriptionUrl}`}
                icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                textColor="#ffffff"
                showBorderaButton={true}
                className="mt-5 md:mt-0 md:mt-0 mb-2 md:mb-0"
            />

        </div>
    );
};

export default JobCard;
