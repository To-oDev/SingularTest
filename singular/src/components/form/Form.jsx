import { useState } from "react";
import './Form.css'
import { BlockMath } from "react-katex";

export default function Form ({onSubmit}) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const num = parseInt(input)
        if (!isNaN(num)) onSubmit(num);
    }

    return (
        <form id="form">
            <input
                type="number"
                title="De momento solo puedes calcular del 1 al ~1450."
                inputMode="numeric"
                name="numero"
                placeholder="escribe un número del 1 al 1000"
                value={input}
                onChange={(e) => setInput(e.target.value)
                
                }/>
            <p>y obtén el valor de la posición correspondiente en la serie:</p>
            <BlockMath>
                {'\\text{serie}(n) = \\frac{3 \\cdot \\text{primo}(n) \\cdot \\text{triangular}(n)}{\\text{fibonacci}(n - 2)}'}
            </BlockMath>
            <button
                type="submit"
                onClick={handleSubmit}
            >calcular</button>
        </form>
    )
}