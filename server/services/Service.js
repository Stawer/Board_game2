class Service extends Array {

    getAll() {
        return this
    }

    next() {
        if(!this.hasOwnProperty('identifier')) {
            this.identifier = 0
        }
        this.identifier = this.identifier + 1
        return this.identifier
    }

    getOneUsingId(id) {
        return this.find(element => element.id === Number(id))
    }

    getRandom() {
        const random = Math.floor(Math.random() * (this.length ));
        return this[random]
    }

    insertOne(data) {
        data.id = this.next()
        this.push(data)
    }

    updateOne(data) {

        if(!data.hasOwnProperty('id')) {
            throw new Error('no id')
        }

        let position = undefined
        
        this.forEach((element, index) => {
            if(element.id === data.id) {
                position = index
            }
        })

        this.splice(position, 1, data)
    }

    deleteOneUsingId(id) {
        let position = undefined;

        this.forEach((element, index) => {
            if(element.id === Number(id)) {
                position = index
            }
        })

        this.splice(position, 1)
    }
}

module.exports = Service