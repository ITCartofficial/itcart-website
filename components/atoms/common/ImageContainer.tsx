import Image from "next/image"

type ImageContainerProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

const ImageContainer = ({ src, alt, width, height, className }: ImageContainerProps) => {
    return (
        <>
            {
                (width && height) ? (
                    <Image
                        src={src}
                        alt={alt}
                        width={width || 400}
                        height={height || 300}
                        className={`object-cover ${className}`}
                    />
                ) : (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className={`object-cover ${className}`}
                    />
                )
            }
        </>
    )
}

export default ImageContainer