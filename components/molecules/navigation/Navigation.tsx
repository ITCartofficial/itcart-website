import React from 'react'
import NavLink from '@/components/atoms/common/NavLink'


type NavigationProps = {
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={`${className || ''}`}>
      <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-6">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/services" hasDropdown>Our Services</NavLink>
        </li>
        <li>
          <NavLink href="/solutions" hasDropdown>Our Solutions</NavLink>
        </li>
        <li>
          <NavLink href="/industries" hasDropdown>Industries</NavLink>
        </li>
        <li>
          <NavLink href="/company" hasDropdown>Company</NavLink>
        </li>
        <li>
          <NavLink href="/careers">Careers</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation




