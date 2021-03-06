if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require("express");
const app = express();
const expressLayouts=require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");
const bookRouter = require("./routes/books");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.urlencoded({limit:'10mb', extended:false}))

app.set( "view engine", "ejs" )
app.set( "views",__dirname+ "/views")
app.set('layout', 'layouts/layouts');
app.use(expressLayouts);
app.use(express.static('public'))

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Database connection Open.'))
app.listen ( process.env.PORT || 3000);



app.use('/', indexRouter);
app.use('/authors', authorRouter);
app.use('/books', bookRouter);