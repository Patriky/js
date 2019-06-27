var array = []

function adicionar() {

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

function existe(num) {
    for (let i in array) {
        if (num == array[i]) {
            //console.log(`${num} - ${array[i]}`)
            return true;
        } else {
            return false;
        }
    }
}