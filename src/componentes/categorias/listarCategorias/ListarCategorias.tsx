// import React from 'react'

import { useEffect, useState } from "react"
import CardCategorias from "../cardCategorias/CardCategorias"
import Categorias from "../../../models/categorias/Categorias";
import { listar } from "../../../services/service";

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categorias[]>([]);

    async function buscarCategorias() {
        try {
            await listar('/categorias', setCategorias);
        } catch (error: any) {
            alert("A ação não pode ser realizada, tente novamente.");
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length])

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <>
                                <CardCategorias key={categoria.id} categorias={categoria} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarCategorias