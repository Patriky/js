function taboada() {
    var num = document.getElementById("num");
    var tab = document.getElementById("taboada");
    if (num.value.length == 0) {
        alert("Campo vazio!")
    } else {
        let n = Number(num.value);
        tab.innerText = ""
        for (let index = 1; index <= 10; index++) {
            let item = document.createElement('option'); /* Cria um novo elemento html do tipo option */
            item.text = `${index} x ${n} = ${index*n}`; /* adiciona um novo text no item */
            item.value = `tab${index}`; /* adiciona um novo id para o item. Cada linha terá um id diferente */
            tab.appendChild(item) /*adiciona  um elemento no "item" */
        }
    }

}