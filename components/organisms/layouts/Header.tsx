'use client'
import React, { useEffect, useState } from 'react'
import Logo from "@/components/atoms/common/Logo"
import SearchButton from '@/components/atoms/common/SearchButton'
import Navigation from '@/components/molecules/navigation/Navigation'
import Link from 'next/link'
import OutlineBtn from '@/components/atoms/buttons/OutlineBtn'
import { FaArrowRight } from 'react-icons/fa6'
import MobileMenuButton from '@/components/atoms/buttons/MobileMenuButton'


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrollPosition > 30 ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between py-4 sm:py-1">
          {/* Logo (Left) */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <SearchButton />
            <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>

          {/* Desktop Navigation (Center) */}
          <div className="hidden lg:flex justify-center flex-1">
            <Navigation />
          </div>

          {/* Search and Contact Button (Right) */}
          <div className="w-[200px] hidden lg:flex items-center gap-4 flex-shrink-0">
            <SearchButton />
            <Link href="/contact">
              <OutlineBtn text="Contact us" textColor='#ffffff' icon={<FaArrowRight className="text-sm font-semibold text-white" />} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden w-full bg-slate-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-80 py-2' : 'max-h-0'
          }`}
      >
        <div className="container mx-auto px-4">
          <Navigation className="mb-3" />
          <Link href="/contact">
            <OutlineBtn text="Contact us" icon={<FaArrowRight className="text-sm font-semibold" />} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header