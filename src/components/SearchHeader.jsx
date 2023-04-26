import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchHeaderOptions from './SearchHeaderOptions'
import SearchBox from './SearchBox'
import { RiSettings3Line } from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full sm:p-6 px-3 py-6 items-center justify-between'>
        <div className="flex sm:ml-10">
          <Link href={"/"}>
            <Image width='100' height='40' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'/>
          </Link>
        </div>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className='header-icon'/>
          <TbGridDots className='header-icon'/>
        </div>
        <button className='bg-blue-500 text-white sm:px-6 px-3 py-2 rounded-md font-medium hover:brightness-105 hover:shadow-md transition-all space-x-2'>Sign In
        </button>
      </div>   
      <SearchHeaderOptions />
    </header>
  )
}
