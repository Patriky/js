var amigo = {
    nome: 'Patriky',
    idade: '27',
    correu: 0,
    jogar() {
        console.log("futebol")
        this.correu = 4
    }

}

console.log(`O ${amigo.nome} jogou e correu ${amigo.correu}`)