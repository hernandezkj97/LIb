const express = require('express');
const author = require('../models/author');
const router = express.Router();
const Book = require('../models/book');
//get all books
router.get('/', async(req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name != '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const books = await Book.find(searchOptions) 
    res.render('books',{
        books: books, 
        searchOptions:req.query});
    }catch {
        res.redirect('/')
    }
})
//get one book
router.get('/new',(req, res) => {
    res.render('books/new', {book: new Book()})
})
//post new book
router.post('/', async(req, res) => {
    try {
        const book = new Book({
            title: req.body.title,
    })
    }catch {
        res.render('books/new')
    }

})

router.delete('/:id', async(req, res) => {
    try {
        await Book.deleteOne({_id: req.params.id})
        res.redirect('/books')
    } catch {
        res.redirect('/books')
    }
})


module.exports=router;