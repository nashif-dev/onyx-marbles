import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'


function Home() {
  return (
    <div className='flex flex-col'>
    <Header/>
    <div className="text-5xl flex-1 bg-red-500">home
        </div>
    <Footer/>    
    </div>
  )
}

export default Home