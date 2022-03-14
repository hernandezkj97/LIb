const express = require('express');
const author = require('../models/author');
const router = express.Router();
const Book = require('../models/book');
//get all books
router.get('/', (req, res) => {
    res.send("All Books")
})
//get one book
router.get('/new',(req, res) => {
    res.send('New Book')
})
//post new book
router.post('/', (req, res) => {
    res.send("Create Book")
});

//delete book
router.delete('/', (req, res) => {
    res.send("Delete Book")
})


module.exports=router;