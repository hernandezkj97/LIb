const express = require('express');
const router = express.Router();
const Author = require('../models/author');
//get all 

router.get('/', async(req, res) => {
    try {
        const authors = await Author.find({})
        res.render('authors/index', {authors: authors})
    } catch {
        res.redirect('/')
    }
})
//get one author
router.get('/new',(req, res) => {
    res.render('authors/new', {author: new Author()})
})
router.post('/', async(req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try {
        const newAuthor = await author.save()
        res.redirect('authors')
        
    } catch {
        
    res.render('authors/new', {
        author: author,
        errorMessage: "Error saving author"
        })
    }
})


module.exports=router;