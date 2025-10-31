// 'use client'

// import React from 'react'
// import Link from 'next/link'
// import GradientTitle from '@/components/typography/GradientTitle';
// import BodyText from '@/components/typography/BodyText';
// import OutlineBtn from '@/components/buttons/OutlineBtn';
// import { FaArrowRight } from 'react-icons/fa6';


// interface BreadcrumbItem {
//   label: string;
//   url: string;
// }

// interface HeroBannerProps {
//   title: string;
//   description?: string;
//   ctaText?: string;
//   ctaUrl?: string;
//   breadcrumbItems: BreadcrumbItem[];
//   backgroundImage?: string;
//   className?: string;
//   isCunsultNow?: boolean;

// }

// const HeroBanner: React.FC<HeroBannerProps> = ({
//   title,
//   description,
//   ctaText,
//   ctaUrl,
//   breadcrumbItems,
//   backgroundImage = '/images/services/service-bg.png',
//   className = '',
//   isCunsultNow
// }) => {
//   return (
//     <section className={`relative w-full bg-black text-white overflow-hidden mt-7  ${className} `}>
//       <div className="relative h-[60vh] sm:h-[60vh] md:h-[vh] lg:h-[75vh] bg-gradient-to-t ">
//         <div
//           className="absolute inset-0 z-0 "
//           style={{
//             backgroundImage: `url(${backgroundImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // background:'red'
//           }}
//         />

//         {/* Title and Breadcrumb Container */}
//         <div className="container mx-auto px-4 relative z-10 pt-25 md:pt-30 ">

//           <nav className="flex items-center justify-center text-[20px] ">
//             <ul className="flex items-center">
//               {breadcrumbItems.map((item, index) => (
//                 <React.Fragment key={index}>
//                   <li>
//                     <Link href={item.url} className="text-gray-300 text-[14px] hover:text-cyan-400 transition-colors">
//                       {item.label}
//                     </Link>
//                   </li>
//                   {index < breadcrumbItems.length - 1 && (
//                     <li className="mx-2 text-[14px] text-gray-400">
//                       /
//                     </li>
//                   )}
//                 </React.Fragment>
//               ))}
//             </ul>
//           </nav>
//           {/* Title */}
//           <GradientTitle
//             text={title}
//             theme="dark"
//             className="text-3xl sm:text-4xl md:text-[64px] text-center py-4 "
//           />

//           {
//             !isCunsultNow && description && (
//               <div className="container mx-auto px-4">
//                 {/* mt-[200px]  */}
//                 <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
//                   {/* Description */}
//                   <BodyText
//                     text={description}
//                     color="#ffffff"
//                     className="text-sm sm:text-base md:text-lg mb-6 md:mb-4 lg:mb-4"
//                   />

//                   {/* CTA Button */}
//                   {ctaText && (
//                     <OutlineBtn
//                       text={ctaText}
//                       icon={<FaArrowRight size={16} />}
//                       url={ctaUrl}
//                       theme="dark"
//                       className="mt-0"
//                     />
//                   )}
//                 </div>
//               </div>
//             )
//           }

//           {
//             isCunsultNow && description && (
//               <div className="container mx-auto px-4">
//                 <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
//                   {/* Description */}
//                   <BodyText
//                     text={description}
//                     color="#ffffff"
//                     className="text-sm sm:text-base md:text-lg my-5"
//                   />

//                   {/* CTA Button */}
//                   {ctaText && (
//                     <OutlineBtn
//                       text={ctaText}
//                       icon={<FaArrowRight size={16} />}
//                       url={ctaUrl}
//                       theme="dark"
//                       className="mt-2"
//                     />
//                   )}
//                 </div>
//               </div>
//             )
//           }



//         </div>
//       </div>


//     </section>
//   )
// }

// export default HeroBanner;













'use client'

import React from 'react'
import Link from 'next/link'
import GradientTitle from '@/components/typography/GradientTitle'
import BodyText from '@/components/typography/BodyText'
import OutlineBtn from '@/components/buttons/OutlineBtn'
import { FaArrowRight } from 'react-icons/fa6'

interface BreadcrumbItem {
  label: string
  url: string
}

interface HeroBannerProps {
  title: string
  description?: string
  ctaText?: string
  ctaUrl?: string
  breadcrumbItems: BreadcrumbItem[]
  backgroundImage?: string
  className?: string
  isCunsultNow?: boolean
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  description,
  ctaText,
  ctaUrl,
  breadcrumbItems,
  backgroundImage = '/images/services/service-bg.png',
  className = '',
  isCunsultNow
}) => {
  return (
    <section
      className={`relative w-full bg-black text-white overflow-hidden mt-7 ${className}`}
    >
      <div className="relative h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] bg-gradient-to-t">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-between">
          {/* Breadcrumb + Title at the Top */}
          <div className="pt-24">
            <nav className="flex items-center justify-center text-[20px]">
              <ul className="flex items-center">
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <li>
                      <Link
                        href={item.url}
                        className="text-gray-300 text-[14px] hover:text-cyan-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                    {index < breadcrumbItems.length - 1 && (
                      <li className="mx-2 text-[14px] text-gray-400">/</li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </nav>

            <GradientTitle
              text={title}
              theme="dark"
              className="text-3xl sm:text-4xl md:text-[64px] text-center py-4"
            />
          </div>

          {/* Description + CTA at the Bottom */}
          {!isCunsultNow && description && (
            <div className="pb-12 ">
              <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-20">
                <BodyText
                  text={description}
                  color="#ffffff"
                  className="text-sm sm:text-base md:text-lg mb-6 md:mb-4 lg:mb-4"
                />
                {ctaText && (

                  <div className='mt-3'>
                    <OutlineBtn
                      text={ctaText}
                      icon={<FaArrowRight size={16} />}
                      url={ctaUrl}
                      theme="dark"
                      className="mt-0"
                    />
                  </div>

                )}
              </div>
            </div>
          )}

          {/* Alternate Layout for Consult Now Section */}
          {isCunsultNow && description && (
            <div className="pb-12">
              <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                <BodyText
                  text={description}
                  color="#ffffff"
                  className="text-sm sm:text-base md:text-lg my-5"
                />
                {ctaText && (
                  <OutlineBtn
                    text={ctaText}
                    icon={<FaArrowRight size={16} />}
                    url={ctaUrl}
                    theme="dark"
                    className="mt-2"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
