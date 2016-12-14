const express = require("express");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contact")
const app = express(); 
// set the view page engine to ejs
app.set("view engine", "ejs");

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
app.use(contactRoutes);
// Listen for output
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening at ${process.env.port || 3000}`);
});