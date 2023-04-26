import Link from 'next/link'
import React from 'react'

export default function ImagesearchResults({ results }) {
  return (
    <div className='pb-24 mt-4'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-3 space-x-4">
        {results.items.map((result) => (
          <div key={result.link} className="mb-3">
            <div className="group">
              <Link href={result.image.contextLink}>
                <img src={result.link} alt={result.title} className='h-60 w-full group-hover:shadow-xl object-contain transition-shadow' />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className='group-hover:underline truncate text-xl'>{result.title}</h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className='group-hover:underline text-gray-600'>{result.displayLink}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
