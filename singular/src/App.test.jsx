import { test, expect } from 'vitest'; // 👈 test y expect vienen de vitest
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('procesamiento de 10 numeros naturales aleatorios', async () => {
    render(<App/>);

    const input = screen.getByRole('spinbutton');
    const button = screen.getByRole('button', {name: /calcular/i});

    const list = [];

    for (let i = 1; i <= 10; i++) {
        // ingresar numero en input
        const randomNum = Math.floor(Math.random() * 1000)
        list[i-1] = randomNum
        fireEvent.change(input, {target: {value: randomNum}});

        // enviar formulario
        fireEvent.click(button);

        // esperar resultado
        const resultado = await screen.findByLabelText('resultado');
        expect(resultado).toBeInTheDocument();
    }

    console.log("Nums: " + list.sort((a,b) => a-b));
});