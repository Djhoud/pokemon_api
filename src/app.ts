import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Pokémon API!');
});

// Endpoint de exemplo para obter informações de um Pokémon
app.get('/pokemon/:name', (req, res) => {
  const { name } = req.params;
  // Aqui você pode adicionar lógica para buscar Pokémon em um banco de dados ou uma API externa
  res.json({ name, type: 'Electric', level: 25 });
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
