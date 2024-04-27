const listagemTransacoesUseCase = require('../useCases/listagemTransacoesUseCase')

async function listagemTransacoesController (request, response){
    const vendas = await listagemTransacoesUseCase.execute()
    return response.json(vendas)
}

module.exports = listagemTransacoesController