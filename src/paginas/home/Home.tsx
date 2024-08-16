// import React from 'react'
import fotoHome from '../../assets/img/home.svg'
import ListarCategorias from '../../componentes/categorias/listarCategorias/ListarCategorias'

function Home() {
  return (
    <>
      <div className="bg-purple-500 flex justify-center flex-col items-center">
        <div className="container py-14 px-8 flex justify-center items-center gap-20">
          <div>
            <h1 className="text-white text-5xl font-bold mb-6">Bem vinde a farmácia Vida Plena</h1>
            <p className="text-white text-2xl max-w-[60ch]">Aqui, você encontra os melhores preços em produtos de saúde e bem-estar. Conte com a gente para cuidar de você e da sua família!</p>
          </div>
          <div>
            <img src={fotoHome} alt="Ilustração de atendimento em uma farmárcia" />
          </div>
        </div>
      </div>
      <div>
        <ListarCategorias />
      </div>
    </>
  )
}

export default Home