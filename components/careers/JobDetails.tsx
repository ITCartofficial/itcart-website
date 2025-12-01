import GradientTitle from "../typography/GradientTitle";

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
    responsibilities?: {
        title?: string;
        items?: string[];
    }[];
    performanceIndicators?: {
        title?: string;
        items?: string[];
    }[],
    qualifications?: string[];
    optionalSkills?: string[];
    Experience?: string;
    Role?: string;

}

interface JobDetailsProps {
    filteredJob: Job;
}

const JobDetails: React.FC<JobDetailsProps> = ({ filteredJob }: JobDetailsProps) => {
    return (


        <div>
            <GradientTitle
                text={filteredJob?.title}
                theme="dark"
                className="text-[30px] md:text-[35px] mb-4"
            />


            <div className="space-y-7 text-white">
                <div>
                    <p className="font-semibold">   </p>
                </div>
                <p>
                    <span className="font-semibold">Job Code:</span>{" "}
                    {filteredJob.jobId}
                </p>
                <p>
                    <span className="font-semibold">Job Title:</span> {filteredJob?.title}
                </p>
                <p>
                    <span className="font-semibold">Role:</span> {filteredJob?.Role}
                </p>
                <p>
                    <span className="font-semibold">Location:</span> {filteredJob?.location}
                </p>
                <p>
                    <span className="font-semibold">Experience:</span> {filteredJob?.Experience}
                </p>

                <div>
                    <p className="font-semibold">
                        Key Objectives:
                    </p>
                    <ul className="list-disc list-outside text-white leading-relaxed space-y-3 pl-6 mt-5 ">
                        {
                            filteredJob?.objectives?.map((objective: string, index: number) => (
                                <li key={index}>{objective}</li>
                            ))
                        }
                    </ul>
                </div>

                <div>
                    <p className="text-[18px] font-semibold md:mt-[-20px]">
                        How to Apply :
                    </p>

                    <div>
                        <p className="text-[18px] font-semibold mt-5">
                            hr@itcart.io
                        </p>
                    </div>
                </div>


                <div>
                    <p className="font-semibold">
                        About iTCart Private limited (iTCart):
                    </p>
                    <p className="mt-2 text-white leading-relaxed">
                        iTCart Private limited isn’t just a company – it’s a global movement redefining how
                        industries think, operate, and thrive in the age of Artificial Intelligence.
                        Headquartered in Bengaluru, India’s Silicon Valley, and spanning
                        across innovation hubs in the USA, UK, KSA, UAE, and LATAM, iTCart stands at the
                        forefront of AI-powered digital transformation. We don’t follow trends; we create them.
                        With a relentless focus on AI-driven disruption, iTCart’s Patent-pending AiXHub EOS
                        serves as the backbone of a new era of efficiency, innovation, and scalability.
                        This proprietary technology isn’t just a tool – it’s a paradigm shift. From automating
                        complex workflows to unlocking hyper-personalized insights with Generative AI, our solutions
                        empower enterprises to leapfrog from legacy systems to future-ready ecosystems.
                    </p>
                </div>


                {/* <div>
                    <p className="font-semibold">
                        Position Overview:
                    </p>
                    <p className="mt-5 text-white leading-relaxed">
                        {filteredJob?.positionOverview}
                    </p>
                </div> */}




                {/* <div>
                    <p className="font-semibold">
                        Key Responsibilities:
                    </p>

                    {
                        filteredJob?.responsibilities?.map((responsibilities, index) =>
                            <div key={index}>

                                <div>
                                    <p className="font-semibold mt-5">
                                        {responsibilities?.title}
                                    </p>

                                    <ul className="list-disc list-outside text-white leading-relaxed space-y-3 pl-6 mt-4">
                                        {
                                            responsibilities?.items.map((item, index) =>
                                                <li key={index}>
                                                    {item}
                                                </li>
                                            )
                                        }

                                    </ul>
                                </div>

                            </div>
                        )
                    }

                </div> */}

                {/* <div>
                    <p className="font-semibold">
                        Key Performance Indicators (KPIs) :
                    </p>

                    {
                        filteredJob?.performanceIndicators?.map((responsibilities, index) =>
                            <div key={index}>

                                <div>
                                    <p className="font-semibold mt-5">
                                        {responsibilities?.title}
                                    </p>

                                    <ul className="list-disc list-outside text-white leading-relaxed space-y-3 pl-6 mt-4">
                                        {
                                            responsibilities?.items.map((item, idx) =>
                                                <li key={idx}>
                                                    {item}
                                                </li>
                                            )
                                        }

                                    </ul>
                                </div>

                            </div>
                        )
                    }

                </div> */}

                {/* <div>
                    <p className="font-semibold">
                        Mandatory Qualifications :
                    </p>
                    <ul className="list-disc list-outside text-white leading-relaxed space-y-3 pl-6 mt-5 ">
                        {
                            filteredJob?.qualifications?.map((objective, index) => (
                                <li key={index}>{objective}</li>
                            ))
                        }
                    </ul>
                </div> */}

                {/* <div>
                    <p className="font-semibold">
                        Optional Skills :
                    </p>
                    <ul className="list-disc list-outside text-white leading-relaxed space-y-3 pl-6 mt-5 ">
                        {
                            filteredJob?.qualifications?.map((objective, index) => (
                                <li key={index}>{objective}</li>
                            ))
                        }
                    </ul>
                </div> */}

                <div className="">
                    <p className="font-semibold">
                        Why iTCart?
                    </p>

                    <div className="md:mt-8 mt-5 space-y-8 text-white leading-relaxed">
                        <p className="text-[18px]">
                            <span className="font-semibold">Global Impact, Local Precision : </span>
                            Serving 25+ industries, Technology, BFSI, Healthcare, Real Estate, and beyond – we tailor AI to solve region-specific challenges while driving universal progress.
                        </p>

                        <p className="text-[18px]">
                            <span className="font-semibold">The AIX Ecosystem : </span>
                            Our suite of cutting-edge platforms (AIX HUB, AIX Desk, RCMAiX, Insure AIX, and more) acts as the central nervous system for businesses, transforming raw data into strategic mastery.
                        </p>

                        <p className="text-[18px]">
                            <span className="font-semibold">Beyond Profit : </span>
                            We measure success not just in revenue, but in societal impact. Every innovation is infused with purpose – reinvesting in communities, reducing global inequities, and democratizing access to AI for businesses of all sizes.
                        </p>

                        <p className="text-[18px]">
                            <span className="font-semibold">Vision: </span>
                            To be the architect of the world’s smartest enterprises, where AI isn’t an add-on but the
                        </p>

                        <p className="text-[18px] md:mt-[-20px]">
                            <span className="font-semibold">DNA of every operation. </span>
                            We envision a future where iTCart’s technology erases the line between human potential and machine capability, enabling industries to scale limitlessly, act fearlessly, and lead unapologetically.
                        </p>

                        <p className="text-[18px] font-semibold">
                            Welcome to the future, engineered today.
                        </p>



                        <div>
                            <p className="text-[18px]">
                                <span className="font-semibold">Job Category : </span>
                                {filteredJob?.jobCategory}
                            </p>

                            <p className="text-[18px]">
                                <span className="font-semibold">Job Type : </span>
                                {filteredJob?.employmentType}
                            </p>

                            <p className="text-[18px]">
                                <span className="font-semibold">Job Location : </span>
                                {filteredJob?.location}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}
export default JobDetails;