let equacao = (ax, bx, c) => {
    let delta = Math.pow(bx, 2) - 4 * ax * c;

    if (delta > 0) {
        let x1 = (bx * -1 + Math.sqrt(delta)) / (2 * ax);
        let x2 = (bx * -1 - Math.sqrt(delta)) / (2 * ax);
        let s = [x1, x2];
        console.log(`Delta = ${delta}`);
        console.log(`S = {${s}}`);
    } else if (delta < 0) {
        console.log(`Delta negativo: Delta = ${delta}`);
    } else {
        let x = -bx / (2 * ax);
        let s = [x];
        console.log(`Delta = ${delta}`);
        console.log(`S = {${s}}`);
    }
};

equacao(1, -5, 6);

