const { repositoryFactory } = require('../repositories/factory')

async function execute (transacao) { 
    const repository = repositoryFactory()
    const venda = {
        transacao
    }
    console.log('NovaTransacaoUseCase::execute::transacao', transacao)
    try {
        await repository.create(transacao)
        return {
            success: true
        }
    } catch (error) {
        console.log('TransacaoRepositoryNoSQL::findAll::startConnetion::error', error)
        return {
            success: false,
            httpCpde: 500,
            errorMessage: 'Ocorreu um erro ao tentar criar uma nova transação'
        }
    }

}

module.exports = { execute }