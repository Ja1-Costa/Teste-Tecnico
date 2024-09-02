// técnica 4

const faturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

// Calcular o faturamento total
const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

// Calcular o percentual de representação de cada estado
const percentuais = {};
for (const estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / totalFaturamento) * 100;
}

// Exibir os resultados
console.log("Percentual de representação de cada estado no faturamento total:");
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}