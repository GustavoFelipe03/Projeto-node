const novaTransacaoUseCase = require('../useCases/novaTransacaoUseCase')

async function novaTransacaoController (request, response) {
    const transacao = request.body
    const { title, type, category, amount } = transacao
    if(!title|| !type || !category || !amount) {
        return response.status(400).json({
            message:"As inforções obrigatorias são: title, type, category e amount"
        })
    }
    const { success, httpCpde, errorMessage} = await novaTransacaoUseCase.execute(transacao)
    if(!success) {
        return response.status(httpCpde).json({
            message: errorMessage
        })
    }
    return response.json()
}

module.exports = novaTransacaoController
     