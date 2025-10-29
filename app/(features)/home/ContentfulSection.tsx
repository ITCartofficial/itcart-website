// "use client"
// import BodyText from '@/components/typography/BodyText'
// import GradientTitle from '@/components/typography/GradientTitle'
// import React, { useLayoutEffect, useState } from "react";

// type ContentfulSectionProps = {
//     title: string
//     description: string
//     bgImage: string
//     bgImageMobile?: string
// }

// const ContentfulSection: React.FC<ContentfulSectionProps> = ({ title, description, bgImage, bgImageMobile }) => {

//     const [isMobile, setIsMobile] = useState(false)

//     useLayoutEffect(() => {
//         const handleResize = () => setIsMobile(window.innerWidth < 1024);

//         handleResize(); // set immediately on mount
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const activeBg = isMobile && bgImageMobile ? bgImageMobile : bgImage

//     console.log("activeBg", activeBg);


//     const descriptions = description.split('<br>');

//     return (
//         <div
//             className="w-full min-h-[400px]  bg-cover bg-no-repeat md:px-10 px-4 lg:rounded-[48px] overflow-hidden"
//             style={{ backgroundImage: `url(${activeBg})` }}
//         >
//             <div
//                 className="w-full h-full"
//                 style={{ background: 'linear-gradient(-90deg, rgba(0, 0, 0, 0.00) 0%, #000 85%)' }}
//             >
//                 <div className="container mx-auto py-6 lg:px-10 lg:py-16 flex flex-col gap-4 justify-center">
//                     <GradientTitle
//                         text={title}
//                         theme="dark"
//                         className="text-[24px] lg:text-[30px] leading-tight lg:w-2/4"
//                     />

//                     <div className="flex flex-col gap-2 lg:w-[50%]">
//                         {descriptions && descriptions.length > 0 ? (
//                             descriptions.map((text, i) => (
//                                 <BodyText
//                                     key={i}
//                                     text={text.trim()}
//                                     className={`text-[16px] lg:text-[18px] font-normal text-white my-1 ${descriptions.length - 1 == i ? 'font-bold leading-tight' : ''
//                                         }`}
//                                 />
//                             ))
//                         ) : (
//                             <BodyText
//                                 text={description}
//                                 className="text-[16px] lg:text-[18px] font-normal text-white"
//                             />
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ContentfulSection


"use client"
import BodyText from '@/components/typography/BodyText'
import GradientTitle from '@/components/typography/GradientTitle'
import React, { useLayoutEffect, useState } from "react";

type ContentfulSectionProps = {
    title: string
    description: string
    bgImage: string
    bgImageMobile?: string
}

const ContentfulSection: React.FC<ContentfulSectionProps> = ({ title, description, bgImage, bgImageMobile }) => {

    const [isMobile, setIsMobile] = useState(false)

    useLayoutEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const activeBg = isMobile && bgImageMobile ? bgImageMobile : bgImage

    console.log("activeBg", activeBg);

    const descriptions = description.split('<br>');

    return (
        <div
            className="relative w-full min-h-[800px] md:min-h-[400px] bg-cover bg-center bg-no-repeat md:px-10 px-4 lg:py-0 lg:rounded-[48px] overflow-hidden"
            style={{ backgroundImage: `url(${activeBg})` }}
        >
            {/* ✅ Gradient Overlay covering entire section */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(-90deg, rgba(0, 0, 0, 0.00) 0%, #000 85%)',
                }}
            ></div>

            {/* ✅ Content on top of the gradient */}
            <div className="relative z-10 w-full h-full flex items-center py-6 md:py-0">
                <div className="container mx-auto lg:px-10 lg:py-16 flex flex-col gap-4 justify-center">
                    <GradientTitle
                        text={title}
                        theme="dark"
                        className="text-[24px] lg:text-[30px] leading-tight lg:w-2/4 px-4"
                    />

                    <div className="flex flex-col gap-2 lg:w-[50%]">
                        {descriptions && descriptions.length > 0 ? (
                            descriptions.map((text, i) => (
                                <BodyText
                                    key={i}
                                    text={text.trim()}
                                    className={`text-[16px] lg:text-[18px] font-normal text-white my-1 ${descriptions.length - 1 == i ? 'font-bold leading-tight' : ''
                                        }`}
                                />
                            ))
                        ) : (
                            <BodyText
                                text={description}
                                className="text-[16px] lg:text-[18px] font-normal text-white"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContentfulSection