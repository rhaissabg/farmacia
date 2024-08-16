// import React from 'react'

import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="bg-purple-500 flex justify-center">
                <div className="container py-4 px-8 flex justify-between items-center">
                    <h1 className="text-4xl font-bold text-white">Vida Plena</h1>
                    <div className="flex justify-center gap-6 text-xl text-white">
                        <Link to='/home' className="hover:underline">Home</Link>
                        <p className="hover:underline">Categorias</p>
                        <p className="hover:underline">Remédios</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar