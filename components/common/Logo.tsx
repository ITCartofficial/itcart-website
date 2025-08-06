import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex justify-center lg:justify-start">
      <Image 
        src="/IT Cart Logo Transparent.svg" 
        alt="ITCart Logo" 
        width={120} 
        height={32} 
        className="h-8 w-auto"
        loading="lazy"
      />
    </Link>
  )
}

export default Logo