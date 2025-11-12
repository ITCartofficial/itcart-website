"use client"
import JobDetails from "@/components/careers/JobDetails"
import JobForm from "@/components/forms/JobForm"
import { jobs } from "@/lib/data/jobData";
import { usePathname } from "next/navigation";

function CareerDetailPage() {

    const pathName = usePathname().split("/")[2]

    const filteredJob = jobs.find((job) => job.jobId === pathName);

    if (!filteredJob) {
        return (
            <section className="container mx-auto px-4 py-10 mt-20">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Job not found</h2>
                    <p className="mt-2">The requested job could not be found.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="container mx-auto px-4 py-10 mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* LEFT: Job Description */}
                <JobDetails filteredJob={filteredJob} />

                {/* RIGHT: Apply Form */}
                <JobForm theme="dark" filteredJob={filteredJob} />
            </div>
        </section>
    )
}

export default CareerDetailPage