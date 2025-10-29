// import Image from "next/image";
// import BodyText from "../typography/BodyText";
// import GradientTitle from "../typography/GradientTitle";

// interface SolutionGridProps {
//     className?: string;
//     CapabilitySections?: {
//         gradient?: string; // 👈 make optional
//         title: string;
//         description: string;
//         icon: string;
//         image?: string;
//     }[];
//     capabilitiSectionHeading?: string;
//     capabilitiSectionDescription?: string;

// }

// export default function SolutionGrid({ className = "", CapabilitySections = [], capabilitiSectionHeading, capabilitiSectionDescription }: SolutionGridProps) {

//     return (
//         <>
//             <div className={`w-full bg-black text-white px-6 py-0 ${className}`}>

//                 <div className="max-w-5xl mx-auto text-center mb-16">
//                     <GradientTitle
//                         text={capabilitiSectionHeading ?? ''}
//                         theme="dark"
//                         className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
//                     />

//                     <BodyText
//                         text={capabilitiSectionDescription ?? ''}
//                         color="#ffffff"
//                         className="text-[16px] mt-3"
//                     />
//                 </div>

//                 <main className="bg-black py-2 px-4">
//                     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {CapabilitySections.map((service, index) => (
//                             <div
//                                 key={index}
//                                 className="rounded-2xl overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-all duration-300 border border-[#45C2CC] "
//                             >
//                                 {/* Image Section */}
//                                 {/* <div className="relative w-full md:w-1/2 h-52 md:h-auto overflow-hidden bg-red-400"> */}
//                                 {/* <Image
//                                         src={service?.image ?? ""}
//                                         alt={service.title}
//                                         fill
//                                         className="object-cover"
//                                     /> */}
//                                 {/* </div> */}

//                                 <div className="relative w-full md:w-1/2 h-52 md:h-auto overflow-hidden bg-[url('/images/industries/travelTourism-solution5.png')] bg-cover bg-center">
//                                 </div>

//                                 <div className="p-6 flex flex-col  md:w-1/2">
//                                     <div className="bg-teal-500 rounded-full w-10 h-10 flex items-center justify-center mb-0">
//                                         <Image
//                                             src={service.icon}
//                                             alt="icon"
//                                             width={20}
//                                             height={20}
//                                             className="object-contain"
//                                         />
//                                     </div>
//                                     <div className="flex items-center gap-3 my-3">
//                                         <h3 className="text-lg md:text-xl font-semibold text-[#45C2CC]">
//                                             {service.title}
//                                         </h3>
//                                     </div>
//                                     <p className="text-gray-300 text-sm md:text-base leading-relaxed">
//                                         {service.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </main>


//             </div>
//         </>
//     )
// }




import Image from "next/image";
import BodyText from "../typography/BodyText";
import GradientTitle from "../typography/GradientTitle";

interface SolutionGridProps {
    className?: string;
    CapabilitySections?: {
        gradient?: string;
        title: string;
        description: string;
        icon: string;
        image: string;
    }[];
    capabilitiSectionHeading?: string;
    capabilitiSectionDescription?: string;
}

export default function SolutionGrid({
    className = "",
    CapabilitySections = [],
    capabilitiSectionHeading,
    capabilitiSectionDescription
}: SolutionGridProps) {
    return (
        <div className={`w-full bg-black text-white px-4 sm:px-6 ${className}`}>
            {/* Header Section */}
            <div className="max-w-5xl mx-auto text-center mb-12 sm:mb-16">
                <GradientTitle
                    text={capabilitiSectionHeading ?? ''}
                    theme="dark"
                    className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
                />
                <BodyText
                    text={capabilitiSectionDescription ?? ''}
                    color="#ffffff"
                    className="text-[14px] sm:text-[16px] mt-3"
                />
            </div>

            {/* Grid Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 auto-rows-fr">
                {CapabilitySections.map((service, index) => (
                    <div
                        key={index}
                        className="rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#45C2CC] text-[#45C2CC] 
                        bg-[#1B1B1B] hover:text-white hover:bg-[#45C2CC]"
                    >
                        <div className="flex flex-col sm:flex-row h-full">
                            <div className="relative w-full sm:w-[45%] h-64 sm:h-auto flex-shrink-0 overflow-hidden ">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 45vw"
                                    className="object-cover"
                                    priority={index < 2}
                                />
                            </div>

                            <div className="w-full sm:w-[55%] p-6 sm:p-8 flex flex-col">
                                <div className="bg-[#45C2CC] rounded-full w-14 h-14 flex items-center justify-center mb-4 flex-shrink-0">
                                    <Image
                                        src={service.icon}
                                        alt={`${service.title} icon`}
                                        width={28}
                                        height={28}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-xl sm:text-2xl font-semibold  mb-4 leading-tight">
                                    {service.title}
                                </h3>

                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}