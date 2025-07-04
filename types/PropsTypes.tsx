export type Theme = "dark" | "light";

export interface OutlineBtnProps {
    text: string
    icon?: React.ReactNode | "default"
    textColor?: string
    className?: string
    url?: string
    theme?: Theme
    onClick?: () => void
}

export interface TypographyProps {
    text: string
    fontSize?: React.CSSProperties["fontSize"]
    color?: string
    lineHeight?: React.CSSProperties["lineHeight"]
    fontWeight?: string
    textAlign?: React.CSSProperties["textAlign"]
    letterSpacing?: string
    textDecoration?: React.CSSProperties["textDecoration"]
    lineClamp?: number
    hoverColor?: string
    className?: string
    theme?: Theme
}

export interface LogoBadgeProps {
    src: string;
    alt: string;
    className?: string;
}

export interface ImageInfoCardProps {
    bgImage: string,
    title: string,
    description: string,
    height?: React.CSSProperties["height"],
    width?: React.CSSProperties["width"],
    titleSize?: string,
    descriptionSize?: string,
    lineClamp?: number
    className?: string;
}

export interface AccordionProps {
    title: string
    description: string
    titleSize?: string
    descriptionSize?: string
    lineClamp?: number
    textAlign?: React.CSSProperties["textAlign"]
    active?: boolean
    onClick?: () => void;
    imgUrl?: string
    index?: number
}

export interface FaqWithImageProps {
    faqsData: {
        id: number
        title: string
        description: string
        image: string
    }[]
    faqsCount?: number
    title?: string
}

export interface TestimonialCardProps {
    rating: number
    userName: string
    userDesignation: string
    userImage: string
    testimonialMessage: string
}

export type IconInfoCardProps = {
    bgImage: string,
    title: string,
    description: string;
    className?: string
    buttonUrl: string;
    logo: string
    logoBg: "dark" | "light"
}

export interface CaseStudy {
    id: number | string
    title: string
    description?: string
    image: string
    link: string
    linkText: string
}

export interface AddressCardProps {
    country: "India" | "US" | "Singapore" | "UAE" | "KSA",
    phone: string,
    email: string,
    location: string,
    mapUrl?: string,
}

export interface ExecutiveLeader {
    image: string;
    title: string;
    designation: string;
    desciption: string;
    matrics:
    {
        numericValue: number;
        title: string;
    }[]
    profileRef: string;
}

export interface GlobalStrategist {
    image: string;
    title: string;
    designation: string;
}

export interface Ambassador {
    image: string;
    title: string;
    designation: string;
    profileRef: string;
    matrics: {
        numericValue: number;
        title: string;
    }[];
}