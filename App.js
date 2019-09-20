'use strict'

const Express = require('express')
const Cors = require('cors')
const ConvidadoRoute = require('./routes/ConvidadosRoute')

const ClienteRoute = require('./routes/ClientesRoute')
const ProdutoRoute = require('./routes/ProdutoRoute')
const UsuarioRoute = require('./routes/UsuariosRoute')


class App {

    constructor() {
        this.app;
    }

    //Método para inicializar o objeto do Express
    init() {

        //Instanciar o express
        this.app = Express();

        //Conversor JSON-ObjetoJS
        this.app.use(Express.json())
        this.app.use(Cors())

        //Instanciar a minha rotas
        //Rota de Convidados
        new ConvidadoRoute(this.app)

        new ClienteRoute(this.app)
        new ProdutoRoute(this.app)

        //Rota para Usuarios
        new UsuarioRoute(this.app)


        //Rota Raíz
        this.app.get('/', function (req, res) {
            res.send('Bem-vindo a API - Smart Market!')
        })

        //Listen
        this.app.listen(3000, function () {
            console.log('API - Smart Market rodando na porta: 3000')
        })

    }
}

new App().init()