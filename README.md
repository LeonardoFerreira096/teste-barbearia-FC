# Barbearia — Aula 02 (Docker Compose e projeto fullstack)

Aplicação fullstack: React (Vite) consumindo uma API Node/Express, com os dados
em um Postgres rodando em container.

## Estrutura

```
database/banco.sql        schema + carga inicial (5 produtos, 3 serviços)
server/                   API Node + Express + pg
frontend/Proj-Baber/      React + Vite + react-router-dom + axios
docker-compose.yml        orquestra banco, API, front e pgAdmin
```

## Como rodar

```bash
cp .env.example .env
docker compose up --build
```

| Serviço  | Endereço              |
| -------- | --------------------- |
| Front    | http://localhost:5173 |
| API      | http://localhost:3000 |
| pgAdmin  | http://localhost:5050 |
| Postgres | localhost:5432        |

pgAdmin: usuário `admin@barbearia.com`, senha `admin`. Ao cadastrar o servidor,
o host é `db` (o nome do serviço), não `localhost`.

## Rotas da API

| Método | Rota        | Retorna                  |
| ------ | ----------- | ------------------------ |
| GET    | `/produtos` | todos os produtos        |
| GET    | `/servicos` | todos os serviços        |
| GET    | `/health`   | status da API e do banco |

## Rotas do front

| Rota        | Página            |
| ----------- | ----------------- |
| `/produtos` | lista de produtos |
| `/servicos` | lista de serviços |

## Buildando só a API (exercício da aula)

```bash
docker build -t api-node:1.0 ./server
docker run --name api-node-container -p 3000:3000 api-node:1.0
```

Sozinha ela sobe, mas as rotas dão erro de conexão: sem o Postgres na mesma rede
não há banco para consultar. É exatamente o problema que o compose resolve.

## Detalhes que costumam quebrar

- **`DB_HOST=db`, não `localhost`.** Dentro do compose cada container é uma
  máquina; `localhost` seria o próprio container da API. O nome do serviço vira
  o hostname na rede do compose.
- **`VITE_API_URL=http://localhost:3000`, aí sim com localhost.** Quem chama a
  API é o navegador da sua máquina, não o container do front.
- **O `banco.sql` só roda na primeira subida.** O Postgres executa
  `/docker-entrypoint-initdb.d/` apenas quando o volume de dados está vazio. Se
  você mudar o SQL, precisa apagar o volume com `docker compose down -v`.
- **`--host 0.0.0.0` no Vite e no Express.** Sem isso o servidor escuta só na
  interface interna do container e você não acessa de fora.
- **`preco` vem como string.** O tipo `DECIMAL` do Postgres chega no JSON como
  `"35.00"`; o front converte com `Number()` antes de formatar.

## Rodando sem Docker

```bash
# API
cd server && npm install && cp .env.example .env && npm run dev

# Front
cd frontend/Proj-Baber && npm install && cp .env.example .env && npm run dev
```
