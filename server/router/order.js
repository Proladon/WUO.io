const express = require('express')
const router = express.Router()
const Order = require('../model/order')

// search/get order
router.get('/', (req, res) => {
    res.send("HI")
})

// create order
router.post('/', async (req, res) => {
    const order = new Order({
        name: req.body.name,
        // create_date: req.body.create_date,
        orders:[],
    })

    try {
        console.log('saving')
        const saveOrder = await order.save()
        res.send({order_id: order._id})
        console.log('done')
    } catch (error) {
        res.status(400).send(error)
    }
})

// delete order
router.delete('/', (req, res) => {

})

// update order
router.post('/', (req, res) => {

})

module.exports = router