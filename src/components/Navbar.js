import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img className='h-16 w-20' src="https://png.pngtree.com/png-vector/20230105/ourmid/pngtree-book-icon-vector-image-png-image_6552370.png" alt="book-img" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Todolist</span>
        </div>
        </div>
        </nav>

    </div>
  )
}

export default Navbar
