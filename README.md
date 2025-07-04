### Ejercicio técnico

El presente proyecto es un ejercicio realizado en React. Demuestra el uso de estado, el uso de datos compartidos, la encapsulación de componentes visibles y no visibles, la creación y uso de clases, pruebas unitarias con vitest.

## Instalación

Clona el repositorio y usa en la terminal de comandos desde la ruta del proyecto:

```
cd singular
npm install
npm run dev - para correr el servidor de pruebas
npx vitest - para correr test en App para 10 números en un rango de 1 - 1000
```

## Funcionamiento

A través de un formulario simple, el usuario puede obtener el n-ésimo número correspondiente de la siguiente serie:

$$
\text{serie}(n) = \frac{3 \cdot \text{primo}(n) \cdot \text{triangular}(n)}{\text{fibonacci}(n - 2)}
$$

## Limites

La serie del número triangular es una función matemática simple: en un triángulo equilátero, los puntos que conforman el área del triángulo son correspondientes al n-ésimo número de sus lados, multiplicado por el n-ésimo número más 1, y luego dividido entre 2:

$$
\text{triangular}(n) = \frac{n \cdot (n + 1)}{2}
$$

Esta serie por sí sola no supone ningún problema computacional, más allá del crecimiento exponencial del resultado. Sin embargo, con la serie de números primos ya comenzamos con un coste computacional significativo.

La serie de números primos se obtiene a partir de la validación de si un número es primo o no, lo cual se determina con la condición de que, para ser primo, este número solo debe ser divisible por sí mismo o entre 1.

La Criba de Eratóstenes es un método utilizado para la obtención de números primos dentro de cierto límite, pero la obtención de números primos es un objeto de estudio actual dada la dificultad de encontrar un patrón que determine su aparición. **Hasta el momento se considera que no hay un patrón que los defina.** Dada esta situación, aunque se pueden hacer uso de fórmulas para estimar estos números, se debe verificar igualmente una gran cantidad de números en n-ésimos altos, por lo que, en términos de practicidad, se utilizará un método basado en "fuerza bruta" para la obtención de estos números.

```
primo(n) {
    let num = 2;
    let pos = 0;
    while (true) {
        if (this.esPrimo(num)) {
            pos++;
        }
        if (pos == n) {
            return num;
        }
        num++
    }
}
```

Por si no fuera poco, la forma básica de la obtención del n-ésimo número de la serie de Fibonacci es una fórmula recursiva. Según esta fórmula básica, el n-ésimo número de la serie de Fibonacci es la suma del valor correspondiente en sus dos posiciones anteriores:

$$
\text{fibonacci}(n) = \text{fibonacci}(n - 1) \text{fibonacci}(n - 2)
$$

Sin embargo, existe la posibilidad de calcular con el uso del número áureo una aproximación del n-ésimo número en casi cualquier rango de la serie, que sí tomaremos en cuenta para optimizar este ejercicio, dado que brinda el mismo resultado que el uso de React.memo para cachear cálculos usando la recursividad básica:

$$
\text{fibonacci}(n) = \frac{\varphi^n - (-\varphi^{-1})^n}{\sqrt{5}}
$$

La limitante real se encuentra en primo(n). Dada la naturaleza de su obtención, el ejercicio está limitado a un rango de obtención entre 1 y 1000 números de la serie.