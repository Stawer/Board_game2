
class Entity {
    constructor(entity, fields) {
        
        for (const key in entity) {
            let found = false
            //for of recorre array
            if(key !== 'id') {
                for (const field of fields) {
                    if(key === field) {
                        found = true;
                        break
                    }
                }
            }

            if(!found && key !== 'id')  {
                throw new Error(`el objeto declarado no tiene la estructura correcta`)
            }
            // de otra forma asigna la propiedad
            this[key] = entity[key];
        }        
    }
}

module.exports = Entity
