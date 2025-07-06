import { kMaxLength } from "buffer";
import { timeStamp } from "console";
import mongoose, { model } from "mongoose";
import { type } from "os";


const p  = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true,
    },

    image:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: false,
    },

    category:{
        type: String,
        enum: ['electronics', 'clothing', 'books', 'home', 'kitchen'],
        required: true
    }
},{
    timestamps: true
});

const Product = mongoose.model('Product', p);

export default Product