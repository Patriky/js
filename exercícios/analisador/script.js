var array = []

function adicionar() {
    limpar()
    var num = document.getElementById('num');
    var lis = document.getElementById('lista');
    if (num.value.length > 0) {
        if (num.value > 0) {
            if (num.value <= 100) {
                if (!existe(num.value)) {
                    array.push(num.value)
                    let item = document.createElement('option')
                    item.text = `${num.value} adicionado!`
                    item.value = `${array.length}`
                    lis.appendChild(item)

                } else {
                    alert("Já exite!")
                }
            } else {
                alert("Número inválido!");
            }
        } else {
            alert("Número inválido!");
        }
    } else {
        alert("Insira um número!")
    }
}

function limpar() {
    var sec = document.getElementById('res');
    sec.innerText = ""
}

function existe(num) {
    for (let i in array) {
        if (num == array[i]) {
            //console.log(`${num} - ${array[i]}`)
            return true;
        }
    }
    return false;
}

function finalizar() {
    limpar()
    var sec = document.getElementById('res');
    let media = document.createElement('h4');
    let soma = document.createElement('h4');
    let maior = document.createElement('h4');
    let menor = document.createElement('h4');
    let tamanho = document.createElement('h4');


    media.innerHTML = average();
    soma.innerHTML = sum();
    maior.innerHTML = max();
    menor.innerText = min();
    tamanho.innerHTML = length();
    sec.appendChild(media);
    sec.appendChild(soma);
    sec.appendChild(maior);
    sec.appendChild(menor);
    sec.appendChild(tamanho);

}

function length() {
    return `Quantidade de números cadastrados: ${array.length}`
}

function max() {
    let cont = 0
    for (let i in array) {
        if (array[i] > cont) {
            cont = array[i]
        }
    }
    return `Maior: ${cont}`
}

function min() {
    let cont = array[0]
    for (let i in array) {
        if (cont > array[i]) {
            cont = array[i]
        }
    }
    return `Menor: ${cont}`
}

function average() {
    let cont = 0
    for (let i in array) {
        cont += Number(array[i])
    }
    cont = cont / array.length
    return `Média: ${cont}`
}

function sum() {
    let cont = 0
    for (let i in array) {
        cont += Number(array[i])
    }
    return `Soma: ${cont}`
}