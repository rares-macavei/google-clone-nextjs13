"use client"

import { useSearchParams, useRouter } from 'next/navigation'

import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { BsFillMicFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'


export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  function handleSubmit(e) {
    e.preventDefault();
    if(!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`)
  }

  return (
    <form className='flex items-center border border-gray-200 rounded-full shadow-md px-6 py-1 sm:ml-10 ml-3 sm:mr-5 mr-3 flex-grow max-w-2xl' onSubmit={handleSubmit}>
      <input 
        type="text"
        className='w-full focus:outline-none' 
        value={term} 
        onChange={(e) => setTerm(e.target.value)} 
        value={term} 
      />
      <RxCross2 className='text-2xl text-gray-500 cursor-pointer sm:mr-2 mr-[-20px]' onClick={() => setTerm("")}/> 
      <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3' /> 
      <AiOutlineSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer' onClick={handleSubmit}/> 
    </form>
  )
}
