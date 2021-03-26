let verificaNota = (nota) => {
    let notaValida
    let multiplos = []
    let j = 0

    for (let i = 5; i <= 100; i += 5) {
        multiplos[j] = i
        j++
    }

    if (nota >= 0 && nota <= 100) {
        notaValida = true
    } else {
        notaValida = false
    }

    if (notaValida) {
        if (nota >= 38) {
            for (let i = 0; i <= multiplos.length; i++) {
                if (nota + 2 == multiplos[i]) {
                    nota = multiplos[i]
                    break
                }
            }
        }
    }

    return nota


}

console.log(verificaNota(38))