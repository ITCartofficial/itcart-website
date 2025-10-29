import Image from "next/image";
import GradientTitle from "../typography/GradientTitle";

function ShappingSection() {

    const initiatives = [
        {
            icon: "/images/csr/technology-education.png",
            title: "Technology for Education",
            items: [
                { label: "Free Training", description: "Teaching coding, AI, and IT." },
                { label: "Equal Access", description: "Scholarships and mentorship in tech." }
            ]
        },
        {
            icon: "/images/csr/Healthcare.png",
            title: "Healthcare & Well-being",
            items: [
                { label: "Telehealth Access", description: "Reaching underserved communities." },
                { label: "Digital Support", description: "Empowering clinics and healthcare professionals." }
            ]
        },
        {
            icon: "/images/csr/Sustainable.png",
            title: "Sustainable Responsibility",
            items: [
                { label: "E-Waste Recycling", description: "Promoting eco-friendly disposal." },
                { label: "Green IT Solutions", description: "Advancing energy efficiency." }
            ]
        },
        {
            icon: "/images/csr/Community.png",
            title: "Community & Social Development",
            items: [
                { label: "Disaster Relief", description: "Offering financial aid in crises." },
                { label: "Business Support", description: "Helping small businesses go digital." }
            ]
        }
    ];

    return (
        <div className=" bg-black text-white px-6 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Header Text */}
                    <div className="lg:pr-8">

                        {/* text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tigh */}

                        <GradientTitle
                            text={'Building a Better Future,Together'}
                            theme="dark"
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.3]"
                        />

                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            At iTCart, innovation is our responsibility. Through CSR, we support healthcare,
                            physiotherapy, education, sustainability, and community development. By enhancing
                            well-being, driving environmental change, and advancing ethical innovation, we use
                            technology to create a lasting, sustainable impact.
                        </p>
                    </div>

                    {/* Right Column - Initiative Cards */}
                    <div className="space-y-6 mt-4 md:mt-0 lg:mt-0 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#2BADB7]/60 scrollbar-track-transparent no-scrollbar h-fit ">
                        {initiatives.map((initiative, index) => (
                            <div
                                key={index}
                                className="bg-[#1B1B1B] from-gray-800 to-gray-900 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300"
                            >
                                <div className="text-white flex-shrink-0">
                                    <Image
                                        src={initiative?.icon}
                                        alt={initiative.title || "Initiative icon"}
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                    />
                                </div>

                                <div className="flex items-start mb-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#2BADB7] mt-2">
                                        {initiative.title}
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    {initiative.items.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-1">
                                            <span className="text-white font-semibold whitespace-nowrap">
                                                {idx + 1}. {item.label}
                                            </span>
                                            <span className="text-gray-400">-</span>
                                            <span className="text-gray-400">{item.description}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ShappingSection