import { useState } from "react";

export default function Form ({onSubmit}) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const num = parseInt(input)
        if (!isNaN(num)) onSubmit(num);
    }

    return (
        <form id="form">
            <input type="number" name="numero" placeholder="escribe un número..." value={input} onChange={(e) => setInput(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>calcular</button>
        </form>
    )
}