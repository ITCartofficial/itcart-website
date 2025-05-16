import React from "react"

export type OutlineBtnProps = {
    text: string
    icon?: React.ReactNode
    textColor?: string
    className?: string
    url?: string
    theme?: "dark" | "light"
}

export type TypographyProps = {
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
    theme?: "dark" | "light"
}

export type LogoBadgeProps = {
    src: string;
    alt: string;
    className?: string;
}

export type ImageInfoCardProps = {
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

export type AccordionProps = {
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

export type TestimonialCardProps = {
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
}

export interface CaseStudy {
    id: number
    title: string
    description: string
    image: string
    link: string
    linkText: string
}
