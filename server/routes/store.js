const router = require('express').Router();
const Store = require('../models/Store')
const { service } = require('../services/StoreService')

//Read
router.get('/', async (request, response) => {
    response
        .status(200)
        .send(service.getAll());
});

//Create
router.post('/', async (request, response) => {
    const data = request.body
    try {
        service.insertOne(new Store(data))
        response
            .status(200)
            .send({
                status: 'OK'
            })
    } catch (error) {
        response
            .status(400)
            .send({
                error: error.message
            })
    }
    
    
});

//Update
router.patch('/', async (request, response) => {
    const data = request.body
    try {
        service.updateOne(new Store(data))
        response
            .status(200)
            .send({
                status: 'OK'
            })
    } catch (error) {
        response
            .status(400)
            .send({
                error: error.message
            })
    }
});

//Delete
router.delete('/:id', async (request, response) => {
    const id = request.params.id
    try {
        service.deleteOneUsingId(id)
        response
            .status(200)
            .send({
                status: 'OK'
            })
    } catch (error) {
        response
            .status(400)
            .send({
                error: error.message
            })
    }
});

module.exports = router;