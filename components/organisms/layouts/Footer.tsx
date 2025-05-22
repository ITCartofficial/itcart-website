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
    const solutionMenus = footerMenus.find(menus => menus.title == "Solutions")?.navigations;

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
                        loading="lazy"
                    />
                </div>

                {/* Right Side – Sections + Social Icons */}
                <div className="w-full lg:w-1/2 flex flex-col gap-10">
                    <SocialIcons size={21} color="#ffffff" socialMedia={socialLinks} />

                    {/* Footer Links Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                        <FooterSection
                            title="Services"
                            items={serviceMenus || []}
                        />
                        <div className="grid gap-8">
                            <FooterSection
                                title="Company"
                                items={companyMenus || []}
                            />
                            <FooterSection
                                title="Solutions"
                                items={solutionMenus || []} />

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
