const mongoose = require('mongoose')

async function startConnection() {
    try {
        await mongoose.connect('mongodb://localhost:27017/projeto-node')
        console.log('MONGODB::startConnetion::conexão com o mongo iniciada')
    } catch (error) {
        console.log('ERROR::MONGODB::startConnetion::error', error)
        throw new Error('erro ao tentar se conectar ao servidor')
    }
}

async function closeConnection () {
    try {
        await mongoose.disconnect()
         console.log('MONGODB::closeConnetion::conexão com o mongo encerrada')
    } catch (error) {
        console.log('ERROR::MONGODB::startConnetion::error', error)
        throw new Error('erro ao tentar se desconectar ao servidor')
    }   
}

module.exports = {
    startConnection,
    closeConnection
}