// import React from 'react'

import { useEffect, useState } from "react"
import CardCategorias from "../cardCategorias/CardCategorias"
import Categorias from "../../../models/categorias/Categorias";
import { listar } from "../../../services/service";
import { BallTriangle } from "react-loader-spinner";
import { ToastAlerta } from "../../../util/ToastAlerta";

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categorias[]>([]);

    async function buscarCategorias() {
        try {
            await listar('/categorias', setCategorias);
        } catch (error: any) {
            ToastAlerta("A ação não pode ser realizada, tente novamente.", 'info');
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length])

    return (
        <>
            <div className="flex justify-center mt-4">
                {
                    categorias.length === 0 && (
                        <BallTriangle
                            height={100}
                            width={100}
                            radius={5}
                            color="purple"
                            ariaLabel="ball-triangle-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    )}
            </div>

            <div className="flex justify-center w-full mb-4">
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