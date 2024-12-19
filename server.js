
const dotenv = require("dotenv"); // require package
dotenv.config(); // Loads the environment variables from .env file
const express = require('express');
const morgan = require('morgan')
const methodOverride = require("method-override"); // new

const app = express();

// Database
require("./configs/database")




// MIDDLEWARE
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(morgan("dev"))
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // new



// ROUTES

// // GET /
app.get("/", async (req, res) => {
  res.render("index");
 });

// // Start New Page
// app.get("/new", async (req,res) => {
// res.render("new");
// })

// Seed Route
app.use('/', require('./routes/seed'));

app.use('/', require('./routes/clothing'));

app.listen(3031, () => {
    console.log('Listening on port 3031');
  });