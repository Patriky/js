function fatorial(num) {
    if (num == 1) {
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))

/**
 Regra:
    Se 1!
        então retorna 1
    senao
        retorna n * (n-1)!
 */