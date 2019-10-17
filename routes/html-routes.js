// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/gallery/gallerybook/index.html"));
  });

  app.get("/create-artist", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create-artist.html"));
  });


  app.get("/add-artwork", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add-artwork.html"));
  });

  app.get("/cities", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cities.html"));
  });

  app.get("/city-maker", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/city-maker.html"));
  });




};
