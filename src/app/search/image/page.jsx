import ImagesearchResults from '@/components/ImagesearchResults';
import Link from 'next/link';
import React from 'react'

export default async function ImageSearchPage({searchParams}) {
  const startIndex = searchParams.start || "1";
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyAkbx_oKnwZ-jkmrtSUe8yencGTdlFva7U&cx=c138859fd3df342f4&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  )

  if(!response.ok) {
    throw new Error("Something went wrong.");
  }

  const data = await response.json()
  const results = data.items

  if(!results) {
    return <div className='flex justify-center flex-col items-center pt-10 '>
      <h1 className='text-3xl mb-4'>No result found</h1>
      <p className='text-lg'>Try searching something else or go back to the homepage.
      </p>
      <Link className='text-white bg-blue-500 px-4 py-2 rounded mt-5' href='/'>Home</Link>
    </div>
  }

  return (
    <>
      {results && <ImagesearchResults results={data} />}
    </>
  )
}
