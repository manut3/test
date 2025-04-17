# Análise dos Resultados

## 1. Unicidade dos IDs

### Resultado
- Total de IDs coletados: 100
- Total de IDs únicos: 92
- IDs duplicados: 8

### IDs repetidos:
- ID 122 (2 vezes)
- ID 303 (2 vezes)
- ID 115 (2 vezes)
- ID 377 (2 vezes)
- ID 2 (2 vezes)
- ID 37 (2 vezes)
- ID 183 (2 vezes)
- ID 229 (2 vezes)

## 4. Metodologia da Análise de IDs (JavaScript)

A análise dos IDs foi feita após a execução dos testes automatizados, utilizando um script em JavaScript para identificar:

- O total de IDs coletados
- Quantos eram únicos
- Quais se repetiram e quantas vezes

O script percorre o array de IDs retornados pelas requisições à API e utiliza a função `reduce` para contar as ocorrências de cada ID.

### Código Utilizado

## 4. Metodologia da Análise de IDs (JavaScript)

A análise dos IDs foi feita após a execução dos testes automatizados, utilizando um script em JavaScript para identificar:

- O total de IDs coletados
- Quantos eram únicos
- Quais se repetiram e quantas vezes

O script percorre o array de IDs retornados pelas requisições à API e utiliza a função `reduce` para contar as ocorrências de cada ID.

### Código Utilizado

```js
// Lista de IDs coletados durante as 100 requisições à API
const ids = [
  94, 165, 122, 209, 303, 336, 131, 181, 334, 115, 161, 340, 440, 69, 220,
  122, 137, 318, 445, 377, 308, 145, 280, 2, 450, 245, 108, 424, 303, 370,
  112, 267, 395, 434, 194, 202, 120, 290, 380, 156, 394, 33, 289, 406, 103,
  31, 1, 270, 425, 200, 80, 449, 45, 2, 176, 413, 37, 118, 333, 47, 339, 346,
  3, 16, 4, 203, 109, 9, 184, 367, 30, 421, 11, 183, 379, 377, 330, 349, 260,
  294, 229, 350, 85, 252, 67, 281, 397, 115, 229, 400, 371, 183, 403, 272, 22,
  37, 392, 309, 233, 198
];

const contagem = ids.reduce((acc, id) => {
  acc[id] = (acc[id] || 0) + 1;
  return acc;
}, {});

const duplicados = Object.entries(contagem).filter(([id, count]) => count > 1);

console.log(`Total de IDs coletados: ${ids.length}`);
console.log(`Total de IDs únicos: ${new Set(ids).size}`);
console.log(`Número de IDs duplicados: ${duplicados.length}`);
console.log(`IDs duplicados encontrados:`);
duplicados.forEach(([id, count]) => {
  console.log(`- ID ${id} apareceu ${count} vezes`);
});


### Considerações
Apesar de a maioria dos IDs serem únicos, a presença de 8 repetições em apenas 100 requisições indica que a API pode estar retornando piadas repetidas com alguma frequência. Isso pode afetar negativamente a experiência do usuário final em aplicações que dependem de variedade.

---

## 2. Tempo de Resposta

- Tempo médio: 566ms
- Tempo mínimo: 200ms
- Tempo máximo: 1296ms

### Análise
O tempo médio de resposta é aceitável para uma API pública gratuita. No entanto, há uma oscilação considerável, o que pode indicar instabilidade ocasional nos servidores ou limitação de escalabilidade.

---

## 3. Estrutura e Validação

Todos os objetos JSON retornados estavam bem formatados e possuíam os seguintes campos obrigatórios preenchidos:
- `id`
- `type`
- `setup`
- `punchline`

Nenhum campo retornou `null` ou valores vazios, o que mostra boa consistência na resposta da API.

---

## Sugestões de Melhoria

1. **Melhorar o Algoritmo de Aleatoriedade:** Evitar a repetição de IDs em um curto período de tempo.
2. **Caching Dinâmico:** Utilizar uma estratégia de cache no cliente para armazenar os últimos IDs e evitar exibir piadas repetidas.
3. **Controle de Carga:** Monitorar variações de tempo de resposta para identificar possíveis gargalos.

---

## Conclusão

A API se mostrou funcional, com estrutura consistente e respostas rápidas na maioria das requisições. Contudo, a repetição de IDs deve ser tratada caso o sistema consumidor dependa de conteúdos únicos.
