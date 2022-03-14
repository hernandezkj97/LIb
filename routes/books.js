const express = require('express');
const Author = require('../models/author');
const router = express.Router();
const Book = require('../models/book');
//get all books
router.get('/', (req, res) => {
    res.send("All Books")
})
//get one book
router.get('/new',async(req, res) => {
    try {
        const authors= await Author.find({})
        const book=new Book()
        res.render('books/new',{
            authors: authors,
            book: book
        })
    } catch{
        res.redirect('/books')

        
    }
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