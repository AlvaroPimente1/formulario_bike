import React, { useState, useEffect } from "react";
import './style.css'
import db from "../../firebase/firebaseSetup";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";

export default function Formulario() {
    const [nome, setNome] = useState('');
    const [rg, setRg] = useState('');
    const [nomeMae, setNomeMae] = useState('');
    const [email, setEmail] = useState('');
    const [ultimoId, setUltimoId] = useState(0);
    const [rgExistente, setRgExistente] = useState(false); 

    useEffect(() => {
        const verificaRgExistente = async () => {
            const q = query(collection(db, "Inscricao_bike"), where("rg", "==", rg));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.size > 0) {
                setRgExistente(true);
            } else {
                setRgExistente(false);
            }
        };

        if (rg) {
            verificaRgExistente();
        }
    }, [rg]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const proximoId = ultimoId + 1;

        const dados_formulario = {
            id: proximoId,
            nome,
            rg,
            nomeMae,
            email,
        };

        try {
            const docRef = await addDoc(collection(db, "Inscricao_bike"), dados_formulario);
            setUltimoId(proximoId);
            setNome('');
            setRg('');
            setNomeMae('');
            setEmail('');
            alert("Documento adicionado com ID: " + docRef.id);
        } catch (error) {
            console.error("Erro ao adicionar documento: ", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Formulário de inscrição</h2>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="form-group">
                        <label className="mb-2 mt-2" htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            className="form-control"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="mb-2 mt-2" htmlFor="nome">RG:</label>
                        <input
                            type="text"
                            id="rg"
                            className="form-control"
                            value={rg}
                            onChange={(e) => setRg(e.target.value)}
                            required
                        />
                    </div>
                    
                    {rgExistente && (
                        <div className="alert alert-danger">
                            RG já cadastrado no banco de dados.
                        </div>
                    )}

                    <div className="form-group">
                        <label className="mb-2 mt-2" htmlFor="email">*Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="mb-2 mt-2" htmlFor="mensagem">Nome da mãe:</label>
                        <input
                            id="mensagem"
                            className="form-control"
                            value={nomeMae}
                            onChange={(e) => setNomeMae(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div className="botaoConteiner">
                        {
                            rgExistente ? <div></div>
                            :
                            <button type="submit" className="btn btn-primary mt-4">
                                Enviar
                            </button>
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}
