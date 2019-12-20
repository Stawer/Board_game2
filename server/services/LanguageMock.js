const { service } = require('./LanguageService')

const Language = require('../models/Language')
const faker = require('faker')
service.insertOne(new Language({
    name: 'Ingles',
    initials: 'en'
}))
service.insertOne(new Language({
    name: 'Español',
    initials: 'es'
}))