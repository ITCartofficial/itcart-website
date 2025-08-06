import React from 'react'

type MobileMenuButtonProps = {
  isOpen: boolean
  onClick: () => void
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative z-60"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <span 
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out absolute ${
          isOpen ? 'rotate-45' : '-translate-y-1.5'
        }`}
      />
      <span 
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
      />
      <span 
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out absolute ${
          isOpen ? '-rotate-45' : 'translate-y-1.5'
        }`}
      />
    </button>
  )
}

export default MobileMenuButton