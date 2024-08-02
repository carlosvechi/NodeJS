//Importando o pacote
const moment = require("moment");
//Criando um objeto Date, buscando a hora e data atuais
const time = new Date();
//formatando a data
const parsedTime = moment(time).format("h:mm:ss");
//Exibindo no console
console.log(parsedTime);