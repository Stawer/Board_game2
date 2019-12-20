const router = require('express').Router();
const Inventory = require('../models/Inventory')
const { service: inventoryService } = require('../services/InventoryService')
const { service: gameService } = require('../services/GameService')

router.get('/', async (request, response) => {
    const inventoryList = inventoryService.getAll().map(item => {
        return {
            ...item,
            game: gameService.getOneUsingId(item.game_id)
        }
    })
    
    response
        .status(200)
        .send(inventoryList);
});

router.get('/total_value', async (request, response) => {
    let sum = 0
    inventoryService.getAll().forEach(item => {
        const game = gameService.getOneUsingId(item.game_id)
        sum += item.quantity * game.price
    })
    response
        .status(200)
        .send({
            total_value: sum
        });
});

router.get('/total/using/game/:id', async (request, response) => {
    const gameId = request.params.id
    let sum = 0
    let quantity = 0
    const game = gameService.getOneUsingId(gameId)
    inventoryService.getAll().filter(item => {
        return item.game_id == gameId
    }).forEach(item => {
        sum += item.quantity * game.price
        quantity += item.quantity
    })
    response
        .status(200)
        .send({
            game,
            total_quantity: quantity,
            total_value: sum
        });
});

router.post('/', async (request, response) => {
    const data = request.body
    try {
        service.insertOne(new Inventory(data))
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
        service.updateOne(new Inventory(data))
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