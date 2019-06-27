function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

function parimpar(num) {
    if (num % 2 == 0) {
        return "Par!"
    } else {
        return "Ímpar!"
    }
}
let res = soma(10, 16)
console.log(`O numero ${res} é ${parimpar(res)}`)