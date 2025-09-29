// import { FaUserGraduate, FaLightbulb } from "react-icons/fa";
// import GradientTitle from "../typography/GradientTitle";
// import OutlineBtn from "../buttons/OutlineBtn";
// import { FaArrowRight } from "react-icons/fa6";

// interface SkillGap {
//     gradient?: string;
//     title: string;
//     description: string;
//     icon?: string;
//     highlight?: string;
// }

// interface SkillGapSectionProps {
//     className?: string;
//     skillGapSection?: SkillGap[];
// }

// const SkillGapSection: React.FC<SkillGapSectionProps> = ({ className, skillGapSection }) => {

//     return (
//         <section className={`w-full bg-black text-white px-6 py-0 ${className}`}>
//             {/* Section Title */}
//             <div className="max-w-4xl mx-auto text-center mb-16">
//                 <GradientTitle
//                     text="Engineered with our users at the core"
//                     theme="dark"
//                     className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
//                 />
//             </div>

//             {/* Cards */}
//             <div className="max-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
//                 {(skillGapSection ?? []).map((item, index) => (
//                     <div
//                         key={index}
//                         className={`relative ${index > 0 && 'mt-10'} md:mt-0 rounded-xl border border-cyan-500/40 p-8 pt-14 flex flex-col items-center text-center space-y-4 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300`}
//                     >
//                         {/* Floating Icon */}
//                         <div className="absolute -top-10 flex justify-center w-full">
//                             <div className="flex justify-center items-center w-20 h-20 rounded-full bg-cyan-500 shadow-lg">
//                                 <img
//                                     src={item?.icon}
//                                     alt="Students learning"
//                                     className="w-10 h-10"
//                                 />
//                                 {/* src="/images/vertical/icons/leftarrow.png" */}
//                                 {/* {item.icon} */}
//                             </div>
//                         </div>

//                         {/* Title */}
//                         <h3 className="text-[20px] md:text-[25px] font-bold text-cyan-400">
//                             {item.title}
//                         </h3>

//                         {/* Description */}
//                         <p className="text-base text-gray-300">
//                             <span className="font-semibold text-white">{item.highlight}</span> –{" "}
//                             {item.description}
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             {/* CTA Button */}
//             <div className="w-full flex justify-center mt-12">
//                 <OutlineBtn
//                     url="/"
//                     text="Start your upgrade today"
//                     textColor="#ffffff"
//                     icon={<FaArrowRight className="text-sm font-semibold text-white" />}
//                 />
//             </div>
//         </section>
//     );
// };

// export default SkillGapSection;

import { FaArrowRight } from "react-icons/fa6";
import GradientTitle from "../typography/GradientTitle";
import OutlineBtn from "../buttons/OutlineBtn";

interface SkillGap {
    gradient?: string;
    title: string;
    description: string;
    icon?: string;
    highlight?: string;
}

interface SkillGapSectionProps {
    className?: string;
    skillGapSection?: SkillGap[];
}

const SkillGapSection: React.FC<SkillGapSectionProps> = ({ className, skillGapSection }) => {
    return (
        <section className={`w-full bg-black text-white px-6 py-0 ${className}`}>
            {/* Section Title */}
            <div className="max-w-5xl mx-auto text-center mb-16">
                <GradientTitle
                    text="Engineered with our users at the core"
                    theme="dark"
                    className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
                />
            </div>

            {/* Cards Grid */}
            {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */}
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap gap-10 justify-center">
                {(skillGapSection ?? []).map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full sm:w-[300px] md:w-[320px] lg:w-[360px] rounded-xl border border-cyan-500/40 p-10 pt-16 flex flex-col items-center text-center space-y-4 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                    >
                        {/* Floating Icon */}
                        <div className="absolute -top-10 flex justify-center w-full">
                            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-cyan-500 shadow-lg">
                                <img
                                    src={item?.icon}
                                    alt={item?.title || "icon"}
                                    className="w-10 h-10"
                                />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-[22px] md:text-[26px] font-bold text-cyan-400">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-gray-300">
                            <span className="font-semibold text-white">{item.highlight}</span>{" "}
                            – {item.description}
                        </p>
                    </div>
                ))}
            </div>


            {/* CTA Button */}
            <div className="w-full flex justify-center mt-12">
                <OutlineBtn
                    url="/"
                    text="Start your upgrade today"
                    textColor="#ffffff"
                    icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                />
            </div>
        </section>
    );
};

export default SkillGapSection;

