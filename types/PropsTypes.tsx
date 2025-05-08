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
}