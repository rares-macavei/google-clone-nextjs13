"use client";

import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {BsFillMicFill} from 'react-icons/bs';
import { useRouter } from 'next/navigation';

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if(!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);

  }
  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
      if(!response) return;
      router.push(`/search/web?=searchTerm=${response}`);
      setRandomSearchLoading(false);
  }

  return (
    <>
        <form onSubmit={handleSubmit} className='flex w-full items-center mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
          <AiOutlineSearch className='text-4xl text-gray-500 mr-3 bg-transparent hover:bg-gray-200 rounded-full p-1.5 hover:cursor-pointer' onClick={handleSubmit}/>
          <input type='text' className='flex-grow focus:outline-none' onChange={(e) => setInput(e.target.value)} value={input} />
          <BsFillMicFill className='text-lg' />
        </form>

        <div className="flex flex-col mt-8 sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center">
          <button className='btn' onClick={handleSubmit}>Google Search</button>
          <button className='btn flex items-center justify-center disabled:opacity-80' disabled={randomSearchLoading} onClick={randomSearch}>
          {randomSearchLoading ? (
            <img src='spinner.svg' alt='loading...' className='h-6 text-center'/>)
            : (
              'I am Feeling Lucky'
            )
          }
          </button>
        </div>
    </>
  )
}
