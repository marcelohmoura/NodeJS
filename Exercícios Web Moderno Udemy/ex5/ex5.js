
let mostraValor = (valor) => {
    valor = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(valor)

    return valor
}

console.log(mostraValor(1.30000000000000009))






