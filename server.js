const express = require("express");
const app = express();
const expressLayouts=require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");
const bodyParser = require("body-parser");
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(bodyParser.urlencoded({limit:'10mb', extended:false}))

app.set( "view engine", "ejs" )
app.set( "views",__dirname+ "/views")
app.set('layout', 'layouts/layouts');
app.use(expressLayouts);
app.use(express.static('public'))

const port = process.env.PORT || 5000;

async function start() {
    try {
        await connectDB(process.env.DATABASE_URL);
        app.listen(port, () => console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
}
  start();

app.use('/', indexRouter)
app.use('/authors', authorRouter)