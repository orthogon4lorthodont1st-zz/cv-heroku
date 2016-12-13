const express = require("express");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const app = express(); 
// set the view page engine to ejs
app.set("view engine", "ejs");

// Middleware
app.use(express.static('public'));
app.use(express.static('/public/img'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

// Listen for output
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server listening at ${process.env.port || 3000}`);
})