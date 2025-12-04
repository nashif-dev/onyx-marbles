import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loader from './assets/Loader'
import Home from './assets/Home'



function App() {

  const [loading,setLoading] = useState(true)
  setTimeout(() => { setLoading(false) }, 5000);

  return (
    <>
    <Routes>
      <Route path='/' element={loading?<Loader/>:<Home/>}>

      </Route>
    </Routes>
    </>
  )
}

export default App
