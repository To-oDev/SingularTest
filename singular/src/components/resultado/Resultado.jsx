/**
 * 07.2025
 * Resultado
 * Caja visible para mostrar un valor.
 */
import './Resultado.css'

export default function Resultado({resultado}) {
    return (
        <div id="resultado" aria-label="resultado">
            <p className="resultado">{resultado}</p>
        </div>
    )
}