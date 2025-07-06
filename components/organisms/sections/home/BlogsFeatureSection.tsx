import BodyText from "@/components/atoms/typography/BodyText"
import GradientTitle from "@/components/atoms/typography/GradientTitle"
import PostHighlights from "@/components/molecules/common/PostHighlights"

interface Featured {
    id?: string,
    image: string,
    title: string,
    date: string,
    author: string
    featured?: boolean
}

export default function BlogsFeatureSection({ posts }: { posts: Featured[] }) {
    const featured = posts.find(p => p.featured) || posts[0]
    const recent = posts.filter(p => !p.featured)

    return (
        <div className="bg-black lg:rounded-tl-[85px] lg:rounded-tr-[85px] overflow-hidden pt-4">
            <section className="bg-black text-white container mx-auto lg:px-10 py-16">
            <div className="flex flex-col gap-2 mb-8">
                <BodyText text="News & Blogs" className="text-[24px] font-semibold" color="#ffffff" />
                <GradientTitle text="Insights & Thought Leadership" theme="dark" className="text-[30px] lg:text-[50px] leading-tight w-full md:w-full lg:w-2/3" />
            </div>
            <PostHighlights featured={featured} recent={recent} />
        </section>
        </div>
    )
}