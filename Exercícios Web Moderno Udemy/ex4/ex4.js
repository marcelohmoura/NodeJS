
let calculo = (divisor, dividendo) => {
    let divisao = () => {
        console.log(divisor / dividendo)
    }
    let resto = () => {
        console.log(divisor % dividendo)
    }

    return divisao(), resto()
}

calculo(4, 2)



