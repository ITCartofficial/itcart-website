import Image from "next/image";
import GradientTitle from "../typography/GradientTitle";
interface SubItem {
    item: string;
    content: string;
}


interface ContentItem {
    id: number | string;  // Allow both number and string
    title: string;
    content: string[];
    subItems?: SubItem[];
    subItemTitle?: string;
    finalPoint?: string;
}

interface FilteredData {
    bannerTitle: string;
    bannerDiscription: string;
    type?: string;
    writtenBy?: string;
    writtenDate?: string;
    contents: ContentItem[];
}

const SectionBanner = ({ filterdData }: { filterdData: FilteredData }) => {
    return (
        <div className="w-full bg-black px-6 lg:px-10 ">
            <div className="px-6 lg:px-15 mx-auto flex flex-col md:flex-row items-start md:items-center md:gap-12">

                {/* LEFT SECTION */}
                <div className="flex-1">
                    {/* Breadcrumb */}
                    <p className="text-gray-400 text-sm mb-3">
                        Blog › How to Build...
                    </p>

                    {/* Title */}
                    <GradientTitle
                        text={filterdData?.bannerTitle}
                        theme="dark"
                        className={`text-[26px] mb-3 lg:items-start sm:text-[32px] md:text-[40px]  w-full lg:w-[90%] leading-[1.2]`}
                    />
                    <div className="md:block hidden">
                        {/* Description */}
                        <p className="text-gray-300 text-[18px] leading-[1.3] mb-6">
                            {filterdData?.bannerDiscription}
                        </p>

                        {/* Author + Date */}
                        <p className="text-gray-400 text-sm">
                            by {filterdData?.writtenBy} &nbsp;–&nbsp; {filterdData?.writtenDate}
                        </p>
                    </div>

                </div>

                {/* RIGHT SECTION — IMAGE */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src={"/images/vertical/section2Image.png"}
                        alt={"Blog Image"}
                        width={600}
                        height={500}
                        className=" object-cover w-full max-w-[600px] "
                    />
                </div>

                <div className="block md:hidden mt-3">
                    {/* Description */}
                    <p className="text-gray-300 text-[16px] leading-[1.3] mb-3 md:mb-6">
                        Learn how to build and deploy your digital transformation
                        roadmap effectively. Learn key components and focus areas
                        to align technology...
                    </p>

                    {/* Author + Date */}
                    <p className="text-gray-400 text-[14px]">
                        by Akshay Chakrapani &nbsp;–&nbsp; 24 April 2025
                    </p>
                </div>

            </div>
        </div>
    )
}
export default SectionBanner;

