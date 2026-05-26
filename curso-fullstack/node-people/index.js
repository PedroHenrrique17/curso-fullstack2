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

// Pegar a posição ou index do elemento do array por id
function buscarIdMomes(id) {
    // findIndex
    return nomes.findIndex(nome => nome?.id == id);
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

app.delete("/listaNomes/:id", (req, res) => {
    let id = req.params.id;
    let index = buscarIdMomes(id);

    // se não encontrar, retornar erro
    if (index === -1) {
        return res.status(404).send(`Nenhum nome com id ${id} foi encontrado`);
    }

    // splice
    nomes.splice(index, 1);
    return res.send(`Nomes com id ${req.params.id} excluida com sucesso!`)
});

app.listen(PORT, () => {
    console.log(`Servidor do projeto, rodando em http://localhost:${PORT}`)
});

