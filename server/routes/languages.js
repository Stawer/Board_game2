const router = require('express').Router();
const Language = require('../models/Language')
const { service } = require('../services/LanguageService')

router.get('/', async (request, response) => {
    response
        .status(200)
        .send(service.getAll());
});

router.post('/', async (request, response) => {
    const data = request.body
    try {
        service.insertOne(new Language(data))
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

router.patch('/', async (request, response) => {
    const data = request.body
    try {
        service.updateOne(new Language(data))
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