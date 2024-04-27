const { Schema, model } = require('mongoose')
const transacaoSchema = new Schema({
    title: String,
    type: String,
    category: String,
    amount: Number
}, { timestamps: true })
module.exports = model('Transacoes', transacaoSchema)