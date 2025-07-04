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