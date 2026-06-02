# 🚀 Node.js + TypeScript Boilerplate

Boilerplate para criação rápida de APIs utilizando Node.js, TypeScript e Express.

## 📦 Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/node-ts-boilerplate.git
```

### 2. Entre na pasta do projeto

```bash
cd node-ts-boilerplate
```

### 3. Instale as dependências

> **Importante:** A pasta `node_modules` não é enviada para o GitHub. Após clonar o projeto, execute o comando abaixo para instalar todas as dependências necessárias.

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
```

### 5. Execute o projeto

```bash
npm run start:dev
```

---

## 🔄 Criando seu próprio projeto a partir deste Boilerplate

### Alterando o nome do projeto

Edite a propriedade `name` do arquivo `package.json`:

```json
{
  "name": "meu-novo-projeto"
}
```

### Removendo o vínculo com este repositório

```bash
git remote remove origin
```

### Criando um novo repositório no GitHub

Crie um repositório vazio na sua conta.

### Vinculando o projeto ao novo repositório

```bash
git remote add origin https://github.com/seu-usuario/meu-novo-projeto.git
```

### Enviando os arquivos

```bash
git push -u origin main
```

---

## ⚙️ Tecnologias utilizadas

* Node.js
* TypeScript
* Express
* TSX
* TSUP
* Dotenv (.env)

---

## 📜 Scripts disponíveis

| Comando               | Descrição                                         |
| --------------------- | ------------------------------------------------- |
| `npm run start:dev`   | Executa o projeto em modo desenvolvimento         |
| `npm run start:watch` | Executa o projeto com monitoramento de alterações |
| `npm run dist`        | Gera a build para produção                        |
| `npm run start:dist`  | Executa a versão compilada                        |

---

## 📂 Estrutura inicial

```text
src/
└── server.ts
```

---

## 🏗️ Estrutura sugerida para evolução

```text
src/
├── controllers/
├── routes/
├── services/
├── middlewares/
├── config/
├── types/
└── server.ts
```

---

## 🛠️ Como este Boilerplate foi criado

### Inicialização do projeto

```bash
npm init -y
```

Configure o projeto para utilizar módulos ES:

```json
{
  "type": "module"
}
```

### Instalação das dependências de desenvolvimento

```bash
npm install -D typescript tsx tsup
```

### Configuração do TypeScript

```bash
npx tsc --init
```

Exemplo de configuração:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### Instalação do Express

```bash
npm install express
```

### Instalação das tipagens do Express

```bash
npm install -D @types/express
```

### Configuração dos scripts

```json
{
  "scripts": {
    "dist": "tsup src",
    "start:dev": "tsx --env-file=.env src/server.ts",
    "start:watch": "tsx watch --env-file=.env src/server.ts",
    "start:dist": "npm run dist && node --env-file=.env dist/server.js"
  }
}
```

---

## 🎯 Objetivo

Este boilerplate foi criado para evitar a repetição das configurações iniciais em novos projetos Node.js com TypeScript, permitindo iniciar o desenvolvimento de forma mais rápida e organizada.
