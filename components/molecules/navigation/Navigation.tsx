'use client'

import React, { useState } from 'react'
import NavLink from '@/components/atoms/common/NavLink'
import Link from 'next/link'

type NavigationProps = {
  className?: string
}

// Define your navigation items with optional submenus
import { navItems } from '@/lib/data/Menu'

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const handleHover = (label: string | null) => {
    setActiveMenu(label)
  }

  console.log(activeMenu)
  return (
    <nav className={className || ''}>
      <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-6 relative z-50">
        {navItems.map((item, i) => (
          <li
            key={i}
            className="relative group"
            onMouseEnter={() => handleHover(item.label)}
            onMouseLeave={() => handleHover(null)}
          >
            <NavLink href={item.href} hasDropdown={!!item.submenu}>
              <span className="flex items-center gap-1">
                {item.label}
              </span>
            </NavLink>
            {item.submenu && (
              <ul
                className={`absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-md py-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:visible invisible`}
              >
                {item.submenu.map((subItem, idx) => (
                  <li key={idx}>
                    <Link
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation


// import React from 'react'
// import NavLink from '@/components/atoms/common/NavLink'


// type NavigationProps = {
//   className?: string
// }

// const Navigation: React.FC<NavigationProps> = ({ className }) => {
//   return (
//     <nav className={`${className || ''}`}>
//       <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-6">
//         <li>
//           <NavLink href="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink href="/services" hasDropdown>Our Services</NavLink>
//         </li>
//         <li>
//           <NavLink href="/solutions" hasDropdown>Our Solutions</NavLink>
//         </li>
//         <li>
//           <NavLink href="/industries" hasDropdown>Industries</NavLink>
//         </li>
//         <li>
//           <NavLink href="/company" hasDropdown>Company</NavLink>
//         </li>
//         <li>
//           <NavLink href="/careers">Careers</NavLink>
//         </li>
//       </ul>
//     </nav>
//   )
// }

// export default Navigation

