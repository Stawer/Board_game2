const router = require('express').Router();
const Supplier = require('../models/Supplier')
const { service } = require('../services/SupplierService')

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
        service.insertOne(new Supplier(data))
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
        service.updateOne(new Supplier(data))
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