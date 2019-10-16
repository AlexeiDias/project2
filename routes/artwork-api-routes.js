var db = require("../models");

module.exports = function(app) {
  app.get("/api/artwork", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Artwork.findAll({
      include: [db.Comment]
    }).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });

  app.get("/api/artwork/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Artwork.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Comment]
    }).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });

  app.post("/api/artwork", function(req, res) {
    db.Artwork.create(req.body).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });

  app.delete("/api/artwork/:id", function(req, res) {
    db.Artwork.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });

};

