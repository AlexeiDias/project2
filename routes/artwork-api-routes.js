var db = require("../models");
module.exports = function(app) {

  app.get("/api/artwork", function(req, res) {
    db.Artwork.findAll({
    }).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });

  // app.get("/api/artwork/:id", function(req, res) {
  //   db.Artwork.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbArtwork) {
  //     res.json(dbArtwork);
  //   });
  // });

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