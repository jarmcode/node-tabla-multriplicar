const { boolean } = require("yargs");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número.";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Listar la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Número hasta el cuál se realizará la multiplicación.",
  }).argv;

module.exports = argv;
