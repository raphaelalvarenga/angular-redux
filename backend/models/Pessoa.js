const sequelize = require("../connection");
const { DataTypes } = require("sequelize");

const Pessoa = sequelize.define("pessoas", {
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    nacionalidade: DataTypes.STRING
})

module.exports = Pessoa;