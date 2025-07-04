/**
 * 07.2025
 * Utils class
 * Clase con funciones auxiliares para realizar el cálculo de la serie.
 */

// Constantes
const LIMITE = 1000
const aureo = 1.618033988749894;

// Clase
class Utils {
    triangular(n) {
        return (n * (n + 1)) / 2;
    }

    // fuerza bruta
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

    esPrimo(x) {
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i == 0) return false;
        }
        return true;
    }

    // número aureo: 1,618033988749894. De 3 a 1400 [Alta precisión dada la longitud de decimales del número aureo.]
    fibonacci(n) {
        return (Math.pow(aureo, n) - Math.pow(-Math.pow(aureo, -1), n)) / Math.sqrt(5)
    }

    serie(n) {
        if (n <= 2) return 1;
        if (n > LIMITE) return "Fuera de rango";
        return (3 * this.primo(n) * this.triangular(n)) / this.fibonacci(n - 2);
    }
}

export default Utils