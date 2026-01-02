import Image from "next/image";
import GradientTitle from "../typography/GradientTitle";

interface SectionAboutProps {
    aboutProduct?: boolean;
    className?: string;
    contentOne?: string;
    contenttwo?: string;
    image?: string
    logo?: string
    contentthree?: string
    contentfour?: string;
    aboutSectionHeading?: string;
    showLogo?: boolean;
    classNameTwo?: string;
    imgAlt?: string
}

const SectionAbout: React.FC<SectionAboutProps> = ({ aboutProduct, className,
    contentOne, contenttwo,
    image, logo,
    contentthree, contentfour,
    aboutSectionHeading,
    showLogo, classNameTwo, imgAlt
}) => {

    return (
        <section className="w-full bg-black text-white px-6">
            <div
                className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10 items-center ${className}`}
            >
                {/* Left Content */}
                <div className={`space-y-6 ${aboutProduct ? "md:order-2" : "md:order-1"}`}>
                    {aboutProduct &&
                        <GradientTitle
                            text={aboutSectionHeading ?? ''}
                            theme="dark"
                            className={`${classNameTwo ? classNameTwo : "text-[30px] sm:text-[25px] md:text-[38px] text-center md:text-start"}  w-full `}
                        />
                    }

                    <p className="text-[16px] leading-relaxed text-center md:text-start">
                        {contentOne}
                        {/* AiXHub™ is the world's first AI-Native Enterprise Operating System engineered to enable governed autonomy, SLA-driven intelligence, and explainable decision execution across business functions like IT, HR, Finance, Legal, and Operations.
                        The essence of AiXHub™ is core operating principle in all our solutions and services offered under different verticals across industries. */}
                    </p>
                    <p className="text-[16px] leading-relaxed text-center md:text-start">
                        {contenttwo}
                    </p>
                    <p className="text-[16px] leading-relaxed text-center md:text-start">
                        {contentthree}
                    </p>
                    <p className="text-[16px] leading-relaxed ">
                        {contentfour}
                    </p>

                </div>



                <div
                    className={`rounded-xl w-full h-[200px] md:h-[350px] bg-cover bg-center flex items-end justify-center ${aboutProduct ? "md:order-1" : "md:order-2"}`}
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                >
                    {
                        !showLogo &&
                        <div className="w-30 h-20 mb-4 bg-white rounded-md flex items-center justify-center">
                            <Image
                                src={logo ? logo : ''}
                                alt="Logo"
                                width={600}
                                height={400}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    }
                    <div className="sr-only">{imgAlt}</div>
                </div>



            </div>
        </section >
    );
};

export default SectionAbout;
