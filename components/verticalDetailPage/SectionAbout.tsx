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
    aboutSectionHeading?: string
}

const SectionAbout: React.FC<SectionAboutProps> = ({ aboutProduct, className, contentOne, contenttwo, image, logo, contentthree, contentfour, aboutSectionHeading }) => {

    return (
        <section className="w-full bg-black text-white px-6 py-1">
            <div
                className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${className}`}
            >
                {/* Left Content */}
                <div className={`space-y-6 ${aboutProduct ? "md:order-2" : "md:order-1"}`}>
                    {aboutProduct &&
                        <GradientTitle
                            text={aboutSectionHeading ?? ''}
                            theme="dark"
                            className="text-[22px] sm:text-[25px] md:text-[30px] w-full "
                        />
                    }

                    <p className="text-[16px] leading-relaxed">
                        {contentOne}
                    </p>
                    <p className="text-[16px] leading-relaxed">
                        {contenttwo}
                    </p>
                    <p className="text-[16px] leading-relaxed">
                        {contentthree}
                    </p>
                    <p className="text-[16px] leading-relaxed">
                        {contentfour}
                    </p>

                    {/* contentfour */}
                </div>

                <div
                    className={`rounded-xl w-full h-[300px] md:h-[350px] bg-cover bg-center flex items-end justify-center ${aboutProduct ? "md:order-1" : "md:order-2"}`}
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                >
                    <div className="w-30 h-20 mb-4 bg-white rounded-md flex items-center justify-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SectionAbout;
