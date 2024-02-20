import Link from 'next/link'
import React from 'react'
import data from './json/NavOptJSON.json'

function NavOptModal({ type, onClose }) {
  let categories = data
  let items = categories[type]

  return (
    <div className="absolute w-48 bg-white shadow-lg z-50"  onMouseLeave={onClose}>
      <ul className="py-1 text-left">
        {
          items.map((item) => (
            <li className="px-4 py-2 text-sky-900 border-b-2 border-blue-200 border-opacity-25 hover:bg-gray-200 hover:text-sky-950 hover:font-bold cursor-pointer">
              <Link href={`${item.ref}`}>{item.category}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default NavOptModal