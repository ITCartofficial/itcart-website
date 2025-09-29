import GradientTitle from "../typography/GradientTitle";

interface VerticalContentSection2Props {
    aboutProduct?: boolean;
    className?: string;
    contentOne?: string;
    contenttwo?: string;
    image?: string;
    contentthree?: string

}

const VerticalContentSection2: React.FC<VerticalContentSection2Props> = ({ aboutProduct, className, contentOne, contenttwo, image, contentthree }) => {
    return (
        <section className="w-full bg-black text-white px-6 py-1">
            <div
                className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${className}`}
            >
                {/* Left Content */}
                <div className={`space-y-6 ${aboutProduct ? "md:order-2" : "md:order-1"}`}>
                    {aboutProduct &&
                        <GradientTitle
                            text="About This"
                            theme="dark"
                            className="text-[22px] sm:text-[25px] md:text-[30px] w-full lg:w-[50%]"
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
                    {/* contentthree */}
                </div>

                {/* Right Image */}
                <div className={`flex justify-center ${aboutProduct ? "md:order-1" : "md:order-2"}`}>
                    <img
                        src={image}
                        alt="VR Learning"
                        className="rounded-xl w-full max-w-md md:max-w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default VerticalContentSection2;
