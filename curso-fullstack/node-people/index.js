const express = require("express")
const app = express();

app.use(express.json());
const PORT = 300;

// mock
const nomes = [
    { id: 1, nome: "Fernanda", idade: 18, casado: true },
    { id: 2, nome: "Juliana", idade: 22, casado: false },
    { id: 3, nome: "Doris", idade: 15, casado: false }
];

// Criando funções auxiliares
//Retornar o objeto pot ID 
function buscarNomePorID(id) {
    return nomes.filter((nome) => nome.id == id);
}

//Rota principal
app.get('/', (req, res) => {
    res.send("Seja bem vindo");
});

app.get('/teste', (req, res) => {
    res.send("Testando");
});

// Buscando nomes (listaNomes)
app.get('/listaNomes', (req, res) => {
    res.send(nomes)
});

//Buscando por ID
app.get("/listaNomes/:id", (req, res) => {
    let index = req.params.id;

    res.json(buscarNomePorID(index));
});

// Criando um cadastro
app.post("/listaNomes", (req, res) => {
    nomes.push(req.body)
    res.status(201).send('Nomes cadastrado com sucesso!');

});

app.listen(PORT, () => {
    console.log(`Servidor do projeto, rodando em http://localhost:${PORT}`)
});

