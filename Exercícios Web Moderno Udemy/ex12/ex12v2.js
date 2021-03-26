let calculaFatorial = (n) => {
    let resultado = n

    for (let i = n - 1; i > 0; i--) {
        resultado = resultado * i
    }

    return resultado
}

console.log(calculaFatorial(3))