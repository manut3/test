# Casos de Teste - API de Piadas

Este documento descreve os casos de teste implementados para validar a API pública de piadas: `https://official-joke-api.appspot.com/random_joke`.

## Objetivos dos Testes

- Validar a estrutura e os dados da resposta da API.
- Garantir a unicidade dos IDs de piadas retornadas.
- Avaliar o tempo de resposta da API sob carga.
- Verificar a consistência dos dados retornados.

---

## Casos de Teste Implementados

### 1. Validação da Estrutura da Resposta

- **Descrição:** Verifica se os campos `id`, `type`, `setup` e `punchline` estão presentes.
- **Resultado Esperado:** Todos os campos devem existir e estar preenchidos.

### 2. Validação de Tipos de Dados

- **`id:`** inteiro
- **`type:`** string
- **`setup:`** string
- **`punchline:`** string

### 3. Verificação de Campos Vazios

- **Descrição:** Garante que os campos não estejam vazios.
- **Resultado Esperado:** Nenhum campo deve retornar valor nulo ou string vazia.

### 4. Verificação de Unicidade dos IDs

- **Descrição:** Garante que IDs de piadas em requisições consecutivas sejam únicos.
- **Resultado Esperado:** Nenhum ID deve se repetir em 100 chamadas.

### 5. Teste de Carga

- **Descrição:** Executa 100 chamadas consecutivas à API simulando usuários simultâneos.
- **Resultado Esperado:** Todas as requisições devem ser respondidas com status 200, dentro de tempo razoável.

---

## Ferramentas Utilizadas

- **Postman** para modelagem dos testes
- **Newman** para automação e execução

  ## Casos de Teste Automatizados

Os testes foram escritos em JavaScript e executados no Postman. Eles validam a integridade da API em relação a:

- Status de resposta HTTP
- Estrutura e formato do corpo da resposta
- Tipos e existência dos campos esperados
- Dados não nulos/vazios
- Armazenamento dos IDs para análise posterior

### Script de Teste utilizado:

```javascript
pm.test("Status 200 OK", function () {
    pm.response.to.have.status(200);
});

pm.test("Resposta em JSON válida", function () {
    pm.response.to.be.withBody;
    pm.response.to.be.json;
});

const dados = pm.response.json();

pm.test("Todos os campos obrigatórios estão presentes", function () {
    pm.expect(dados).to.have.property("id");
    pm.expect(dados).to.have.property("type");
    pm.expect(dados).to.have.property("setup");
    pm.expect(dados).to.have.property("punchline");
});

pm.test("Tipos dos dados estão corretos", function () {
    pm.expect(dados.id).to.be.a("number");
    pm.expect(dados.type).to.be.a("string");
    pm.expect(dados.setup).to.be.a("string");
    pm.expect(dados.punchline).to.be.a("string");
});

pm.test("Campos não estão vazios", function () {
    pm.expect(dados.setup.trim().length).to.be.above(0);
    pm.expect(dados.punchline.trim().length).to.be.above(0);
});

let ids = pm.collectionVariables.get("ids") || "[]"; 
ids = JSON.parse(ids); 
ids.push(pm.response.json().id); 
pm.collectionVariables.set("ids", JSON.stringify(ids));

