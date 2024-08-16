// import React from 'react'
import { Link } from 'react-router-dom'
import Categorias from '../../../models/categorias/Categorias'

interface CardCategoriasProps {
    categorias: Categorias
}

function CardCategorias({ categorias }: CardCategoriasProps) {

    return (
        <div className='border flex flex-col rounded-xl overflow-hidden justify-between shadow-sm'>
            <header className='py-2 px-6 bg-purple-500 text-white font-bold text-2xl'>Categoria</header>
            <p className='px-6 pt-4 text-3xl bg-slate-200 h-full'>{categorias.nome}</p>
            <p className='px-6 pt-2 pb-4 text-l bg-slate-200 h-full'>{categorias.descricao}</p>
            <div className="flex">
                <Link to={`/atualizar/${categorias.id}`} className='w-full text-slate-100 bg-purple-500  hover:bg-purple-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletar/${categorias.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategorias