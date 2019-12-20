const { service } = require('./SupplierService')
const Supplier = require('../models/Supplier')

service.insertOne(new Supplier({
    name: 'Devir'
}))

service.insertOne(new Supplier({
    name: 'Skyship'
}))

service.insertOne(new Supplier({
    name: 'Hasbro'
}))