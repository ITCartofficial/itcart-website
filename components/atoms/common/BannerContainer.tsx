
const BannerContainer = ({ children, bgImage, className }:
    {
        children: React.ReactNode;
        bgImage: string;
        className?: string;
    }) => {
    return (
        <div className={`lg:min-h-[560px] w-full relative ${className}`}
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {children}
        </div>
    )
}

export default BannerContainer