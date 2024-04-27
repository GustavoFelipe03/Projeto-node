const { startConnection, closeConnection } = require('../infra/database/mongodb')
const transacaoModel = require('../infra/models/transacao')

class TransacaoRepositoryNoSQL {
    async findAll() {
        try {
            await startConnection()
            const transacoes = await transacaoModel.find()
            console.log('TransacaoRepositoryNoSQL::findAll::transacoes', transacoes) 
            await closeConnection()
            return transacoes

        } catch (error) {
            console.log('TransacaoRepositoryNoSQL::findAll::startConnetion::error', error)
            throw new Error('erro ao tentar consultar as transação')
        }
    }
    async create(transacao) {
        try {
            await startConnection()
             console.log('TransacaoRepositoryNoSQL::create::transacao', transacao)
            await transacaoModel.create(transacao)
            await closeConnection()
        } catch (error) {
            console.log('TransacaoRepositoryNoSQL::findAll::startConnetion::error', error)
            throw new Error('erro ao tentar criar uma transação')
        }

    }
    async removeById(_id) {
        try {
            await startConnection()
             console.log('TransacaoRepositoryNoSQL::removeById::_id', _id)
            await transacaoModel.deleteOne({ _id })
            await closeConnection()
        } catch (error) {
            console.log('ERROR::TransacaoRepositoryNoSQL::removeById::error', error)
            throw new Error('erro ao tentar remover uma transação') 
        }

    }
    async updateTransacaoById(_id, title, type, category, amount) {
        try {
            await startConnection()
             console.log('updateTransacaoById::updateById::_id', _id)
            await transacaoModel.updateOne({ _id }, { title, type, category, amount })
            await closeConnection()
        } catch (error) {
            console.log('ERROR::TransacaoRepositoryNoSQL::removeById::error', error)
            throw new Error('erro ao tentar atualizar as informações de uma transação') 
        }

    }
}

module.exports = TransacaoRepositoryNoSQL