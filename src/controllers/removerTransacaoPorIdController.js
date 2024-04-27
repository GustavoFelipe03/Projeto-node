const removerTransacaoPorIdUseCase = require('../useCases/removerTransacaoPorIdUseCase')

async function removerTransacaoPorIdController (request, response) {
    const { id } = request.params
    console.log('removerTransacaoPorIdController::START')
    if(!id) {
        return response.status(400).json({
            message:"Não é permitido remover uma transacão sem seu id"
        })
    }
    const { success, httpCpde, errorMessage} = await removerTransacaoPorIdUseCase.execute(id)
    if(!success) {
        return response.status(httpCpde).json({
            message: errorMessage
        })
    }
    return response.json()
}

module.exports = removerTransacaoPorIdController
     