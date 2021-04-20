
/* 
    Função que verifica se os valores são diferentes de NAN, maiores que zero e se atendem matematicamente para serem um triângulo
    Função que mostra o tipo do triângulo
*/

let verificaValores = (a = 1, b = 1, c = 1) => {

    let tipoTriangulo = () => {
        if ((a == b) && (a == c)) {
            console.log(`Equilátero`)
        } else if ((a == b) || (a == c)) {
            console.log(`Isóceles`)
        } else {
            console.log(`Escaleno`)
        }
    }

    if ((a < a + b)) {
        tipoTriangulo()
    } else {
        console.log(`Valores inválidos!`)
    }

}

verificaValores()




