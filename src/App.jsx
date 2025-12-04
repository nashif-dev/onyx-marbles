import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loader from './assets/Loader'
import Home from './assets/Home'
import Gallery from './pages.jsx/Gallery'
import NoPage from './components/NoPage'


function App() {

  const [loading,setLoading] = useState(true)
  setTimeout(() => { setLoading(false) }, 4000);

  return (
    <>
    <Routes>
      <Route path='/' element={loading?<Loader/>:<Home/>} />
      <Route path='/gallery' element={<Gallery/>} />
    

      <Route path='/*' element={<NoPage/>}/>
    </Routes>
    </>
  )
}

export default App
