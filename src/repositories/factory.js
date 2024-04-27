const TransacaoRepositoryNoSQL = require('./TransacaoRepositoryNoSQL')
const TransacaoRepositoryInMemory = require('./TransacaoRepositoryInMemory')

function repositoryFactory () {
    const driver = process.env.DATABASE_CONNETION_DRIVER
    if (driver === 'inMemory') {
        return new TransacaoRepositoryInMemory()
    } else {
        return new TransacaoRepositoryNoSQL()
    }
}

module.exports = { repositoryFactory }