import React from 'react'
import { MdOutlineSearch } from "react-icons/md";


const SearchButton: React.FC = () => {
  return (
    <button className="p-2 text-white hover:text-blue-200 transition-colors duration-300">
      <MdOutlineSearch className='text-3xl'/>
    </button>
  )
}

export default SearchButton
