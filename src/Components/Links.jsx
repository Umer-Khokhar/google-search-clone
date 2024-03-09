import React from 'react'
import { NavLink } from 'react-router-dom'

const  myLinks = [
    { url: "/search", text : "🔍 All"},
    // { url: "/images", text : "🧗‍♂️ Images"},
]

export const Links = () => {
  return (
    <div className='flex justify-center'>
      {myLinks.map(({ url, text }) => (
        <NavLink to={url} key={url} className={(e) => e.isActive ? 'border-b border-sky-400 pb-2 m-2 p-2 dark:text-gray-200 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700': 'm-2 p-2 rounded-md dark:text-gray-200 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700' }>{text}</NavLink>
      ))}  
    </div>
  )
}
