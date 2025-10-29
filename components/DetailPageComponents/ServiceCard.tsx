import Image from "next/image";
import GradientTitle from "../typography/GradientTitle"

interface ServiceCardItem {
    title: string;
    description: string;
    icon?: string;
    // Add other properties if needed
}

interface ServiceCardProps {
    serviceCardHeading?: string;
    serviceCardItems?: ServiceCardItem[];
    className?: string;
    itemePerRow?: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ className, serviceCardHeading, serviceCardItems, itemePerRow }) => {


    return (
        <section className={`w-full bg-black text-white px-6 py-0 ${className}`}>
            {/* Section Title */}
            <div className="max-w-5xl mx-auto text-center mb-8">
                <GradientTitle
                    text={serviceCardHeading ?? ""}
                    theme="dark"
                    className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight"
                />
            </div>


            <main className="bg-black px-4 py-1">
                <div className="mx-auto w-full">
                    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-${itemePerRow ? itemePerRow : 3}`}>
                        {(serviceCardItems ?? []).map((feature, index) => (
                            <div
                                key={index}
                                className={`rounded-3xl p-8 bg-zinc-900 hover:bg-[#2BADB7]  text-[#2BADB7] hover:text-white`}
                            >
                                <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2BADB7] overflow-hidden">
                                    <Image
                                        src={feature?.icon || "/fallback-icon.png"}
                                        alt={feature?.title || "icon"}
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                                <h3
                                    className={`mb-2 text-xl font-semibold `}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className={`text-sm leading-relaxed text-[#FFFFFF] `}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

        </section>
    )
}
export default ServiceCard

