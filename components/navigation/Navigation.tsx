"use client";

import React, { useState } from "react";
import NavLink from "@/components/common/NavLink";
// import Link from 'next/link'
import { navItems } from "@/lib/data/Menu";

type NavigationProps = {
  className?: string;
  isMobile: boolean;
  onLinkClick?: () => void;
  subMenu?: SubMenuItem[];
  setSubMenu?: (submenu: SubMenuItem[] | undefined) => void
};

type SubMenuItem = {
  label: string;
  href: string;
};


const Navigation: React.FC<NavigationProps> = ({
  className,
  isMobile,
  onLinkClick,
  // subMenu,
  setSubMenu,
}) => {

  // const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null
  );

  // const handleDesktopHover = (label: string | null) => {
  //   if (!isMobile) {
  //     // setActiveMenu(label);
  //   }
  // };

  const handleMobileSubmenuToggle = (label: string) => {
    if (isMobile) {
      setOpenMobileSubmenu(openMobileSubmenu === label ? null : label);
    }
  };

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
    setOpenMobileSubmenu(null);
  };

  return (
    <nav className={className || ""}>
      <ul
        className={`flex ${isMobile ? "flex-col" : "flex-row"} items-start ${isMobile ? "" : "lg:items-center"
          } ${isMobile ? "gap-0" : "gap-2 lg:gap-3"} relative z-50 ${isMobile ? "" : "whitespace-nowrap"
          }`}
      >
        {/* hover:text-cyan-300 */}
        {navItems.map((item, i) => (
          <li
            key={i}
            className={`relative group w-full ${isMobile ? "border-b border-slate-700 last:border-b-0" : ""
              }`}
            onMouseEnter={() => {
              setSubMenu?.(item.submenu);
              // handleDesktopHover(item.label)
            }}
            onMouseLeave={() => {
              // setSubMenu?.(undefined);
              // handleDesktopHover(null)
            }}
          >
            <NavLink
              href={item.href}
              hasDropdown={!!item.submenu}
              isMobile={isMobile}
              isSubmenuOpen={
                isMobile ? openMobileSubmenu === item.label : false
              }
              onDropdownClick={() => {
                setSubMenu?.(item.submenu);
                handleMobileSubmenuToggle(item.label)
              }}
            >
              <p
                // onClick={(e) => {
                //   e.preventDefault();
                //   setSubMenu?.(item.submenu)
                // }}
                className="flex items-center gap-1"
              >{item.label}</p>
            </NavLink>

            {/* Mobile Dropdown */}
            {
              item.submenu && isMobile && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-slate-800 ${openMobileSubmenu === item.label
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
                >
                  <ul className="py-2 pl-4 space-y-1">
                    {item.submenu.map((subItem, idx) => (
                      <li key={idx}>
                        <a
                          href={subItem.href}
                          style={{ scrollBehavior: "smooth" }}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-all duration-200"
                          onClick={handleLinkClick}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }
          </li>
        ))}
      </ul>


    </nav >
  );
};

export default Navigation;
