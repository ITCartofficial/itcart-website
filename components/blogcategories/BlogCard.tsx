"use client";
import React from 'react';
import Image from 'next/image';
import GradientTitle from '@/components/typography/GradientTitle';
import BodyText from '@/components/typography/BodyText';
import { usePathname, useRouter } from 'next/navigation';
import OutlineBtn from '../buttons/OutlineBtn';
import { FaArrowRight } from 'react-icons/fa6';


interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    linkText?: string;
    linkUrl?: string;
    className?: string;
    id?: number | string
    url?: string;
}

const BlogCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    imageSrc = "/images/default-service.jpg",
    imageAlt = "Service illustration",
    className = "",
    id,
    url
}) => {

    const router = useRouter();

    const convertToSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    };

    return (
        <div
            onClick={() => router.push(`/blogs/${url}`)}
            className={`flex flex-col w-full max-w-max overflow-hidden rounded-3xl bg-black cursor-pointer ${className}`}>
            <div className="relative h-96">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={imageAlt || title}
                        fill
                        className="object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-800" />
                )}

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

                <div className="absolute bottom-0 left-0 w-full py-4 px-6">
                    <GradientTitle
                        text={`${title.split(" ").slice(0, 4).join(" ")}...`}
                        theme="dark"
                        className="text-4xl"
                    />
                </div>
            </div>

            <div className="flex flex-col flex-grow py-4 px-6 bg-black">
                <BodyText
                    text={description}
                    color="rgba(255, 255, 255, 0.8)"
                    lineHeight="1.5"
                    className="text-sm mb-4"
                />

                <div className="mt-auto">
                    <OutlineBtn
                        url={`/blogs/${url}`}
                        text={"View More"}
                        textColor='#ffffff'
                        icon={<FaArrowRight className="text-sm font-semibold text-white" />}
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogCard;