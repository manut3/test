# Teste QA - API de Piadas

Este repositório contém a automação de testes da API de piadas aleatórias. O objetivo do desafio é garantir, por meio de testes automatizados e documentados, que a API esteja funcionando corretamente em relação à estrutura, conteúdo, performance e comportamento sob carga.

---

## Objetivo

A proposta do desafio é testar a seguinte API pública:

**Endpoint:**  
`https://official-joke-api.appspot.com/random_joke`

**Exemplo de resposta da API:**

```json
{
  "type": "general",
  "setup": "How good are you at Power Point?",
  "punchline": "I Excel at it.",
  "id": 128
}
```

Os testes têm como foco verificar:

- Se a estrutura da resposta está correta.
- Se os tipos de dados retornados estão adequados.
- Se os campos não estão vazios.
- Se os IDs são únicos em múltiplas requisições.
- Se a API responde dentro de um tempo aceitável.
- Se a API mantém consistência com múltiplos usuários simultâneos.

---

## Ferramentas Utilizadas

- **Postman**: ferramenta para criação e execução de testes de APIs.
- **Newman**: ferramenta de linha de comando para executar coleções Postman.
- **newman-reporter-html**: plugin para geração de relatórios em formato HTML.
- **Node.js** e **npm**: para instalação e gerenciamento de dependências.

---

## Estrutura do Projeto

```
devvo-desafio/
├── docs/
│   ├── casos-de-teste.md                # Descrição dos casos de teste
│   ├── relatorio-de-execucao.md         # Relatório dos testes executados
│   └── analise-dos-resultados.md        # Análise geral e sugestões
├── tests/
│   ├── test-cases.postman_collection.json  # Coleção de testes Postman
│   ├── test-results.html                   # Relatório HTML gerado pelo Newman
│   └── test-results.json                   # Relatório em JSON bruto
├── runNewmanTest.js                    # Script de execução dos testes via Node.js
├── package.json                        # Gerenciador de dependências Node.js
├── .gitignore                          # Arquivos/pastas ignorados no Git
└── README.md                           # Este arquivo de explicações
```

---

## Como Executar o Projeto

### 1. Clonar o repositório

Abra o terminal e digite:

```bash
git clone https://github.com/seu-usuario/devvo-desafio.git
cd devvo-desafio
```

### 2. Instalar as dependências

```bash
npm install
npm install newman
npm install newman-reporter-html --legacy-peer-deps
```

> Use a flag `--legacy-peer-deps` para evitar problemas de compatibilidade com versões recentes do Newman.

### 3. Executar os testes

```bash
node runNewmanTest.js
```

Esse comando executa a coleção de testes 100 vezes e gera os relatórios automaticamente na pasta `/tests`.

---

## Sobre os Testes

### Casos de Teste Criados (descritos em `docs/casos-de-teste.md`):

- Verificação do código de resposta HTTP (200).
- Verificação da estrutura dos campos `id`, `type`, `setup`, `punchline`.
- Validação de que os campos não estão vazios.
- Teste de unicidade de ID em 100 requisições.
- Teste de performance (tempo médio de resposta).
- Validação do formato correto de JSON.

---

## Relatórios

- O relatório principal em HTML pode ser visualizado em `tests/test-results.html`.
- Um relatório em JSON também está disponível para análises programáticas.
- Os dados coletados e interpretados estão documentados nos arquivos dentro da pasta `docs/`.

---

## Análise dos Resultados

A análise geral dos testes (em `docs/analise-dos-resultados.md`) inclui:

- Tempo médio de resposta da API.
- Consistência dos dados.
- Ausência de falhas graves.
- Sugestões de melhorias.
- Riscos identificados para produção.

---

## O que será entregue

Este repositório inclui:

1. Código fonte dos testes automatizados.
2. Relatório de execução dos testes.
3. Documentação dos casos de teste.
4. Análise dos resultados.
5. Script de automação com Node.js e Newman.
6. Arquivo README com todas as instruções e explicações.

---

## Considerações Finais

O projeto foi desenvolvido com foco em qualidade, organização e clareza para simular um ambiente real de testes de software. Ele pode ser facilmente adaptado para qualquer outra API e ampliado para cenários mais complexos.

