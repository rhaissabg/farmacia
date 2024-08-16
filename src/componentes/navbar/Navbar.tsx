// import React from 'react'

import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="bg-purple-500 flex justify-center">
                <div className="container py-4 px-8 flex justify-between items-center">
                    <Link to='/home' className="text-4xl font-bold text-white">Vida Plena</Link>
                    <div className="flex justify-center gap-6 text-xl text-white">
                        <Link to='/home' className="hover:underline">Home</Link>
                        <Link to='/categorias' className="hover:underline">Categorias</Link>
                        <Link to='/cadastrar' className="hover:underline">Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar