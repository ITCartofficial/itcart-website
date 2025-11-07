import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex justify-center lg:justify-start">
      <Image 
        src="/IT Cart Logo Transparent.svg" 
        alt="iTCart Logo" 
        width={120} 
        height={32} 
        className="h-8 w-auto"
        loading="lazy"
      />
    </Link>
  )
}

export default Logo




// "use client"
// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import { verticalData } from '@/lib/data/verticalData'

// const Logo: React.FC = () => {


//   const pathName = usePathname()?.split('/')

//   const filterdItem = verticalData.find(item => item.compenyName === pathName[2])?.compenyLogo

//   console.log("filterdItem", filterdItem);

//   return (
//     <Link href="/" className="flex justify-center lg:justify-start">
//       <Image
//         src={(pathName[1] === "our-verticals" && pathName?.length == 3) ? verticalData.find(item => item.compenyName === pathName[2])?.compenyLogo : "/IT Cart Logo Transparent.svg"}
//         // src={pathName == "abc" ? '' : `/IT Cart Logo Transparent.svg`}
//         alt="ITCart Logo"
//         width={120}
//         height={32}
//         className="h-8 w-auto"
//         loading="lazy"
//       />
//     </Link>
//   )
// }

// export default Logo