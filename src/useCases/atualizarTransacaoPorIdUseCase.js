const { repositoryFactory } = require('../repositories/factory')

async function execute (id, title, type, category, amount) {
    const repository = repositoryFactory()
    try {
        await repository.updateTransacaoById(id, title, type, category, amount)
        return {
            success: true
        }
    } catch (error) {
        console.log('ERROR::atualizarTransacaoPorIdUseCase::findAll::execute::error', error)
        return {
            success: false,
            httpCpde: 500,
            errorMessage: 'Ocorreu um erro ao tentar atualizar as informações uma transação'
        }
    }

}

module.exports = { execute }