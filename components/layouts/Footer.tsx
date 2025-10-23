import BodyText from "@/components/typography/BodyText";
import FooterSection from "@/components/footer/FooterSection";
import Image from "next/image";
import Logo from "@/components/common/Logo";
import SocialIcons from "@/components/common/SocialIcons";
import GradientTitle from "@/components/typography/GradientTitle";

import { footerMenus, certLogos, socialLinks } from '@/lib/data/footerData'

const Footer = () => {
    const serviceMenus = footerMenus.find(menus => menus.title == "Services")?.navigations;
    const companyMenus = footerMenus.find(menus => menus.title == "Company")?.navigations;
    // const solutionMenus = footerMenus.find(menus => menus.title == "Solutions")?.navigations;
    const verticalMenus = footerMenus.find(menus => menus.title == "Our Verticals")?.navigations;

    return (
        <footer className="bg-black text-white md:py-10 lg:py-12 relative overflow-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row">
                {/* Left Side – Logo, Title, Image */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between items-center lg:items-start">
                    {/* Logo */}
                    <div className="flex justify-center lg:justify-start w-full">
                        <Logo />
                    </div>

                    {/* Title */}
                    <GradientTitle
                        text="Smart Solutions for a Smarter Tomorrow"
                        lineHeight="1.2"
                        className="max-w-lg text-[28px] sm:text-[32px] lg:text-[45px] text-center lg:text-left mt-3"
                        theme="dark"
                    />

                    <div className="relative w-full max-w-[1200px] mx-auto mt-4 overflow-hidden rounded-lg">
                        <Image
                            src="/images/two-hands.png"
                            alt="hands Image"
                            width={1200}
                            height={500}
                            className="w-full h-auto object-cover object-left"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/70" />
                    </div>



                </div>


                {/* Right Side – Social + Footer Links */}
                <div className="w-full lg:w-1/2 flex flex-col gap-10 items-center lg:items-start">
                    {/* Social Icons */}
                    <div className="flex justify-center lg:justify-end w-full">
                        <SocialIcons size={21} color="#ffffff" socialMedia={socialLinks} />
                    </div>

                    {/* Footer Links */}
                    <div className="flex justify-around sm:grid sm:grid-cols-2 gap-8 w-full">
                        {/* Services Section */}
                        <FooterSection title="Services" items={serviceMenus || []} />

                        {/* Company + Solutions Section */}
                        <div className="flex flex-col sm:items-start gap-8">
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
