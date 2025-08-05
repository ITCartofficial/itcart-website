'use client'
import React, { useState } from 'react';

import { jobs } from '@/lib/data/jobData';
import JobCard from '@/components/cards/JobCard';

const categories = ['All Position', 'Executive Assistant', 'Information technology & Engineering', 'Insurance', 'Marketing & Sales', 'Product Development', 'Sales'];

const JobListings = () => {
    const [selectedCategory, setSelectedCategory] = useState('All Position');

    const filteredJobs = selectedCategory === 'All Position'
        ? jobs
        : jobs.filter(job => job.jobCategory === selectedCategory ||
            (selectedCategory === 'Information technology & Engineering' && job.jobCategory === 'Product Development'));

    return (
        <div className="bg-black text-white flex flex-col md:flex-row">
            {/* Left Sidebar */}
            <div className="w-full md:w-80 p-6 flex md:flex-col flex-wrap">
                {categories.map((category) => (
                    <div
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`p-3 mb-2 rounded cursor-pointer text-lg font-medium ${selectedCategory === category
                            ? 'bg-cyan-400 text-black'
                            : 'text-gray-300 hover:text-white'
                            }`}>
                        {category}
                    </div>
                ))}
            </div>

            {/* Right Content */}
            <div className="flex-1 p-6">
                <div className="space-y-4 max-h-[450px] overflow-y-auto px-6">
                    {filteredJobs.map((job) => (
                        <JobCard
                            key={job.jobId}
                            title={job.title}
                            location={job.location}
                            employmentType={job.employmentType}
                            jobCategory={job.jobCategory}
                            jobDescriptionUrl={job.jobDescriptionUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobListings;