const { v4: uuidv4 } = require('uuid')
const { database } = require('../infra/database/dados')
class TransacaoRepositoryInMemory {
    findAll() {
        return database
    }
    create(transacao) {
        database.push({
            id: uuidv4(),
            ...transacao,
            criadoEm: new Date()
        })
    }
    removeById(id) {
        console.log('TransacaoRepositoryInMemory::removeById::id', id)
        const index = database.findIndex(transacao => transacao.id === id)
        console.log('TransacaoRepositoryInMemory::removeById::index', index)
        database.splice(index, 1)
        console.log('TransacaoRepositoryInMemory::removeById::database', database)

    }
    updateTransacaoById(id, tile, type, category, amount) {
        console.log('TransacaoRepositoryInMemory::updateTransacaoById::id', id)
        const index = database.findIndex(transacao => transacao.id === id)
        const transacao = database.find(transacao => transacao.id === id)
        console.log('TransacaoRepositoryInMemory::updateTransacaoById::index', index)
        database[index] = {
            ...transacao,
            tile,
            type,
            category,
            amount
        }
        console.log('TransacaoRepositoryInMemory::updateTransacaoById::database', [database[index]])
    }

}

module.exports = TransacaoRepositoryInMemory
    