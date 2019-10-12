// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // // GET route for getting all of the posts
  // app.get("/api/posts", function(req, res) {
  //   var query = {};
  //   if (req.query.author_id) {
  //     query.AuthorId = req.query.author_id;
  //   }
  //   // Here we add an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Author
  //   db.Post.findAll({
  //     where: query,
  //     include: [db.Author]
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // // Get route for retrieving a single post
  // app.get("/api/posts/:id", function(req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Author
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Author]
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // POST route for saving a new comment
  app.post("/api/comment", function(req, res) {
    db.Artwork.create(req.body).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });

  // DELETE route for deleting comment
  app.delete("/api/comment/:id", function(req, res) {
    db.Artwork.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });

  // PUT route for updating comment
  app.put("/api/comment", function(req, res) {
    db.Artwork.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });
};
