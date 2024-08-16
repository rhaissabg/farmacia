import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './componentes/navbar/Navbar'
import Footer from './componentes/footer/Footer'
import Home from './paginas/home/Home'
import ListarCategorias from './componentes/categorias/listarCategorias/ListarCategorias'
import FormCategorias from './componentes/categorias/formCategorias/FormCategorias'
import DeletarCategoria from './componentes/categorias/deletarCategoria/DeletarCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80.8vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/categorias' element={<ListarCategorias />} />
            <Route path='/cadastrar' element={<FormCategorias />} />
            <Route path='/atualizar/:id' element={<FormCategorias />} />
            <Route path='/deletar/:id' element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
