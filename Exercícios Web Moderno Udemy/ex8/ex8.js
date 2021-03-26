let comparaResultados = (lista = "10 20 20 8 25 3 0 30 1") => {
    let pontuacao = [];
    let armazenaChar = "";
    let resultado = [];
    let maior;
    let contagemMaior = 0;
    let menor;
    for (let i = 0; i <= lista.length; i++) {
        if (lista.charAt(i) != " ") {
            armazenaChar = armazenaChar + lista.charAt(i);
        } else {
            armazenaChar = parseInt(armazenaChar);
            pontuacao.push(armazenaChar);
            armazenaChar = "";
        }
    }
    armazenaChar = parseInt(armazenaChar);
    pontuacao.push(armazenaChar);

    maior = pontuacao[0];
    for (let i = 0; i <= pontuacao.length; i++) {
        if (maior < pontuacao[i]) {
            maior = pontuacao[i];
            contagemMaior += 1;
        }
    }

    menor = pontuacao[0];
    for (let i = 0; i <= pontuacao.length; i++) {
        if (menor > pontuacao[i]) {
            menor = pontuacao[i];
        }
    }

    menor = pontuacao.indexOf(menor) + 1;

    resultado.push(contagemMaior, menor);

    return console.log(`${resultado}`);
};

comparaResultados();
