const { repositoryFactory } = require('../repositories/factory')

async function execute () { 
    const repository = repositoryFactory()
    const transacoes = await repository.findAll()
    return transacoes
}

module.exports = { execute }