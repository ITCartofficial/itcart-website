"use client"
import Image from "next/image";
import GradientTitle from "../typography/GradientTitle";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

function Partners() {

    const partners = [
        {
            logo: "/images/ourpartners/Aintiram.png",
            alt: "Aintiram Web Tech logo",
            description:
                "A premier Salesforce Partner in Ohio, USA, driving business growth with innovative solutions, empowering clients for unparalleled success.",
        },
        {
            logo: "/images/ourpartners/APD.png",
            alt: "Association of People with Disability logo",
            description:
                "Leading non-profit organization empowering people with disabilities through inclusive education, healthcare, livelihood programs and community-based rehabilitation.",
        },
        {
            logo: "/images/ourpartners/asset.png",
            alt: "Asset Telematics logo",
            description:
                "Industry leader in cloud-based asset tracking and logistics solutions. Over 13 years of expertise in IoT, web, and mobile technologies.",
        },
        {
            logo: "/images/ourpartners/AssetMantle.png",
            alt: "AssetMantle logo",
            description:
                "AssetMantle pioneers tech-driven asset ownership. Innovative NFT marketplace solutions for transformative experiences, expertly crafted for unparalleled success.",
        },
    ];

    const [selected, setSelected] = useState("Everything");
    const [open, setOpen] = useState(false);

    const options = ["Everything", "Projects", "Events", "News"];

    return (
        <>

            <GradientTitle
                text={'Our Partners'}
                theme="dark"
                className="text-[22px] sm:text-[25px] md:text-[44px] w-[60%] text-center  mx-auto"
            />

            <div className="flex justify-center my-2">
                <div className="flex items-center gap-2 text-white text-lg font-medium">
                    <span>I want to check out</span>

                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="bg-[#45C2CC] text-white font-semibold px-4 py-2 rounded-md flex items-center gap-1 transition-all hover:bg-[#29c7da]"
                        >
                            {selected}
                            <FaChevronDown
                                className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {open && (
                            <ul className="absolute left-0 mt-1 bg-white text-black rounded-md shadow-lg overflow-hidden w-full">
                                {options.map((option) => (
                                    <li
                                        key={option}
                                        onClick={() => {
                                            setSelected(option);
                                            setOpen(false);
                                        }}
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>



            <div className="bg-black py-9 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="bg-[#111] rounded-2xl overflow-hidden border border-[#F0F0F0] hover:border-gray-600 transition-all duration-300"
                        >
                            <div className="flex justify-center items-center h-40 bg-[#F0F0F0] p-4">
                                <Image
                                    src={partner.logo}
                                    alt={partner.alt}
                                    width={200}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <div className="p-5 text-center">
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {partner.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Partners