# ⚽ ChampionsLeague_API

API REST em **Node.js**, **TypeScript** e **Express.js** para gerenciar dados fictícios da UEFA Champions League: times e jogadores.

## 📚 Tecnologias

- Node.js
- TypeScript
- Express
- CORS

## 🧩 Boas Práticas Utilizadas

Este projeto foi desenvolvido aplicando conceitos fundamentais de arquitetura e organização de aplicações Node.js, seguindo boas práticas que garantem clareza, escalabilidade e manutenção facilitada.

### ✅ Criação de servidores HTTP nativos com Express

A API foi construída utilizando **Express**, para simplicidade e flexibilidade.

Isso permitiu comparar arquiteturas e entender as vantagens de cada stack.

### ✅ Uso de TypeScript para tipagem forte

Todo o código foi escrito em **TypeScript**, proporcionando:

- Tipagem estática;
- Autocomplete aprimorado;
- Detecção precoce de erros;
- Modelagem mais clara das entidades do sistema (Players, Clubs, Matches).

### ✅ Organização de código em camadas (Clean Structure)

A arquitetura do projeto segue camadas bem definidas:

- **Routes** – Definem endpoints e métodos HTTP;
- **Controllers** – Recebem a requisição e direcionam para a lógica de negócio;
- **Models/Data** – Estruturas e coleções de dados;
- **Utils** – Funções auxiliares e constantes gerais.

Essa separação aumenta a legibilidade do código e facilita futuras implementações.

### ✅ Manipulação de dados, filtros e lógica de negócio

Cada endpoint possui uma lógica clara, incluindo:

- Busca por ID;
- Filtragem de jogadores;
- Validação básica de dados;
- Criação, atualização parcial e remoção de registros.

### ✅ Conceitos de Arquitetura de Software

Foram aplicados conceitos como:

- **Responsabilidade única (SRP)**;
- **Separação de camadas**;
- **Agrupamento modular**;
- **Padrões REST**.

Essa estrutura garante uma API mais profissional, organizada e fácil de escalar.

## 🧱 Estrutura do Projeto

```
├── 📁 src
│   ├── 📁 Models
│   │   ├── 📄 clubModel.ts
│   │   ├── 📄 httpResponseModel.ts
│   │   ├── 📄 playerModel.ts
│   │   └── 📄 statistcsModel.ts
│   ├── 📁 Repositories
│   │   ├── 📄 clubsData.ts
│   │   └── 📄 playersData.ts
│   ├── 📁 Routes
│   │   └── 📄 routes.ts
│   ├── 📁 controllers
│   │   ├── 📄 clubsController.ts
│   │   └── 📄 playersController.ts
│   ├── 📁 data
│   │   ├── ⚙️ clubs.json
│   │   └── ⚙️ players.json
│   ├── 📁 services
│   │   ├── 📄 clubsService.ts
│   │   └── 📄 playersService.ts
│   ├── 📁 utils
│   │   └── 📄 HTTPHelper.ts
│   ├── 📄 app.ts
│   └── 📄 server.ts
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ package-lock.json
├── ⚙️ package.json
└── ⚙️ tsconfig.json
```

---

## 🚀 Como Rodar

   ```bash
   git clone https://github.com/LucMancebo/ChampionsLeague_API.git

   npm install

   npm run dev

   Acesse a API em: http://localhost:${PORT}

   ```

## Endpoints

## 📡 Endpoints da API

| Método     | Rota           | Descrição                                |
| ---------- | -------------- | ---------------------------------------- |
| **GET**    | `/players`     | Retorna todos os jogadores               |
| **POST**   | `/players`     | Cadastra um novo jogador                 |
| **DELETE** | `/players/:id` | Remove um jogador pelo ID                |
| **PATCH**  | `/players/:id` | Atualiza parcialmente um jogador pelo ID |
| **GET**    | `/players/:id` | Retorna um jogador específico pelo ID    |
| **GET**    | `/clubs`       | Lista todos os clubes                    |

## Exemplo de Requisição e Resposta

### GET /teams

Resposta:

```JSON
[
  {
    "id": 1,
    "name": "Real Madrid",
    "country": "Espanha"
  },
  {
    "id": 2,
    "name": "Manchester City",
    "country": "Inglaterra"
  }
]
```

### Licença

Este projeto está sob a licença **MIT**.
