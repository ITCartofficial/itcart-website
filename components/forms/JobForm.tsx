"use client";
import { FaArrowRight } from "react-icons/fa6";
import OutlineBtn from "../buttons/OutlineBtn";
import { useState } from "react";

interface Job {
    jobId: string;
    title: string;
    location: string;
    employmentType: string;
    jobCategory: string;
    jobDescriptionUrl: string;
    positionOverview: string;
    reportsTo?: string;
    objectives?: string[];
    responsibilities: {
        title: string;
        items: string[];
    }[];
    performanceIndicators?: {
        title: string;
        items: string[];
    }[];
    qualifications?: string[];
}

function JobForm({ filteredJob }: { filteredJob: Job }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [coverLetter, setCoverLetter] = useState("");
    const [resumeLink, setResumeLink] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const scriptURL = "https://script.google.com/macros/s/AKfycbz1Vye7oexocmXMKWXMd_fUztNPBcjPEnAUu__hY5UTeTkNz5A0kHblIZ7sjlxHDu2o/exec";

            const formBody = new URLSearchParams({
                JobTitle: filteredJob?.title || "",
                JobiD: filteredJob?.jobId || "",
                Name: name,
                Emailid: email,
                Phone: phone,
                ResumeLink: resumeLink,
                CoverLetter: coverLetter,
            }).toString();

            await fetch(scriptURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formBody,
            });

            setSuccess(true);
            setName("");
            setEmail("");
            setPhone("");
            setCoverLetter("");
            setResumeLink("");
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="border rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-2xl font-semibold mb-6 text-white">
                Apply for this position
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label className="block font-medium text-white mb-1">
                        Full Name <span className="text-cyan-300">*</span>
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border text-white rounded-md p-2 focus:ring-2 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block font-medium text-white mb-1">
                        Email <span className="text-cyan-300">*</span>
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border text-white rounded-md p-2 focus:ring-2 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block font-medium text-white mb-1">
                        Phone <span className="text-cyan-300">*</span>
                    </label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full border text-white rounded-md p-2 focus:ring-2 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block font-medium text-white mb-1">
                        Cover Letter <span className="text-cyan-300">*</span>
                    </label>
                    <textarea
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        rows={4}
                        required
                        className="w-full border text-white rounded-md p-2 focus:ring-2 focus:outline-none"
                    ></textarea>
                </div>

                <div>
                    <label className="block font-medium text-white mb-1">
                        Add Resume Link <span className="text-cyan-300">*</span>
                    </label>
                    <input
                        type="text"
                        value={resumeLink}
                        onChange={(e) => setResumeLink(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-md p-2 text-white"
                    />
                </div>

                <div className="w-full">
                    <button type="submit" className="w-full">
                        <OutlineBtn
                            // url='/contact-us'
                            text={loading ? "Submitting..." : "Submit Application"}
                            textColor='#ffffff'
                            width="full"
                            icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                        />
                        {success && (
                            <p className="text-green-400 mt-2">Application submitted successfully!</p>
                        )}
                    </button>

                </div>

            </form>
        </div>
    );
}

export default JobForm;