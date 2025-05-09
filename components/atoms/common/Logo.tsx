import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image 
        src="/IT Cart Logo Transparent.svg" 
        alt="ITCart Logo" 
        width={120} 
        height={32} 
        className="h-8 w-auto"
      />
    </Link>
  )
}

export default Logo