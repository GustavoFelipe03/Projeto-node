const atualizarTransacaoPorIdUseCase = require('../useCases/atualizarTransacaoPorIdUseCase')

async function atualizarTransacaoPorIdController (request, response) {
    const { id } = request.params
    const { title, type, category, amount } = request.body
    console.log('AtualizarTransacaoPorIdController::START')
    if(!id) {
        return response.status(400).json({
            message:"Não é permitido atualizar uma transacão sem seu id"
        })
    }
    const { success, httpCpde, errorMessage} = await atualizarTransacaoPorIdUseCase.execute(id, title, type, category, amount)
    if(!success) {
        return response.status(httpCpde).json({
            message: errorMessage
        })
    }
    return response.json()
}

module.exports = atualizarTransacaoPorIdController
     