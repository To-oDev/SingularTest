### Ejercicio técnico

El presente proyecto es un ejercicio en React que demuestra el uso de estado, el uso de datos compartidos, la encapsulación de componentes, la creación de clases.

## Instalación

Clona el repositorio, y usa en la terminal de comandos desde la ruta del proyecto:

```
cd singular
npm install
npm run dev - para correr el servidor de pruebas
npx vitest - para correr test en App para 10 números en un rango de 1 - 1000
```

## Funcionamiento

A través de un fomrulario simple, el usuario puede obtener el n-ésimo número coorespondiente de la serie siguiente:

$$
\text{serie}(n) = \frac{3 \cdot \text{primo}(n) \cdot \text{triangular}(n)}{\text{fibonacci}(n - 2)}
$$

## Limites

La serie del número triangular es una función matematica simple: en un triangulo equilatero, los puntos que conforman el área del triangulo son correspondientes al n-ésimo número de sus lados, multiplicado por el n-ésimo número más 1, y luego dividido entre 2:

$$
\text{triangular}(n) = \frac{n \cdot (n + 1)}{2}
$$

Esta serie por si sola no supone ningún problema coputacional, más allá del crecimiento exponencial del resultado. Sin embargo, con la serie de números primos ya comenzamos con un coste computacional significativo.

La serie de números primos se obtiene apartir de la validación de si un número es primo o no, lo cual se determina con la condición de que, para ser primo, este número solo debe ser divisible por si mismo o entre 1.

La Criba de Eratostenes es un metodo utilizado para la obtención de números primos dentro de cierto limite, pero la obtención de números primos es un objeto de estudio actual dada la dificultad de la obtención del patrón que determine la aparición de estos. **Hasta el momento se considera que no hay un patrón que la defina.** Dada esta situación, aunque se pueden hacer uso de formulas para estimar estos números, se debe de verificar igualmente una gran cantidad de números en n-ésimos altos, por lo que, en terminos de practicidad, se utilizará un metodo basado en "fuerza bruta" para la obtención de estos números.

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

Por si no fuera poco, la forma basica de la obtención del n-ésimo número de la serie de fibonacci es una formula recursiva. Según esta formula basica, el n-ésimo número de la serie de fibonacci es la suma del valor correspondiente en sus dos posiciones anteriores.

$$
\text{fibonacci}(n) = \text{fibonacci}(n - 1) \text{fibonacci}(n - 2)
$$

Sin embargo, existe la posibilidad de calcular con el uso del número aureo una aproximación del n-ésimo número en casi cualquier rango de la serie, que si tomaremos en cuenta para optimizar este ejercicio, dado que brinda el mismo resultado que el uso de React.memo para cachear calculos usando la recursividad basica.

$$
\text{fibonacci}(n) = \frac{\varphi^n - (-\varphi^{-1})^n}{\sqrt{5}}
$$

La **limitante real** se encuentra en **primo(n)**. Dada la naturaleza de su obtención, el ejericio está limitado a un **rango de obtención entre 1 y 1000** números de la serie.