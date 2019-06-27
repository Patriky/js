let array = []
let valores = [112, 12, 3, 7, 5]
valores.sort();
console.log(valores)
for (let index = 5; index > 0; index--) {
    array.push(index)
}

array.sort()
for (let index in array) {
    console.log(array[index])
}