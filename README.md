# 📌 Empresa: Evoluir RH

## 📖 Descrição Geral
Este sistema tem como objetivo realizar o **cadastro e o controle de funcionários** de uma empresa, permitindo o gerenciamento de informações como **nome, cargo, setor, salário, data de admissão e status de atividade**.

A aplicação foi desenvolvida para atender às regras de negócio do setor de **Recursos Humanos**, garantindo integridade, rastreabilidade e consistência dos dados.

---

## 📋 Regras de Negócio

### 📝 Cadastro
- O **nome** é obrigatório.
- A **data de admissão** não pode ser no futuro, devendo corresponder ao momento do cadastro.
- O **salário** não pode ser negativo.
- O funcionário é criado como **ativo** por padrão no banco de dados.

---

### 🆔 Identidade do Funcionário
- O **ID** é único e gerado automaticamente pelo banco de dados.
- O **ID não é mutável**.
- Dois funcionários podem possuir o **mesmo nome**, desde que sejam pessoas diferentes.

---

### 🔄 Atualização de Dados
- **Cargo**, **setor** e **salário** podem ser alterados.
- A **data de admissão** não deve ser modificada.
- O **nome** só pode ser alterado em casos de correção.

---

### 💰 Salário
- O salário deve ser **maior que zero**.
- **Aumentos salariais** são permitidos.
- **Reduções salariais** podem acontecer, caso o negócio permita.
- Funcionários **inativos não recebem ajustes salariais**.

---

### 🔁 Ativação / Desativação
- O funcionário **não deve ser apagado** do banco de dados.
- Deve ser apenas **marcado como inativo**.
- Funcionários inativos:
  - Não aparecem em **listas padrão**.
  - Não podem ser alterados (ou apenas parte dos dados, conforme regra).

---

### ❌ Exclusão
- Operações **DELETE** só devem ocorrer em **ambiente de testes**.
- Em **produção**, o funcionário deve ser apenas marcado como:
  ```json
  "ativo": false

## 🧱 Entidade e Atributos

  ### 📦 Entidade: Funcionário

| Atributo        | Tipo        | Descrição                                   |
|-----------------|-------------|---------------------------------------------|
| id              | number      | Identificador único gerado pelo banco       |
| nome            | string      | Nome do funcionário                         |
| cargo           | string      | Cargo ocupado pelo funcionário              |
| setor           | string      | Setor da empresa                            |
| salario         | number      | Salário do funcionário                      |
| data_admissao   | date        | Data de admissão                            |
| ativo           | boolean     | Indica se o funcionário está ativo          |

---

## ⚙️ Funcionalidades Principais (CRUD)

  ### 🔍 GET
- `findAll()` — Retorna todos os funcionários
- `findById()` — Retorna um funcionário pelo ID
- `findBySetor()` — Retorna funcionários por setor
- `findByStatus()` — Retorna funcionários por status (ativo/inativo)

  ### ➕ POST
- `create()` — Cria um novo funcionário

  ### ✏️ PUT
- `update()` — Atualiza os dados de um funcionário existente

  ### 🗑️ DELETE
- `delete()` — Remove um funcionário (permitido apenas em ambiente de testes)

---

## 🌐 Endpoints da API

### 🔍 GET
- `/funcionarios`  
  Retorna todos os funcionários cadastrados

- `/funcionarios/:id`  
  Retorna o funcionário com o ID especificado

- `/funcionarios/setor/:setor`  
  Retorna todos os funcionários de um determinado setor

- `/funcionarios/status/:status`  
  Retorna funcionários de acordo com o status (ativo ou inativo)

---

### ➕ POST
- `/funcionarios`  
  Cria um novo funcionário no banco de dados

---

### ✏️ PUT
- `/funcionarios/:id`  
  Atualiza um funcionário existente

---

### 🗑️ DELETE
- `/funcionario/:id`  
  Remove um funcionário do banco de dados (uso restrito a testes)

---

## 🛠️ Tecnologias Utilizadas

- **Banco de Dados:** SQL  
- **Back-end:** NestJS

---

## 📊 Diagrama de Entidade

+----------------------+
|     FUNCIONARIO      |
+----------------------+
| INT id (PK)          |
| VARCHAR(255) nome    |
| VARCHAR(255) cargo   |
| VARCHAR(255) setor   |
| FLOAT salario        |
| DATE data_admissao   |
| BOOLEAN ativo        |
+----------------------+



