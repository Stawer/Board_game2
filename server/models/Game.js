const Entity = require('./Entity')

class Game extends Entity { 
    constructor(entity) {
        //se decalara el objeto y todas los atributos que el mismo espera
        super(entity, ['name', 'author_id', 'type_id', 'price', 'language_id', 'age', 'number_of_players'])
    }
}

module.exports = Game