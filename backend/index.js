const express = require("express");
const bodyParser = require('body-parser');
const sequelize = require("./connection");
const Pessoa = require("./models/Pessoa");

let retorno = {};
let status = null;

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    Pessoa
        .findAll()
        .then(result => {
            retorno = result;
            status = 200;
        })
        .catch(error => {
            retorno = result;
            status = 500;
        })
        .finally(() => res.status(status).json(retorno));
});

app.get("/:id", (req, res) => {
    const id = req.params.id;
    Pessoa
        .findByPk(id)
        .then(result => {
            retorno = result;
            status = 200;
        })
        .catch(error => {
            retorno = result;
            status = 500;
        })
        .finally(() => res.status(status).json(retorno));
});

app.post("/", (req, res) => {
    const pessoa = req.body;

    Pessoa
        .create(pessoa)
        .then(result => {
            retorno = result;
            status = 200;
        })
        .catch(error => {
            retorno = result;
            status = 500;
        })
        .finally(() => res.status(status).json(retorno));
});

app.put("/:id", (req, res) => {
    const pessoa = {...req.body, id: req.params.id};

    Pessoa
        .update(pessoa, {
            where: {
                id: pessoa.id
            }
        })
        .then(result => {
            retorno = result;
            status = 200;
        })
        .catch(error => {
            retorno = result;
            status = 500;
        })
        .finally(() => res.status(status).json(retorno));
});

app.delete("/:id", (req, res) => {
    const id = req.params.id;

    Pessoa
        .destroy({
            where: {id}
        })
        .then(result => {
            retorno = result;
            status = 200;
        })
        .catch(error => {
            retorno = result;
            status = 500;
        })
        .finally(() => res.status(status).json(retorno));
});

app.listen(3000, () => console.log("Funcionando"));