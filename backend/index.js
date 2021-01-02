const express = require("express");
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({type: "get"});
});

app.get("/:id", (req, res) => {
    res.json({type: `get by id ${req.params.id}`});
});

app.post("/", (req, res) => {
    res.json({type: "post"});
});

app.put("/:id", (req, res) => {
    res.json({type: `put id ${req.params.id}`});
});

app.delete("/:id", (req, res) => {
    res.json({type: `delete id ${req.params.id}`});
});

app.listen(3000, () => console.log("Funcionando"));