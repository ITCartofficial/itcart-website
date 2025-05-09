import React from 'react'

type MobileMenuButtonProps = {
  isOpen: boolean
  onClick: () => void
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span 
        className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      ></span>
      <span 
        className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      ></span>
      <span 
        className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      ></span>
    </button>
  )
}

export default MobileMenuButton