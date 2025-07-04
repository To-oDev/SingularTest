/**
 * 07.2025
 * Serie component
 * Componente no visible.
 * Realiza el calculo de la serie.
 * Consume Utils para realizar el cálculo.
 */
import { useEffect } from "react";
import Utils from "../../Utils";

const utils = new Utils();

export default function Serie({valor, onCalculated}) {
    useEffect(() => {
        const res = utils.serie(valor)
        onCalculated(res);
    }, [valor])
    return;
}