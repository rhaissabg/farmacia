import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './componentes/navbar/Navbar'
import Footer from './componentes/footer/Footer'
import Home from './paginas/home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
