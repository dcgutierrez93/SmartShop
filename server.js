// Dependencies.
const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');

// Setup Express Server
const app = express();
const PORT = process.env.PORT || 3000;

// bodyParser
app.use(bodyParser.json());

// Static directory
app.use(express.static(__dirname + '/public'));

// Require Routes
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
