import React from "react";

export interface VideoContainerProps {
    src: string;
    poster?: string;
    bgClass?: string;
    children?: React.ReactNode;
}

const VideoContainer: React.FC<VideoContainerProps> = ({
    src,
    poster,
    bgClass,
    children,
}) => {
    return (
        <div className="relative w-full min-h-max h-full">
            <div className={`absolute inset-0 lg:w-full h-full lg:top-0 ${bgClass}`}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={poster}
                    className={`w-full h-full object-cover `}
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/100 z-10"></div>
            </div>
            <div className="relative z-10 h-sceen w-full lg:py-20 container mx-auto px-4 md:px-10">
                {children}
            </div>

        </div>
    );
};

export default VideoContainer;

<div className="absolute inset-0 w-full h-full">
    <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
    >
        <source src="/videos/home-banner.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/100 z-10"></div>
</div>
