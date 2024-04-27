const { repositoryFactory } = require('../repositories/factory')

async function execute (id) { 
    const repository = repositoryFactory()
    try {
        await repository.removeById(id)
        return {
            success: true
        }
    } catch (error) {
        console.log('RemoverTransacaoPorIdUseCase::findAll::startConnetion::error', error)
        return {
            success: false,
            httpCpde: 500,
            errorMessage: 'Ocorreu um erro ao tentar remover uma transação'
        }
    }

}

module.exports = { execute }