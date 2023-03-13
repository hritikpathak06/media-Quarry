const express = require("express");
require("../src/db/conn");
const hbs = require("hbs");
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// setting up path
const static_path = path.join(__dirname, "../public")
const partial_path = path.join(__dirname, "../tempelates/partials");
const views_path = path.join(__dirname, "../tempelates/views");
// console.log(static_path)

// middleware
app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set("views", views_path);
hbs.registerPartials(partial_path);

// routing
app.get("/", (req,res) => {
    res.render("index");
});

app.get("/contact", (req,res) => {
    res.render("contact");
});

app.listen(port, () => {
    console.log(`server started listening at the port: ${port}`);
});