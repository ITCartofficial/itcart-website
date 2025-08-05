'use client'

import BodyText from '@/components/typography/BodyText'
import GradientTitle from '@/components/typography/GradientTitle'
import React from 'react'


export interface ContentItem {
  title: string
  content: string | string[]
  isHTML?: boolean
}

export interface ContentSectionProps {
  items: ContentItem[]
  theme?: "dark" | "light"
  className?: string
  titleClassName?: string
  textClassName?: string
}

const ContentSection: React.FC<ContentSectionProps> = ({
  items,
  theme = "dark",
  className = "",
  titleClassName = "",
  textClassName = ""
}) => {
  // Function to render HTML content
  const renderHTMLContent = (content: string, className?: string) => {
    return (
      <div 
        className={`text-sm md:text-base ${className || ""}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  // Function to render plain text content using BodyText component
  const renderPlainContent = (content: string, className?: string) => {
    return (
      <BodyText 
        text={content} 
        className={`text-sm md:text-[18px] ${className || ""}`}
      />
    );
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="space-y-4">
          <GradientTitle 
            text={item.title} 
            theme={theme} 
            className={`text-xl md:text-4xl ${titleClassName}`}
          />
          
          {Array.isArray(item.content) ? (
            <div className="space-y-4">
              {item.content.map((paragraph, pIndex) => (
                <React.Fragment key={pIndex}>
                  {item.isHTML 
                    ? renderHTMLContent(paragraph, textClassName)
                    : renderPlainContent(paragraph, textClassName)
                  }
                </React.Fragment>
              ))}
            </div>
          ) : (
            item.isHTML 
              ? renderHTMLContent(item.content, textClassName)
              : renderPlainContent(item.content, textClassName)
          )}
        </div>
      ))}
    </div>
  )
}

export default ContentSection