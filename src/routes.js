const { Router } = require('express')
const listarTransacoesController = require('./controllers/listagemTransacoesController')
const criarTransacaoController = require('./controllers/novaTransacaoController')
const removerTransacaoPorIdController = require('./controllers/removerTransacaoPorIdController')
const atualizarTransacaoPorIdController = require('./controllers/atualizarTransacaoPorIdController')
const routes = Router()

routes.get('/transacoes', listarTransacoesController)
routes.post('/transacao', criarTransacaoController)
routes.delete('/transacao/:id', removerTransacaoPorIdController)  
routes.put('/transacao/:id', atualizarTransacaoPorIdController)

module.exports = routes