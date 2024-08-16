import { ChangeEvent, useEffect, useState } from "react";
import Categorias from "../../../models/categorias/Categorias";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, cadastrar, listar } from "../../../services/service";
import { ToastAlerta } from "../../../util/ToastAlerta";

function FormCategorias() {
    const [categorias, setCategorias] = useState<Categorias>({} as Categorias);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    async function buscarPorId(id: string) {
        await listar(`/categorias/${id}`, setCategorias);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function retornar() {
        navigate('/categorias');
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategorias({
            ...categorias,
            [e.target.name]: e.target.value
        });
        console.log(JSON.stringify(categorias));
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categorias, setCategorias);
                ToastAlerta('Categoria atualizada com sucesso', 'sucesso');
                retornar();
            } catch (error: any) {
                ToastAlerta('Erro ao atualizar a categoria', 'erro');
            }
        } else {
            try {
                await cadastrar(`/categorias`, categorias, setCategorias);
                ToastAlerta('Categoria cadastrada com sucesso', 'sucesso');
                retornar();
            } catch (error: any) {
                ToastAlerta('Erro ao cadastrar a categoria', 'erro');
            }
        }
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Atualizar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da categoria</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name='nome'
                        value={categorias.nome || ''}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    {id ? 'Atualizar' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}

export default FormCategorias;
