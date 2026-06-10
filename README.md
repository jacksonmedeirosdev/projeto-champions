# ⚽ Champions League API

API REST desenvolvida com **Node.js**, **Express** e **TypeScript**, inspirada na UEFA Champions League.

O projeto foi criado com foco em boas práticas de desenvolvimento backend, utilizando arquitetura em camadas para separar responsabilidades entre rotas, controladores, serviços e acesso aos dados.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* TypeScript
* Express.js
* TSX
* CORS
* ESLint

---

## 📁 Estrutura do Projeto

```text
src/
├── controllers/      # Controladores das requisições
├── data/             # Fonte de dados local
│   └── clubs-data.json
├── models/           # Interfaces e modelos
├── repositories/     # Acesso aos dados
├── routes/           # Definição das rotas
├── services/         # Regras de negócio
├── utils/            # Funções auxiliares
├── app.ts            # Configuração da aplicação
└── server.ts         # Inicialização do servidor
```

---

## 🏗️ Arquitetura

O projeto segue uma arquitetura em camadas:

### Routes

Responsáveis por mapear os endpoints da API.

### Controllers

Recebem as requisições HTTP e delegam o processamento para os serviços.

### Services

Contêm as regras de negócio da aplicação.

### Repositories

Responsáveis pelo acesso e manipulação dos dados.

### Models

Definem a estrutura dos objetos utilizados pela aplicação.

### Utils

Funções utilitárias compartilhadas entre as camadas.

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/jacksonmedeirosdev/projeto-champions.git
```

Acesse a pasta:

```bash
cd projeto-champions
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando a Aplicação

Modo desenvolvimento:

```bash
npm run start:dev
```

Modo produção:

```bash
npm run build
npm start
```

---

## 📌 Endpoints Disponíveis

### Jogadores

#### Listar todos os jogadores

```http
GET /players
```

#### Buscar jogador por ID

```http
GET /players/:id
```

#### Cadastrar jogador

```http
POST /players
```

#### Atualizar jogador

```http
PATCH /players/:id
```

#### Remover jogador

```http
DELETE /players/:id
```

---

### Clubes

#### Listar todos os clubes

```http
GET /clubs
```

---

## 💾 Persistência dos Dados

Atualmente os dados são armazenados localmente para fins de estudo e aprendizado de APIs REST.

---

## 🎯 Próximas Implementações

* [ ] CRUD completo de clubes
* [ ] Busca de clubes por ID
* [ ] Integração com banco de dados
* [ ] Paginação de resultados
* [ ] Filtros de pesquisa
* [ ] Testes automatizados
* [ ] Documentação com Swagger/OpenAPI
* [ ] Autenticação com JWT

---

## 📚 Objetivo do Projeto

Este projeto foi desenvolvido com foco em aprendizado e prática de conceitos importantes do desenvolvimento backend:

* APIs REST
* TypeScript
* Arquitetura em camadas
* Organização de código
* Boas práticas com Express
* Manipulação de dados
* Estruturação de projetos Node.js

---

## 👨‍💻 Autor

Jackson Medeiros

GitHub:
https://github.com/jacksonmedeirosdev

```
```
