"use client";
import React, { useState } from "react";

import { jobs } from "@/lib/data/jobData";
import JobCard from "@/components/cards/JobCard";
import { FaArrowRight } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";

const categories = [
    "All Position",
    "Executive Assistant",
    "Information technology & Engineering",
    "Insurance",
    "Marketing & Sales",
    "Product Development",
    "Sales",
];

const JobListings = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>("All Position");

    const filteredJobs =
        selectedCategory === "All Position"
            ? jobs
            : jobs.filter(
                (job) =>
                    job.jobCategory === selectedCategory ||
                    (selectedCategory === "Information technology & Engineering" &&
                        job.jobCategory === "Product Development")
            );

    // 🟢 Click handler that toggles open/close on mobile
    const handleCategoryClick = (category: string) => {
        if (selectedCategory === category) {
            // close if same category clicked again
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }
    };

    return (
        <div className="bg-black text-white flex flex-col md:flex-row justify-between">
            {/* Left Sidebar */}
            <div className="w-full md:w-90 p-6 flex flex-col flex-wrap">
                {categories.map((category) => (
                    <div key={category}>
                        <div
                            onClick={() => handleCategoryClick(category)}
                            className={`p-3 mb-2 my-1 cursor-pointer text-lg font-medium flex md:flex-row flex-col items-center justify-center md:justify-between text-center md:text-left mx-8 md:mx-0 transition-colors duration-300
                             ${selectedCategory === category
                                    ? "bg-[#45C2CC] text-white font-bold"
                                    : "md:bg-transparent bg-[#45C2CC] text-gray-300 hover:bg-[#45C2CC]/20 hover:text-white"
                                }`}
                        >
                            {category}
                            <SlArrowDown
                                className={`lg:hidden inline-block transform transition-transform duration-300 ${selectedCategory === category ? "rotate-180" : ""
                                    }`}
                            />
                            {selectedCategory === category && (
                                <FaArrowRight className="hidden lg:inline-block" />
                            )}
                        </div>

                        {/* 🟢 Show filtered jobs only if selected and on mobile */}
                        {selectedCategory === category && (
                            <div className="space-y-4 px-2 block md:hidden my-7">
                                {filteredJobs.map((job) => (
                                    <JobCard
                                        btnName="More Details"
                                        key={job.jobId}
                                        title={job.title}
                                        location={job.location}
                                        employmentType={job.employmentType}
                                        jobCategory={job.jobCategory}
                                        jobDescriptionUrl={job.jobDescriptionUrl}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Right Content */}
            <div className="space-y-4 px-6 md:block hidden">
                <div className="space-y-4 max-h-[500px] overflow-y-auto px-6">
                    {filteredJobs.map((job) => (
                        <JobCard
                            btnName="Read More"
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
