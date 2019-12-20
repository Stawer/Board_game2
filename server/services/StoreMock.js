const { service } = require('./StoreService')
const Store = require('../models/Store')
const faker = require('faker')

service.insertOne(new Store({
    street: 'Pajaritos',
    number: faker.random.number (10000),
    city: 'Santiago',
}))

service.insertOne(new Store({
    street: 'Concha y Toro',
    number: faker.random.number (10000),
    city: 'Santiago',
}))