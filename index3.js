// Veremos como proceder para criar a primeira aplicação web com node.js
 // Para isso, usaremos um pacote HTTP para criar um servidor e acessá-lo pelo browser

 var http = require("http");

 http.createServer(function(request, response){
    // response e end servem para pontuar uma escrita na página web sem precisar de um arquivo HTML.
    response.write("Primeiros passos com Node.JS");
    response.end();
 }).listen(8081);

 console.log("Servidor rodando em http://localhost:8081");