import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/firebaseSetup";

export default function ContarDocumentos() {
    const [totalDocumentos, setTotalDocumentos] = useState(null);

    useEffect(() => {
        async function contarDocumentos() {
        try {
            const querySnapshot = await getDocs(collection(db, "suaColecao"));
            const total = querySnapshot.size;
            setTotalDocumentos(total);
        } catch (error) {
            console.error("Erro ao contar documentos: ", error);
        }
        }

        contarDocumentos();
    }, []);

    return (
        <div>
        {totalDocumentos !== null ? (
            <p>Total de documentos em suaColecao: {totalDocumentos}</p>
        ) : (
            <p>Contando documentos...</p>
        )}
        </div>
    );
}
