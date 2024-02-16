import React from 'react'

function NavOptModal({ onClose }) {
  return (
    <div className="absolute w-48 bg-white shadow-lg z-50" onMouseLeave={onClose}>
      <ul className="py-1 text-left">
        <li className="px-4 py-2 text-sky-900 border-b-2 border-blue-200 border-opacity-25 hover:bg-gray-200 hover:text-sky-950 hover:font-bold cursor-pointer">Markets</li>
        <li className="px-4 py-2 text-sky-900 hover:bg-gray-200 border-b-2 border-blue-200 border-opacity-25 hover:text-sky-950 hover:font-bold cursor-pointer">Business</li>
        <li className="px-4 py-2 text-sky-900 hover:bg-gray-200 border-b-2 border-blue-200 border-opacity-25 hover:text-sky-950 hover:font-bold cursor-pointer">Investing</li>
        <li className="px-4 py-2 text-sky-900 hover:bg-gray-200 border-b-2 border-blue-200 border-opacity-25 hover:text-sky-950 hover:font-bold cursor-pointer">Tech</li>
        <li className="px-4 py-2 text-sky-900 hover:bg-gray-200 border-b-2 border-blue-200 border-opacity-25 hover:text-sky-950 hover:font-bold cursor-pointer">Politics</li>
        {/* Add more categories as needed */}
      </ul>
    </div>
  )
}

export default NavOptModal