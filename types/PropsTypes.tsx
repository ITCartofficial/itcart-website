import React from "react"

export type TypographyProps = {
    text: string
    fontSize: React.CSSProperties["fontSize"]
    color?: string
    lineHeight?: React.CSSProperties["lineHeight"]
    fontWeight?: string
    textAlign?: React.CSSProperties["textAlign"]
    letterSpacing?: string
    textDecoration?: React.CSSProperties["textDecoration"]
    lineClamp?: number
    hoverColor?: string
    className?: string
}

export type LogoBadgeProps = {
    src: string;
    alt: string;
}

export type ImageInfoCardProps = {
    bgImage: string,
    title: string,
    description: string,
    height: React.CSSProperties["height"],
    width: React.CSSProperties["width"],
    titleSize?: string,
    descriptionSize?: string,
    lineClamp?: number
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
}

export type FaqWithImageProps = {
    faqsData: {
        id: number
        title: string
        description: string
        image: string
    }[]
    faqsCount?: number
}