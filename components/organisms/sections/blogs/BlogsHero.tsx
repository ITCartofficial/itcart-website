import React from 'react'
import BodyText from '@/components/atoms/typography/BodyText';
import GradientTitle from '@/components/atoms/typography/GradientTitle';
import Link from 'next/link';


interface BreadcrumbItem {
    label: string;
    url: string;
}

interface BlogsHeroProps {
    title: string;
    description: string;
    breadcrumbItems: BreadcrumbItem[];
    className?: string;
}
const BlogsHero: React.FC<BlogsHeroProps> = ({ title,
    description,
    breadcrumbItems, }) => {
    return (
        <div className="container mx-auto text-center max-w-4xl">
            <GradientTitle
                text={title}
                theme="dark"
                className="text-4xl md:text-5xl lg:text-[64px] mb-4"
            />

            <nav className="flex justify-center text-sm mb-6">
                <ul className="flex items-center flex-wrap gap-2">
                    {breadcrumbItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <li>
                                <Link href={item.url} className="text-gray-300 hover:text-cyan-400 transition-colors">
                                    {item.label}
                                </Link>
                            </li>
                            {index < breadcrumbItems.length - 1 && (
                                <li className="text-gray-400">/</li>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </nav>
            <BodyText
                text={description}
                color="white"
                textAlign="center"
                className="text-lg"
            />
        </div>
    )
}

export default BlogsHero