"use client"
import React, { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
      <h1 className='text-3xl mb-4'>Something went wrong</h1>
      <button className='text-white bg-blue-500 px-5 py-3 rounded' onClick={() => reset()}>Try again</button>
    </div>
  )
}
