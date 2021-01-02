const fs = require("fs");
const path = require("path");
const Pessoa = require("../models/Pessoa");

module.exports = function loadPessoas () {
    const pessoas = JSON.parse(fs.readFileSync(path.join(__dirname, "people-data.json"), "utf8"))
    
    Pessoa
        .sync({ force: true })
        .then(result => Pessoa.bulkCreate([
            {"nome": "Marilyn Monroe", "idade": "17", "nacionalidade": "American"},
            {"nome": "Abraham Lincoln", "idade": "50", "nacionalidade": "American"},
            {"nome": "Nelson Mandela", "idade": "45", "nacionalidade": "South African"},
            {"nome": "John F. Kennedy", "idade": "30", "nacionalidade": "American"},
            {"nome": "Martin Luther King",  "idade": "42", "nacionalidade": "American"},
            {"nome": "Queen Elizabeth II", "idade": "18", "nacionalidade": "British"},
            {"nome": "Winston Churchill", "idade": "65", "nacionalidade": "British"},
            {"nome": "Donald Trump", "idade": "11", "nacionalidade": "American"},
            {"nome": "Bill Gates", "idade": "25", "nacionalidade": "American"}
        ]))
    
    
}