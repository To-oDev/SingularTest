const LIMITE = 1000
class Utils {
    triangular(n) {
        return n * (n + 1) / 2;
    }

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

    // recursiva sin uso de memo 1 - 45
    // fibonacci(n) {
    //     if (n < 2) return 1;
    //     return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    // }

    //con uso de memo de 1 - 1000
    fibonacci(n, memo = {}) {
        if (n < 2) return 1;
        if (memo[n]) return memo[n];
        memo[n] = this.fibonacci(n - 1, memo) + this.fibonacci(n - 2, memo);
        return memo[n];
    }

    serie(n) {
        if (n < 2) return 1;
        if (n > LIMITE) return "Fuera de rango";
        return (3 * this.primo(n) * this.triangular(n)) / this.fibonacci(n - 2);
    }
}

export default Utils