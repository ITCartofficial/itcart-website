import BodyText from "@/components/atoms/typography/BodyText";
import FooterSection from "@/components/molecules/footer/FooterSection";
import Image from "next/image";
import Logo from "@/components/atoms/common/Logo";
import SocialIcons from "@/components/molecules/common/SocialIcons";
import GradientTitle from "@/components/atoms/typography/GradientTitle";

import { footerMenus, certLogos, socialLinks } from '@/lib/data/footerData'

const Footer = () => {
    const serviceMenus = footerMenus.find(menus => menus.title == "Services")?.navigations;
    const companyMenus = footerMenus.find(menus => menus.title == "Company")?.navigations;
    // const solutionMenus = footerMenus.find(menus => menus.title == "Solutions")?.navigations;
    const verticalMenus = footerMenus.find(menus => menus.title == "Our Verticals")?.navigations;

    return (
        <footer className="bg-black text-white py-12 relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-10 flex flex-col lg:flex-row gap-10">
                {/* Left Side – Logo, Title, Image */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between items-center lg:items-start gap-6">
                    <div className="flex justify-center lg:justify-start w-full">
                        <Logo />
                    </div>

                    <GradientTitle
                        text="Smart Solutions for a Smarter Tomorrow"
                        lineHeight="1.2"
                        className="max-w-lg text-[28px] sm:text-[32px] lg:text-[45px] text-center lg:text-left"
                        theme="dark"
                    />

                    <Image
                        src="/images/two-hands.png"
                        alt="hands Image"
                        width={500}
                        height={350}
                        className="w-full max-w-sm h-auto object-contain mt-4"
                        loading="lazy"
                    />
                </div>

                {/* Right Side – Social + Footer Links */}
                <div className="w-full lg:w-1/2 flex flex-col gap-10 items-center lg:items-start">
                    {/* Social Icons */}
                    <div className="flex justify-center lg:justify-end w-full">
                        <SocialIcons size={21} color="#ffffff" socialMedia={socialLinks} />
                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-col items-center sm:grid sm:grid-cols-2 gap-8 w-full text-center sm:text-left">
                        {/* Services Section */}
                        <FooterSection title="Services" items={serviceMenus || []} />

                        {/* Company + Solutions Section */}
                        <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-8">
                            <FooterSection title="Company" items={companyMenus || []} />
                            <FooterSection title="Verticals" items={verticalMenus || []} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Disclaimer + Certifications */}
            <div className="border-t border-white/10 mt-12 pt-6">
                <div className="container mx-auto px-4 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                    <BodyText
                        text="The Privacy Policy, Terms and Conditions will be applied fully and affect to your use of this Website. By using this website, you agreed to accept all terms and conditions."
                        className="text-[12px] text-center lg:text-16px lg:text-start text-white/70 max-w-lg"
                    />
                    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
                        {certLogos.map((cert, idx) => (
                            <Image
                                key={idx}
                                src={cert.src}
                                alt={cert.alt}
                                width={60}
                                height={60}
                                className="object-contain"
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
