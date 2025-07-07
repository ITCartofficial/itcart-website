import React from "react";
import Image from "next/image";


interface SlideCardProps {
    imgSrc: string;
    altText: string;
    position: "left" | "center" | "right" | "hidden";
}

const SlideCard: React.FC<SlideCardProps> = ({ imgSrc, altText, position }) => {
    const positionClasses = {
        left: "transform scale-90 rotate-[-6deg] -translate-x-[115%] translate-y-4 opacity-60 z-0",
        center: "transform scale-100 rotate-0 translate-x-0 translate-y-0 opacity-100 z-10",
        right: "transform scale-90 rotate-[6deg] translate-x-[115%] translate-y-4 opacity-60 z-0",
        hidden: "hidden",
    };


    return (
        <div
            className={`absolute top-0 transition-all duration-500 ease-in-out w-[70%] md:w-[40%] ${positionClasses[position]}`}
        >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                    src={imgSrc}
                    alt={altText}
                    width={800}
                    height={400}
                    className="w-full h-[300px] object-cover"
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default SlideCard;







// import React from "react";
// import Image from "next/image";

// interface SlideCardProps {
//     imgSrc: string;
//     altText: string;
//     title: string;
//     description: string;
//     position: "left" | "center" | "right" | "hidden";
// }

// const SlideCard: React.FC<SlideCardProps> = ({ imgSrc, altText, title, description, position }) => {
//     const positionClasses = {
//         left: "transform scale-90 -translate-x-[115%] opacity-60 z-0",
//         center: "transform scale-100 translate-x-0 opacity-100 z-10",
//         right: "transform scale-90 translate-x-[115%] opacity-60 z-0",
//         hidden: "hidden",
//     };

//     return (
//         <div
//             className={`absolute transition-all duration-500 ease-in-out w-[80%] md:w-[50%] ${positionClasses[position]}`}
//         >
//             <div className="flex flex-col">
//                 <div className="rounded-xl overflow-hidden shadow-xl">
//                     <Image
//                         src={imgSrc}
//                         alt={altText}
//                         width={800}
//                         height={400}
//                         className="w-full h-[300px] object-cover"
//                         loading="lazy"
//                     />
//                 </div>
                
//                 {/* Title and Description Below Image */}
//                 <div className="mt-4 px-2 text-center">
//                     <h3 className="text-white text-xl font-bold mb-2">
//                         {title}
//                     </h3>
//                     <p className="text-white/90 text-sm">
//                         {description}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SlideCard;








