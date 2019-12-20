const Entity = require('./Entity')

class Language extends Entity { 
    constructor(entity) {
        super(entity, ['name', 'initials'])
    }
}

module.exports = Language