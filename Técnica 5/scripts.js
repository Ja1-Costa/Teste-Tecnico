// técnica 5

// Invertendo a string
function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

// String de teste
const stringOriginal = 'Teste, Testando';

const stringInvertida = inverterString(stringOriginal);

//Resultado
console.log('String Invertida:', stringInvertida);
