// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // // cms route loads cms.html
  // app.get("/cms", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/cms.html"));
  // });

  // blog route loads information.html
  app.get("/information", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/information.html"));
  });

  // authors route loads artist.html
  app.get("/artist", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/artist.html"));
  });

};
