const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },

    // create_date:{
    //     type: Date,
    //     required: true
    // },

    orders:{
        type: Array,
        required: true,
    }
})


module.exports = mongoose.model('Order', orderSchema)