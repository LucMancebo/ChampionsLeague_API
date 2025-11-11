// Importa as dependências necessárias do Express
import express, { json, Request, Response } from "express"

// Cria uma instância do aplicativo Express
const app = express()

// Define a porta do servidor a partir das variáveis de ambiente
const PORT = process.env.PORT

// Habilita o middleware do Express para parsear corpos de requisições em JSON
app.use(json())

// Define uma rota GET para a raiz do aplicativo
app.get("/", (req: Request, res: Response) => {
    // Envia uma resposta "Hello World" quando a rota é acessada
    res.send("Hello World")
})

// Inicia o servidor e escuta na porta definida
app.listen(PORT, () => {
    // Loga uma mensagem no console indicando que o servidor está rodando
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})  