const { service } = require('../services/GameService')
const { service: authorService } = require('../services/AuthorService')
const { service: languageService } = require('../services/LanguageService')
const { service: typeService } = require('../services/TypeService')
const Game = require('../models/Game')
const faker = require('faker')

for (let i = 0; i < 100; i++) {
    service.insertOne(new Game({
        name: faker.random.words(),
        author_id: authorService.getRandom().id,
        language_id: languageService.getRandom().id,
        type_id: typeService.getRandom().id,
        number_of_players: faker.random.number(2) + 2,
        age: faker.random.number(10) + 8,
        price: faker.random.number(10) * 10000,
    }))
}