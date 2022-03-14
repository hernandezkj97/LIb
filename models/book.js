const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: {
        type: string,
        required: true,
    },
    description: {
        type: string,

    },
    publishDate:{
        type: Date,
        required: true,

    },
    pageCount:{
        type: Number,
        required: true,
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now,
    },
    coverImageName:{
        type: string,
        required: true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author',
    }
});
module.exports=mongoose.model("Book",bookSchema);
