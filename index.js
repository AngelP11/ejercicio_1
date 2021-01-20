// Funcion recursiva
const mult = (x, y) => {
    if (y == 0) {
        return 0
    } else if (y == 1) {
        return x
    }

    return x + mult(x, y - 1)
}

const result = mult(2, 8)
console.log(result)