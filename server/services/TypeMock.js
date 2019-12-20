const { service } = require('./TypeService')

const Type = require('../models/Type')

service.insertOne(new Type({
    name: 'Estrategia'
}))

service.insertOne(new Type({
    name: 'Familiar'
}))