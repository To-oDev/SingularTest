export default function Resultado({resultado, children}) {
    return (
        <div id="resultado" aria-label="resultado">{resultado}{children}</div>
    )
}