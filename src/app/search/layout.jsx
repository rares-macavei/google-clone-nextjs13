import SearchHeader from '@/components/SearchHeader'
import './../globals.css'


export const metadata = {
  title: 'Google Clone NextJS',
  description: 'Google Clone created by Next JS 13',
}

export default function SearchLayout({ children }) {
  return (
    <body>
      {/* header */}
      <SearchHeader />
    
      {children}
    </body>
  );
}
