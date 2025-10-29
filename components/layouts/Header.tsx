'use client'

import React, { useEffect, useState } from 'react'
import Logo from "@/components/common/Logo"
// import SearchButton from '@/components/atoms/common/SearchButton'
import Navigation from '@/components/navigation/Navigation'
import OutlineBtn from '@/components/buttons/OutlineBtn'
import { FaArrowRight } from 'react-icons/fa6'
import MobileMenuButton from '@/components/buttons/MobileMenuButton'

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

  // Close mobile menu when clicking outside or on links
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrollPosition > 30 ? 'bg-black backdrop-blur-sm shadow-lg' : 'bg-black'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo (Left) */}
          <div className="flex-shrink-0 z-60">
            <Logo />
          </div>

          {/* Mobile Menu Button and Search */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* <SearchButton /> */}
            <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>

          {/* Desktop Navigation (Center) */}
          <div className="hidden lg:flex justify-center flex-1">
            <Navigation isMobile={false} />
          </div>

          {/* Search and Contact Button (Right - Desktop) */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0 min-w-[200px] justify-end">
            {/* <SearchButton /> */}
            <OutlineBtn
              text="Contact us"
              url="/contact-us"
              textColor='#ffffff'
              icon={<FaArrowRight className="text-sm font-semibold text-white" />}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] sm:top-[68px] bg-black/50 backdrop-blur-sm transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Mobile Menu Content */}
        <div
          className={`bg-slate-900/95 backdrop-blur-md w-full min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-68px)] transition-transform duration-300 ease-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container mx-auto px-4 sm:px-6 py-6">
            {/* Mobile Navigation */}
            <Navigation
              isMobile={true}
              className="mb-6"
              onLinkClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Contact Button */}
            <div className="pt-4 border-t border-slate-700">
              <OutlineBtn
                url='/contact-us'
                text="Contact us"
                textColor='#ffffff'
                icon={<FaArrowRight className="text-sm font-semibold text-white" />}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header












