const express = require('express');
const author = require('../models/author');
const router = express.Router();
const Author = require('../models/author');
//get all authors
router.get('/', async(req, res) => {
let searchOptions = {}
if (req.query.name != null && req.query.name != '') {
    searchOptions.name = new RegExp(req.query.name, 'i')
}
    try {
        const authors = await Author.find(searchOptions) 
    res.render('authors',{
        authors: authors, 
        searchOptions:req.query});
    }catch {
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

router.delete('/:id', async(req, res) => {
    try {
        await Author.deleteOne({_id: req.params.id})
        res.redirect('/authors')
    } catch {
        res.redirect('/authors')
    }
})


module.exports=router;