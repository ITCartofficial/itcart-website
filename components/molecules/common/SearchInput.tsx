'use client'

import React from 'react'
import { FiSearch } from 'react-icons/fi'

interface SearchInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  value = '',
  onChange,
  className = '',
}) => {
  return (
    <div className={`flex items-center border border-white rounded-md px-3 py-2 bg-transparent ${className}`}>
      <FiSearch className="text-white mr-2" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
      />
    </div>
  )
}

export default SearchInput
