const router = require('express').Router();
const Author = require('../models/Author')
const { service } = require('../services/AuthorService')

//READ
router.get('/all', async (request, response) => {
    response
        .status(200)
        .send(service.getAll());
});

//READ
router.get('/:id', async (request, response) => {
    const id = request.params.id
    response
        .status(200)
        .send(service.getOneUsingId(id));
});

//CREATE
router.post('/', async (request, response) => {
    const data = request.body
    try {
        service.insertOne(new Author(data))
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

//UPDATE
router.patch('/', async (request, response) => {
    const data = request.body
    try {
        service.updateOne(new Author(data))
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

//DELETE
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

//GET, POST, PATCH, DELETE, PUT
//GET ?
//POST -> 
//PATCH => 
//DELETE X

module.exports = router;