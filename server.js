// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/artwork-api-routes.js")(app);
require("./routes/artist-api-routes.js")(app);
require("./routes/location-api-routes.js")(app);
require("./routes/region-api-routes.js")(app);
require("./routes/comment-api-routes.js")(app);
require("./routes/html-routes.js")(app);




// =============================================================
// ^^^^^^^^^^^^^    ADD MORE ROUTES AS NEEDED   ^^^^^^^^^^^^^^^^
// =============================================================


console.log("sdjfhads");
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
    console.log("test");
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});