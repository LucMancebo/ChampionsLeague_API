// Importa as dependências necessárias do Express
import createapp from "./app";

const app = createapp();

// Define a porta do servidor a partir das variáveis de ambiente
const PORT = process.env.PORT;

// Inicia o servidor e escuta na porta definida
app.listen(PORT, () => {
  // Loga uma mensagem no console indicando que o servidor está rodando
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
