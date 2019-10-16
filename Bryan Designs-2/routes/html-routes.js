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
    res.sendFile(path.join(__dirname, "../public/cities.html"));
  });

  // app.get("/artist-manager", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/artist-manager.html"));
  // });


  // app.get("/cms", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/cms.html"));
  // });

  // app.get("/gallery", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/gallery.html"));
  // });

  // app.get("/artists", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/artist-manager.html"));
  // });



};
