import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from './assets/Loader'
import Home from './assets/Home'
import Gallery from './pages.jsx/Gallery'
import NoPage from './components/NoPage'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { setLoading(false); }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className={loading ? "opacity-0" : "animate-[reveal_500ms_ease-out_forwards]"}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin" element={<adminHome />} />

          <Route path="/*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;