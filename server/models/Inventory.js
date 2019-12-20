const Entity = require('./Entity')

class Inventory extends Entity { 
    constructor(entity) {
        super(entity, ['game_id', 'quantity','store_id', 'supplier_id'])
    }
}

module.exports = Inventory