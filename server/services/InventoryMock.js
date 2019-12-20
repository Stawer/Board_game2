const { service } = require('../services/InventoryService')
const { service: gameService } = require('../services/GameService')
const { service: storeService } = require('../services/StoreService')
const { service: supplierService } = require('../services/SupplierService')
const Inventory = require('../models/Inventory')
const faker = require('faker')

for (let i = 0; i < 100; i++) {
    service.insertOne(new Inventory({
        game_id: gameService.getRandom().id,
        quantity: faker.random.number(15),
        store_id: storeService.getRandom().id,
        supplier_id: supplierService.getRandom().id
    }))
}