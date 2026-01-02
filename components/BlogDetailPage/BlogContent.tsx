import { FaInstagram, FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";
import CaseStudyCard from "../cards/CaseStudyCard";
import GradientTitle from "../typography/GradientTitle";
import Image from "next/image";

interface SubItem {
    item: string;
    content: string;
}

interface ContentItem {
    id: number | string;
    title: string;
    image?: string;
    content: string[];
    subItems?: SubItem[];
    subItemTitle?: string;
    finalPoint?: string;
}

interface FilteredData {
    bannerTitle: string;
    bannerDiscription: string;
    writtenBy?: string;
    writtenDate?: string;
    contents: ContentItem[];
}

export function parseContentWithLinks(content: string) {
    // Detects: <link text="Explore" url="https://bmw.com" />
    const linkRegex = /<link text="(.*?)" url="(.*?)"\s*\/>/g;

    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
        const [fullMatch, text, url] = match;

        // Add the text before the link
        if (match.index > lastIndex) {
            parts.push(content.substring(lastIndex, match.index));
        }

        // Add the clickable link
        parts.push(
            <a
                key={match.index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3cd1ff] underline hover:text-white"
            >
                {text}
            </a>
        );

        lastIndex = match.index + fullMatch.length;
    }

    // Add text after last link
    if (lastIndex < content.length) {
        parts.push(content.substring(lastIndex));
    }

    return parts;
}

const BlogContentss = ({ filterdData }: { filterdData: FilteredData }) => {
    const caseStudyData = {
        id: '1',
        title: "Experience a multi-functional AI-native platform",
        image: "/images/blogs/blog-featured-2.png",
        link: "/contact",
        linkText: "Contact Us",
        author: "John Doe",
        date: "2024-06-01",
        imageUrl: "/images/blogs/blog-featured-2.png",
        bannerImage: "/images/blogs/blog-banner-2.jpg",
        description: "Discover how our AI-native platform can transform your business operations.",
        slug: "AI-native-platform",
        category: "",
        content: [
            {
                title: "Overview",
                content: "This case study explores the features and benefits of our multi-functional AI-native platform, showcasing real-world applications and results.",
            }
        ],
    }

    return (
        <div className="w-full bg-black text-white px-2 lg:px-10">
            <div className="px-2 lg:px-15 grid grid-cols-1 md:grid-cols-3 gap-16">

                {/* LEFT SECTION: TABLE OF CONTENTS */}
                <div className="md:col-span-2">
                    <div className="bg-[#191919] rounded-md p-8 shadow-md mb-10">
                        <GradientTitle
                            text={"Table of contents:"}
                            theme="dark"
                            className={`text-[26px] lg:items-start sm:text-[32px] md:text-[36px]  w-full mb-4 leading-[1.2]`}
                        />

                        <ul className="space-y-2 text-lg underline underline-offset-4">
                            {
                                filterdData?.contents?.map((data, index) =>
                                    <li onClick={() => {
                                        const section = document.getElementById(`section-${index}`);
                                        section?.scrollIntoView({ behavior: "smooth" });
                                    }} key={index} className={`text-[16px] cursor-pointer hover:text-cyan-300`}> {parseContentWithLinks(data?.title)}</li>
                                )
                            }
                        </ul>
                    </div>

                    {/* CONTENT SECTION */}
                    <div className="space-y-3 text-gray-300 leading-relaxed text-[16px]">
                        {
                            filterdData?.contents?.map((data, index) =>
                                <div key={index} id={`section-${index}`}>
                                    <GradientTitle
                                        text={data?.title}
                                        theme="dark"
                                        className={`text-[26px] mb-3 lg:items-start sm:text-[32px] md:text-[36px]  w-full lg:w-[80%] leading-[1.2]`}
                                    />

                                    {
                                        data?.content?.map((content: string, index: number) =>
                                            <>
                                                <p key={index} className={`text-[16px] ${index != 0 ? "mt-2" : "mt-0"}`}>
                                                    {parseContentWithLinks(content)}
                                                </p>
                                            </>

                                        )
                                    }

                                    {
                                        data?.image && (
                                            <Image
                                                width={500}
                                                height={300}
                                                alt="image"
                                                src={data?.image}
                                                // className={`mb-3 mt-3 lg:items-start  w-full lg:w-[100%] leading-[1.2] rounded-xl`}
                                                className="mb-3 mt-3 w-full h-[350px] object-cover rounded-xl
    "
                                            />
                                        )
                                    }


                                    <ul className="list-disc list-outside text-white leading-relaxed space-y-3 pl-6 mt-4">
                                        {
                                            data?.subItems?.map((items, index) =>
                                                <>
                                                    <div className="flex">
                                                        <p className="font-bold text-[18px]">{index + 1}.</p>
                                                        <p className="ml-3"> {parseContentWithLinks(items?.item)}</p>
                                                    </div>

                                                    <p className="text-[16px]">
                                                        {parseContentWithLinks(items?.content)}
                                                    </p>
                                                </>

                                            )
                                        }

                                    </ul>
                                    <p className="text-[14px]">
                                        {parseContentWithLinks(data?.finalPoint ?? "")}
                                    </p>

                                </div>
                            )
                        }



                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="flex flex-col items-center md:items-start gap-10">

                    {/* PROMO IMAGE CARD */}
                    <div className="w-full max-w-[380px] bg-[#111] rounded-2xl overflow-hidden shadow-lg">
                        <div className='col-span-1 md:col-span-1 h-[350px] md:h-100 order-1 md:order-2'>
                            <CaseStudyCard card={caseStudyData} />
                        </div>
                    </div>

                    {/* SOCIAL CONNECT */}
                    <div className="w-full flex flex-col items-center justify-center" >
                        {/* <h3 className="text-xl font-semibold mb-3 text-[#3cd1ff]">Stay Connected</h3> */}
                        <GradientTitle
                            text={"Stay Connected"}
                            theme="dark"
                            className={`text-[19px] mb-3 lg:items-start sm:text-[22px] md:text-[25px] leading-[1.2]`}
                        />
                        <div className="flex items-center gap-6 text-xl">
                            <FaInstagram className="cursor-pointer hover:text-[#3cd1ff]" />
                            <FaXTwitter className="cursor-pointer hover:text-[#3cd1ff]" />
                            <FaLinkedin className="cursor-pointer hover:text-[#3cd1ff]" />
                            <FaFacebook className="cursor-pointer hover:text-[#3cd1ff]" />
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
export default BlogContentss;
