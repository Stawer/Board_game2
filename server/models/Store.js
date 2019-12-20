const Entity = require('./Entity')

class Store extends Entity { 
    constructor(entity) {
        //se decalara el objeto y todas los atributos que el mismo espera
        super(entity, ['street', 'number', 'city'])
    }
}

module.exports = Store