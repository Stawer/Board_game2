const { service } = require('../services/AuthorService')
const faker = require('faker')

for (let i = 0; i < 100; i++) {
    service.insertOne({
        name: faker.name.findName()
    })
}