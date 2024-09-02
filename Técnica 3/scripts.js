// técnica 3

fetch('./faturamento.json')
    .then(response => response.json())
    .then(data => {
        const faturamento = data.faturamento_diario;

        function calcularFaturamento(faturamento) {
            let menor = Infinity;
            let maior = -Infinity;
            let soma = 0;
            let diasComFaturamento = 0;

            // Iterar sobre o faturamento diário
            for (let i = 0; i < faturamento.length; i++) {
                let valor = faturamento[i];

                // Ignorar dias sem faturamento
                if (valor > 0) {
                    if (valor < menor) menor = valor;
                    if (valor > maior) maior = valor;
                    
                    soma += valor;
                    diasComFaturamento++;
                }
            }

            // Calcular a média
            let media = soma / diasComFaturamento;

            // Contar dias com faturamento acima da média
            let diasAcimaDaMedia = 0;
            for (let i = 0; i < faturamento.length; i++) {
                if (faturamento[i] > media) {
                    diasAcimaDaMedia++;
                }
            }

            return {
                menor: menor,
                maior: maior,
                diasAcimaDaMedia: diasAcimaDaMedia
            };
        }

        // Chamar a função e exibir o resultado
        const resultado = calcularFaturamento(faturamento);
        console.log(`Menor faturamento: R$ ${resultado.menor}`);
        console.log(`Maior faturamento: R$ ${resultado.maior}`);
        console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
