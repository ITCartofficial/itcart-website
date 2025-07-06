import React from "react";
// import Link from 'next/link'
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  isMobile?: boolean;
  isSubmenuOpen?: boolean;
  onDropdownClick?: () => void;
  onLinkClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  hasDropdown = false,
  isMobile = false,
  isSubmenuOpen = false,
  onDropdownClick,
  onLinkClick,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const handleMainLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onDropdownClick) {
      onDropdownClick();
    }
  };

  const baseClasses = `
    relative transition-colors duration-300 group
    ${
      isMobile
        ? "text-white text-base hover:text-blue-200 hover:bg-slate-800 rounded-md w-full"
        : "px-2 py-1 lg:py-2 text-white text-sm hover:text-blue-200 whitespace-nowrap flex-shrink-0"
    }
    ${isActive ? "text-blue-200" : ""}
  `;

  if (hasDropdown && isMobile) {
    return (
      <div className={`${baseClasses} flex items-center justify-between`}>
        {/* Main link that navigates to the page */}
        <a
          href={href}
          className="flex-1 px-4 py-4 flex items-center"
          onClick={handleMainLinkClick}
        >
          <div className="flex items-center gap-1">{children}</div>
        </a>

        {/* Separate dropdown toggle button */}
        <button
          onClick={handleDropdownToggle}
          className="px-4 py-4 hover:bg-slate-700 rounded-r-md transition-colors duration-200 flex-shrink-0"
          type="button"
          aria-label={`Toggle ${children} submenu`}
        >
          <FiChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isSubmenuOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
    );
  }

  // Desktop dropdown or regular link
  const linkContent = (
    <div
      className={`flex items-center ${
        isMobile ? "justify-between w-full" : "gap-1"
      }`}
    >
      <div className="flex items-center gap-1">{children}</div>
      {hasDropdown && (
        <FiChevronDown
          className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${
            isMobile
              ? isSubmenuOpen
                ? "rotate-180"
                : "rotate-0"
              : "group-hover:rotate-180"
          }`}
        />
      )}
    </div>
  );

  return (
    <a
      href={href}
      className={`${baseClasses} ${
        isMobile
          ? "px-4 py-4 flex items-center justify-between"
          : "flex items-center"
      }`}
      onClick={handleMainLinkClick}
    >
      {linkContent}
    </a>
  );
};

export default NavLink;
