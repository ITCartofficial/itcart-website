import Image from "next/image";
import GradientTitle from "../typography/GradientTitle";

interface VerticalContentSection2Props {
    aboutProduct?: boolean;
    className?: string;
    contentOne?: string;
    contenttwo?: string;
    image?: string;
    contentthree?: string;
    VerticalContentSection2Heading?: string;
}

const VerticalContentSection2: React.FC<VerticalContentSection2Props> = ({ aboutProduct, className, contentOne, contenttwo, image, contentthree, VerticalContentSection2Heading }) => {
    return (
        <section className="w-full bg-black text-white px-6 py-1">
            <div
                className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center ${className}`}
            >
                {/* Left Content */}
                <div className={`space-y-6 ${aboutProduct ? "md:order-2" : "md:order-1"}`}>

                    <GradientTitle
                        text={VerticalContentSection2Heading ?? ''}
                        theme="dark"
                        className="text-[30px] sm:text-[25px] md:text-[30px] w-full text-center md:text-start"
                    />


                    <p className="text-[16px] leading-relaxed  text-center md:text-start">
                        {contentOne}
                    </p>
                    <p className="text-[16px] leading-relaxed  text-center md:text-start">
                        {contenttwo}
                    </p>
                    <p className="text-[16px] leading-relaxed  text-center md:text-start">
                        {contentthree}
                    </p>
                </div>

                <div className={`flex justify-center ${aboutProduct ? "md:order-1" : "md:order-2"}`}>
                    <Image
                        src={image || "/placeholder.png"} // fallback in case image is undefined
                        alt="VR Learning"
                        width={600} // set explicit width
                        height={400} // and height for layout stability
                        className="rounded-xl w-full max-w-md md:max-w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default VerticalContentSection2;


