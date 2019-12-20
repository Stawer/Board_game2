const Entity = require('./Entity')

class Author extends Entity { 
    constructor(entity) {
        super(entity, ['name'])
    }
}

module.exports = Author