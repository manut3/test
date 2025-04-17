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
