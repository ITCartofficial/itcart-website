import React from "react"

export type TypographyProps = {
    text: string
    fontSize: string
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