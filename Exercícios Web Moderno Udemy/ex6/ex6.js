
let jurosSimples = (capital, taxa, tempo) => {
    let juros = (capital * taxa * tempo)
    return juros
}

let jurosCompostos = (capital, taxa, tempo) => {
    let montante = (1 + taxa)
    montante = Math.pow(montante, tempo)
    montante = (montante * capital) 
    
    return montante
}

console.log(jurosSimples(1000, 0.10, 2))
console.log(jurosCompostos(1000, 0.10, 2))

