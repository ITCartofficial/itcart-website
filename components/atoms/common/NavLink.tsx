import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiChevronDown } from "react-icons/fi";


type NavLinkProps = {
  href: string
  children: React.ReactNode
  hasDropdown?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, hasDropdown = false }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`relative px-3 py-1 lg:py-2 text-white text-sm hover:text-blue-200 transition-colors duration-300 group ${
        isActive ? 'text-blue-200' : ''
      }`}
    >
      <div className="flex items-center gap-1">
        {children}
        {hasDropdown && (
          <FiChevronDown className="w-4 h-4 mt-0.5 transition-transform duration-300 group-hover:rotate-180"/>
        )}
      </div>
    </Link>
  )
}

export default NavLink