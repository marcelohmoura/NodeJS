/*
    De 4 em 4 anos é ano bissexto; //Se divisível por 4 true
    De 100 em 100 anos não é ano bissexto; // ano != ano + 100
    De 400 em 400 anos é ano bissexto; // ano != ano + 400
    Prevalecem as últimas regras sobre as primeiras.
    Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
    mensagem e retornando true ou false.
*/

let verificaBissexto = (ano) => {
    let condicao1,
        condicao2,
        condicao3

    if (ano % 4 == 0) {
        condicao1 = true
    } else {
        condicao1 = false
    }

    if (ano != ano + 100) {
        condicao2 = true
    } else {
        condicao2 = false
    }

    if (ano != ano + 400) {
        condicao3 = true
    } else {
        condicao3 = false
    }

    if (condicao1 && condicao2 && condicao3) {
        return true
    } else {
        return false
    }
}

console.log(verificaBissexto(1033))