const LIMITE = 1000
const aureo = 1.618033988749894;
let primeCache = [];
function cribaHasta(limit) {
        const isPrime = new Array(limit + 1).fill(true);
        isPrime[0] = isPrime[1] = false;

        for (let i = 2; i * i <= limit; i++) {
            if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;
            }
            }
        }

        const primes = [];
        for (let i = 2; i <= limit; i++) {
            if (isPrime[i]) primes.push(i);
        }

        return primes;
    }
class Utils {
    triangular(n) {
        return n * (n + 1) / 2;
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

    // criba de eratostenes
    // primo(n) {
    //     if (primeCache.length >= n) return primeCache[n - 1];

    //     const estimate = Math.ceil(n * Math.log(n * Math.log(n)));
    //     primeCache = cribaHasta(estimate); // sobreescribe, podrías hacer merge si quieres

    //     return primeCache[n - 1];
    // }

    // recursiva sin uso de memo 1 - 45 [Alta precisión]
    // fibonacci(n) {
    //     if (n < 2) return 1;
    //     return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    // }

    //con uso de memo de 3 - 1400 [Alta precición]
    // fibonacci(n, memo = {}) {
    //     if (n < 2) return 1;
    //     if (memo[n]) return memo[n];
    //     memo[n] = this.fibonacci(n - 1, memo) + this.fibonacci(n - 2, memo);
    //     return memo[n];
    // }

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