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
        {
            logo: "/images/ourpartners/Aufait.png",
            alt: "Aufait logo",
            description:
                "Aufait specializes in enabling tech adoption, encompassing Enterprise 2.0, Mobility, Cloud Solutions, Intranet/Internet Portals, DMS and Workflow/BPM.",
        },
        {
            logo: "/images/ourpartners/AufaitUX.png",
            alt: "AufaitUX logo",
            description:
                "An award-winning UI/UX company with a team of experienced professionals who are passionate about creating products that people love to use.",
        },
        {
            logo: "/images/ourpartners/BeneAI.webp",
            alt: "BeneAI logo",
            description:
                "A leading provider of cutting-edge AI solutions, driving innovation across various technology fields with advanced artificial intelligence services.",
        },
        {
            logo: "/images/ourpartners/Billon.png",
            alt: "Billon logo",
            description:
                "Billon pioneers a high-performance DLT system for currencies, documents, and identity, aiming to be the backbone for transformative blockchain applications.",
        },
        {
            logo: "/images/ourpartners/Boyot.webp",
            alt: "Boyot logo",
            description:
                "Boyot is a comprehensive digital property management platform, enabling seamless management of real estate properties & efficient online collections.",
        },
        {
            logo: "/images/ourpartners/BusinessDev.png",
            alt: "Business Development logo",
            description:
                "The leading global provider of innovative cloud computing and IT solutions, pioneering services across multiple technology domains.",
        },
        {
            logo: "/images/ourpartners/CMetric.webp",
            alt: "CMetric logo",
            description:
                "A Microsoft Silver Partner, delivers IT solutions and services, specializing in technology automation and back-office solutions for diverse industries.",
        },
        {
            logo: "/images/ourpartners/Centilytics.webp",
            alt: "Centilytics logo",
            description:
                "Revolutionizes cloud management, evolving from cost analysis to a comprehensive platform, ensuring efficiency, accountability and seamless scalability.",
        },  
        {
            logo: "/images/ourpartners/CyberPWN.png",
            alt: "Cyber PWN logo",
            description:
                "CYBERPWN is a trusted Next-Gen Digital Defense Consulting firm with over 20 years of cybersecurity expertise, offering custom solutions and quality service.",
        }, 
        {
            logo: "/images/ourpartners/Cyraacs.webp",
            alt: "Cyraacs logo",
            description:
                "Cyber Risk Advisory and Consulting Services (CyRAACS) was established to provide robust & sustainable cyber security solutions to organizations.",
        }, 
        {
            logo: "/images/ourpartners/E2ECloud.png",
            alt: "E2E Cloud logo",
            description:
                "Meet the Team that Transformed India’s Cloud Computing Landscape. E2E Network has been on a mission to simplify cloud computing for you.",
        },  
        {
            logo: "/images/ourpartners/Edubild.webp",
            alt: "Edubild logo",
            description:
                "Edubild pioneers AI-driven platforms for skill assessment and employability enhancement, recognized by AICTE and iStem, Government of India.",
        }, 
        {
            logo: "/images/ourpartners/Emizentech.webp",
            alt: "Emizentech logo",
            description:
                "Emizentech implements the best industrial processes and technologies to assist clients in transforming their vision into actionable software solutions.",
        },  
        {
            logo: "/images/ourpartners/Esds.webp",
            alt: "ESDS logo",
            description:
                "ESDS, born with a global mindset, drives digital transformation by uniting minds to deliver innovative solutions and outstanding customer experiences.",
        },  
        {
            logo: "/images/ourpartners/EXPRealty.png",
            alt: "EXP Realty logo",
            description:
                "Leading cloud-based real estate brokerage, leveraging technology-driven solutions to empower agents and deliver seamless property transactions worldwide.",
        },  
        {
            logo: "/images/ourpartners/Facephi.webp",
            alt: "face Phi logo",
            description:
                "The leading global provider of cutting-edge user identification technology, pioneering digital onboarding and biometric authentication solutions.",
        },  
        {
            logo: "/images/ourpartners/Facto.png",
            alt: "Facto logo",
            description:
                "Facto ensures efficient, accurate, and hassle-free HR experiences, ISO-certified digital platform for background verifications. 1000+ customers, 1 million+ cases verified.",
        }, 
        {
            logo: "/images/ourpartners/Fireflink.webp",
            alt: "Fireflink logo",
            description:
                "Build test scripts 4X faster with FireFlink. Speed up test executions and achieve hassle-free maintenance of your automated tests.",
        }, 
        {
            logo: "/images/ourpartners/FNS.png",
            alt: "FNS Son logo",
            description:
                "FNS M SDN. BHD. innovates in passwordless blockchain secure authentication with patented Kernel Chain Core, ensuring a swift, user-friendly and secure environment.",
        }, 
        {
            logo: "/images/ourpartners/GeoPITS.webp",
            alt: "Geo Pits logo",
            description:
                "A certified Microsoft Partner, excelling in SQL Server solutions, remote support, optimization and delivering cost-effective high-quality services globally.",
        },
        {
            logo: "/images/ourpartners/GIOStar.png",
            alt: "GIO Star logo",
            description:
                "Pioneering provider of stem cell therapies in India, leveraging over a decade of research to deliver innovative healthcare solutions and transform lives.",
        },
        {
            logo: "/images/ourpartners/GPSRealty.png",
            alt: "GPS Realty logo",
            description:
                "Trusted real estate firm specializing in personalized property solutions, offering expert guidance to help clients navigate real estate investments seamlessly.",
        },
        {
            logo: "/images/ourpartners/GreatMigrations.png",
            alt: "Great Migrations logo",
            description:
                "Offers enterprise system reengineering tools and expertise to efficiently optimize and modernize business-critical software assets and applications.",
        },
        {
            logo: "/images/ourpartners/GreneRobotics.png",
            alt: "Grene Robotics logo",
            description:
                "With over a decade of AI-led R&D expertise, a multinational B2B/B2G autonomous robotics company that delivers bespoke aerial & autonomous solutions.",
        },
        {
            logo: "/images/ourpartners/HelloSpace.png",
            alt: "Hello Space logo",
            description:
                "Pioneering the global IoT connectivity, HELLOSPACE utilizes advanced pocketqube satellites, delivering the reliable data communication to industries worldwide.",
        },
        {
            logo: "/images/ourpartners/IPro.png",
            alt: "i-Pro logo",
            description:
                "I-Pro Infinity empowers businesses with holistic risk management, expert insurance advice and efficient, swift claim recovery solutions for optimal protection.",
        },
        {
            logo: "/images/ourpartners/Kumanu.png",
            alt: "Kumanu logo",
            description:
                "Innovative well-being and behavioral science company, utilizing AI-driven solutions to enhance workplace resilience, engagement and mental well-being.",
        },
        {
            logo: "/images/ourpartners/Lia.png",
            alt: "Lia logo",
            description:
                "Lia Infraservices was established in the year 2016, a top rated cloud infrastructure and solutions provider using AWS, Azure platforms.",
        },
        {
            logo: "/images/ourpartners/MertSoftware.png",
            alt: "Mert Software logo",
            description:
                "A tech leader delivering MES (Manufacturing Execution Systems) solutions with precision, innovation, & dedicated support for optimum business performance.",
        },
        {
            logo: "/images/ourpartners/Muhdo.png",
            alt: "Muhdo logo",
            description:
                "Leader in DNA and epigenetics testing, offering personalized health and fitness insights to help individuals optimize their well-being and performance.",
        },
        {
            logo: "/images/ourpartners/NeoSoft.png",
            alt: "Neo Soft logo",
            description:
                "A global technology firm, holding SEI-CMMI Level 5 accreditation, renowned for delivering exceptional IT consulting and cutting-edge software solutions worldwide.",
        },
        {
            logo: "/images/ourpartners/NextMs.png",
            alt: "Next Ms logo",
            description:
                "Leading the tech-driven revolution in business excellence. Innovative software solutions, expert training, and personalized expertise for unparalleled success.",
        },
        {
            logo: "/images/ourpartners/Osborn.png",
            alt: "Os Born logo",
            description:
                "Osborn is a global leader in surface treatment and finishing solutions, providing customers with expert-level application solutions.",
        },
        {
            logo: "/images/ourpartners/Pradeo.png",
            alt: "Pradeo logo",
            description:
                "A leading mobile security company providing innovative solutions to protect enterprises from mobile threats, and compliance risks etc.",
        },
        {
            logo: "/images/ourpartners/Qrtd.png",
            alt: "QRTD logo",
            description:
                "The IT arm of ACEC Group. QRTD, a trusted solution provider on a mission to transform and protect your Company with IT and Cybersecurity services.",
        },
        {
            logo: "/images/ourpartners/Shravas.png",
            alt: "Shravas logo",
            description:
                "An ISO-certified company, specializes in outsourced software testing and QA solutions with a commitment to integrity and client-centric relationships.",
        },
        {
            logo: "/images/ourpartners/Tacnique.png",
            alt: "Tacnique logo",
            description:
                "Revolutionize your tech hiring process with Tacnique's virtual interview platform. Streamline your hiring solutions and find top tech talent from anywhere.",
        },
        {
            logo: "/images/ourpartners/Techsolve.png",
            alt: "Techsolve logo",
            description:
                "Trusted IT consulting firm, experts in Azure solutions with an experienced consultant team delivering excellence in infrastructure services.",
        },
        {
            logo: "/images/ourpartners/Tenjin.png",
            alt: "Tenjin logo",
            description:
                "A Yethi Consulting subsidiary, elevates QA beyond BFSI, pioneering innovation, automation, and tailored solutions for diverse industries' success.",
        },
        {
            logo: "/images/ourpartners/TAT.png",
            alt: "TAT logo",
            description:
                "Thinkatronics is a top IT service and solution provider that delivers innovative, cutting-edge technology solutions that drive growth and success across the globe.",
        },
        {
            logo: "/images/ourpartners/TMS.png",
            alt: "TMS logo",
            description:
                "Pioneering provider of Transcranial Magnetic Stimulation (TMS) therapy, delivering cutting-edge mental health treatments for long-lasting patient outcomes."
        },
        {
            logo: "/images/ourpartners/Toledo.png",
            alt: "Toledo logo",
            description:
                "World-renowned museum dedicated to inspiring creativity and learning, featuring exceptional art collections, educational programs, and cultural experiences."
        },
        {
            logo: "/images/ourpartners/TruGlobal.png",
            alt: "TRU Global logo",
            description:
                "A California-based leader in digital transformation, providing technology services and solutions to Fortune 500 companies globally."
        },
        {
            logo: "/images/ourpartners/Undaku.png",
            alt: "Undaku logo",
            description:
                "Undaku breaks down digital barriers for businesses with a no-code platform allowing anyone on your team to build intent-based apps easily."
        },
        {
            logo: "/images/ourpartners/Urovo.png",
            alt: "Urovo logo",
            description:
                "One of the earliest enterprises in China, specializing in smart data terminals. With a global presence, delivers innovative digital solutions."
        },
        {
            logo: "/images/ourpartners/WalkingTree.png",
            alt: "WalkingTree logo",
            description:
                "Global product development leader delivering end-to-end solutions in mobile and web technologies, ensuring exceptional user experiences with agile practices."
        },
        {
            logo: "/images/ourpartners/Xaltius.png",
            alt: "xaltius logo",
            description:
                "Fueling the business excellence through cutting-edge software solutions, training, and personalized expertise, the driving force for successful digital transformations."
        },
        {
            logo: "/images/ourpartners/YelloStack.png",
            alt: "yelloStack logo",
            description:
                "Yello Stack innovates with responsive tech solutions, ethical practices, and a dedicated client growth focus, ensuring transformative experience in every interaction."
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
                            <div className="p-5">
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
export default Partners;