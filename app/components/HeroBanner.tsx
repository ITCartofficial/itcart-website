'use client'

import React from 'react'
import Link from 'next/link'
import GradientTitle from '@/app/components/typography/GradientTitle';
import BodyText from '@/app/components/typography/BodyText';
import OutlineBtn from '@/app/components/buttons/OutlineBtn';
import { FaArrowRight } from 'react-icons/fa6';


interface BreadcrumbItem {
  label: string;
  url: string;
}

interface HeroBannerProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  breadcrumbItems: BreadcrumbItem[];
  backgroundImage?: string;
  className?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  description,
  ctaText,
  ctaUrl,
  breadcrumbItems,
  backgroundImage = '/images/services/service-bg.png',
  className = ''
}) => {
  return (
    <section className={`relative w-full bg-black text-white overflow-hidden ${className}`}>
      <div className="relative h-[40vh] sm:h-[40vh] md:h-[60vh] lg:h-[70vh] bg-gradient-to-t from-black/100 to-white">
        <div
          className="absolute inset-0 z-0 opacity-70"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Title and Breadcrumb Container */}
        <div className="container mx-auto px-4 relative z-10 pt-30 md:pt-35">
          {/* Title */}
          <GradientTitle 
            text={title} 
            theme="dark" 
            className="text-3xl sm:text-4xl md:text-[50px] text-center"
          />

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center text-sm">
            <ul className="flex items-center">
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  <li>
                    <Link href={item.url} className="text-gray-300 hover:text-cyan-400 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                  {index < breadcrumbItems.length - 1 && (
                    <li className="mx-2 text-gray-400">
                      /
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Description and CTA Content (below the wave) */}
      {
        description && (
          <div className="container mx-auto px-4 ">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              {/* Description */}
              <BodyText
                text={description}
                color="#ffffff"
                className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 lg:mb-10"
              />

              {/* CTA Button */}
              {
                ctaText && (
                  <OutlineBtn
                    text={ctaText}
                    icon={<FaArrowRight size={16} />}
                    url={ctaUrl}
                    theme="dark"
                    className="mt-2"
                  />
                )
              }
            </div>
          </div>
        )
      }
    </section>
  )
}

export default HeroBanner;