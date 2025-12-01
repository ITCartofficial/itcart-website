import React from 'react'
import BodyText from '@/components/typography/BodyText';
import GradientTitle from '@/components/typography/GradientTitle';
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
    reduceTitle?: boolean;
}
const BlogsHero: React.FC<BlogsHeroProps> = ({ title,
    description,
    breadcrumbItems, reduceTitle }) => {
    return (
        <div className="container mx-auto text-center">
            <nav className="flex justify-center text-sm mb-3">
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
            <GradientTitle
                text={title}
                as="h1"
                theme="dark"
                className="text-4xl  md:text-[64px] mb-4"
            />

            {
                reduceTitle ?
                    <div className='w-full flex justify-center'>
                        <BodyText
                            text={description}
                            color="white"
                            textAlign="center"
                            className="text-lg w-[90%] lg:w-[70%] text-[16px] md:text-[20px]"
                        />
                    </div>
                    :
                    <BodyText
                        text={description}
                        color="white"
                        textAlign="center"
                        className="text-lg"
                    />
            }


        </div>
    )
}

export default BlogsHero