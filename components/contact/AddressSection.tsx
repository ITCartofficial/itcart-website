// import BannerContainer from "@/components/common/BannerContainer"
// import AddressCard from "@/components/cards/AddressCard"
// import { AddressCardProps } from "@/types/PropsTypes"

// const AddressSection = ({ addressList }: { addressList: AddressCardProps[] }) => {
//     return (
//         <BannerContainer
//             bgImage="/images/contact/contact-bg.jpg"
//             className="bg-bottom bg-no-repeat bg-contain sm:bg-fit sm:bg-center"
//         >
//             <div className="lg:px-10 lg:py-16 h-full grid lg:grid-cols-4 gap-8 mx-19 mx-10 md:mx-10 lg:mx-6 ">
//                 {addressList.map((address, i) => (
//                     <AddressCard
//                         key={i}
//                         country={address.country}
//                         email={address.email}
//                         location={address.location}
//                         phone={address.phone}
//                         mapUrl={address.mapUrl || ""}
//                     />
//                 ))}
//             </div>
//         </BannerContainer>
//     )
// }

// export default AddressSection
"use client"

import { useLayoutEffect, useState } from "react";
import BannerContainer from "@/components/common/BannerContainer";
import AddressCard from "@/components/cards/AddressCard";
import { AddressCardProps } from "@/types/PropsTypes";

const AddressSection = ({ addressList }: { addressList: AddressCardProps[] }) => {
    const [bgImage, setBgImage] = useState<string | null>(null);

    useLayoutEffect(() => {
        const updateBg = () => {
            if (window.innerWidth < 640) {
                setBgImage("/images/contact/contact-bg-small.jpg");
            } else {
                setBgImage("/images/contact/contact-bg.jpg");
            }
        };
        updateBg();

        window.addEventListener("resize", updateBg);
        return () => window.removeEventListener("resize", updateBg);
    }, []);

    // 🧩 Don’t render until bgImage is known (avoids flicker)
    if (!bgImage) return null;

    return (
        <BannerContainer
            bgImage={bgImage}
            className="bg-bottom bg-no-repeat bg-contain sm:bg-cover sm:bg-center pb-30 md:pb-0"
        >
            <div className="px-6 sm:px-10 lg:px-16 py-10 lg:py-16 h-full grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
                {addressList.map((address, i) => (
                    <AddressCard
                        key={i}
                        {...address}
                        mapUrl={address.mapUrl || ""}
                    />
                ))}
            </div>
        </BannerContainer>
    );
};

export default AddressSection;
