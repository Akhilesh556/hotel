const mongoose= require("mongoose")

const menuitemSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet','spicy','sour'],
        required: true   
    },
    isdrink: {
        type: Boolean,
        required: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    numsales: {
        type: Number,
        default: 0 
    }
})

const menuitem= mongoose.model('menuitem',menuitemSchema)
module.exports= menuitem