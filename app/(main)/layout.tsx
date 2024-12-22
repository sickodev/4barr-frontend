import Navbar from '@/components/shared/navbar'
import React from 'react'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='relative h-full'>
      {children}
      <Navbar/>
    </main>
  )
}

export default MainLayout