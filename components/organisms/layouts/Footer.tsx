import BodyText from "@/components/atoms/typography/BodyText";
import FooterSection from "@/components/molecules/footer/FooterSection";
import Image from "next/image";
import Logo from "@/components/atoms/common/Logo";
import SocialIcons from "@/components/molecules/common/SocialIcons";
import GradientTitle from "@/components/atoms/typography/GradientTitle";

const certLogos = [
    { src: "/logos/MSMEmart-Logo.png", alt: "MSME Logo" },
    { src: "/logos/CMMI-Level-3-Logo.png", alt: "CMMI Level 3 Logo" },
    { src: "/logos/ISO-9001-Logo.png", alt: "ISO 9001 Logo" },
    { src: "/logos/ISO-27001-Logo.png", alt: "ISO 27001 Logo" },
];



const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 relative overflow-hidden">
            <div className="container mx-auto lg:px-10 flex flex-col lg:flex-row gap-10">
                {/* Left Side – Logo, Text, Image */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
                    <Logo />
                    <GradientTitle text="Smart Solutions for a Smarter Tomorrow" lineHeight="1.2" className="max-w-lg text-[45px]" theme='dark' />
                    <Image
                        src="/images/two-hands.png"
                        alt="hands Image"
                        width={300}
                        height={350}
                        className="h-[350px] w-auto mt-6"
                    />
                </div>

                {/* Right Side – Sections + Social Icons */}
                <div className="w-full lg:w-1/2 flex flex-col gap-10">
                    <SocialIcons />

                    {/* Footer Links Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                        <FooterSection
                            title="Services"
                            items={[
                                { label: "Digital Transformation", href: "/services/digital-transformation" },
                                { label: "Application Services", href: "/services/application" },
                                { label: "Cloud Ops Services", href: "/services/cloud-ops" },
                                { label: "Business Intelligence", href: "/services/business-intelligence" },
                                { label: "Digital Commerce", href: "/services/digital-commerce" },
                                { label: "DevOps Services", href: "/services/devops" },
                                { label: "Cyber Security", href: "/services/cybersecurity" },
                                { label: "Data Analytics", href: "/services/data-analytics" },
                                { label: "Managed IT Services", href: "/services/managed-it" },
                                { label: "AI & ML Automations", href: "/services/ai-ml" },
                                { label: "Startup Services", href: "/services/startup" },
                                { label: "IoT Services", href: "/services/iot" },
                            ]}
                        />
                        <div className="grid gap-8">
                            <FooterSection
                                title="Company"
                                items={[
                                    { label: "About Us", href: "/about" },
                                    { label: "Case Studies", href: "/case-studies" },
                                    { label: "Our Blogs", href: "/blogs" },
                                    { label: "Contact Us", href: "/contact" },
                                    { label: "Our Partners", href: "/partners" },
                                    { label: "Sitemap", href: "/sitemap" },
                                ]}
                            />
                            <FooterSection
                                title="Solutions"
                                items={[
                                    { label: "AiXHub - Your AI Workspace", href: "/solutions/aixhub" },
                                    { label: "Document Management System", href: "/solutions/dms" },
                                    { label: "Digital Transformation Suite", href: "/solutions/dts" },
                                    { label: "All Solutions →", href: "/solutions" },
                                ]} />

                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row – Text & Certifications */}
            <div className="border-t border-white/10">
                <div className="container mx-auto lg:px-10 mt-12 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <BodyText
                        text="The Privacy Policy, Terms and Conditions will be applied fully and affect to your use of this Website. By using this website, you agreed to accept all terms and conditions."
                        className="text-xs text-white/70 max-w-lg"
                    />
                    <div className="flex flex-wrap items-center gap-6">
                        {certLogos.map((cert, idx) => (
                            <Image
                                key={idx}
                                src={cert.src}
                                alt={cert.alt}
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
