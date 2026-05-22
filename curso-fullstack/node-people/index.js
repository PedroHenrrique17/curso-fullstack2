const express = require("express")
const app = express();

const PORT = 300;

app.listen(PORT, () => {
    console.log(`Servidor do projeto, rodando em http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send("Seja bem vindo");
});

app.get('/teste', (req, res) => {
    res.send("Testando");
});