const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const server = express();

//define o tipo do template e o tipo de arquivo
server.set("view engine", "njk");

//Define um diretório onde idel para vc acessar itens de estilo
server.use(express.urlencoded({extended: true}));
server.use(express.static('public'));
server.use(routes);

//Caminho do arquivo, objetos e sua variavel
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

//Define a porta onde o servidor irá rodar
server.listen(5100, function(){
    console.log("Server is running");
});

