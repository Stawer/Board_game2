const Entity = require('./Entity')

class Supplier extends Entity { 
    constructor(entity) {
        //se decalara el objeto y todas los atributos que el mismo espera
        super(entity, ['name'])
    }
}

module.exports = Supplier