// import React from 'react'

import { useEffect, useState } from "react";
import Categorias from "../../../models/categorias/Categorias";
import { useNavigate, useParams } from "react-router-dom";
import { deletar, listar } from "../../../services/service";

function DeletarCategoria() {

    const [categorias, setCategorias] = useState<Categorias>({} as Categorias);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategorias);
        } catch {
            alert("Não foi possível excluir essa categoria, tente novamente.");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function retornar() {
        navigate('/categorias');
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`);
        } catch {
            alert("Erro ao deletar categoria");
        }
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar essa categoria?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categorias.descricao}</p>
                <div className="flex">
                    <button onClick={retornar} className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' >Não</button>
                    <button onClick={deletarCategoria} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria