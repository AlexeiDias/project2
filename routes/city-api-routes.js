var db = require("../models");
module.exports = function(app) {

  app.get("/api/city", function(req, res) {
    db.City.findAll({
    }).then(function(dbCity) {
      res.json(dbCity);
    });
  });

  app.get("/api/city/:id", function(req, res) {
    db.City.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbCity) {
      res.json(dbCity);
    });
  });

  app.get("/api/city/:id/artwork", function(req, res) {
    db.Artwork.findAll({
      where: {
      CityId: req.params.id
      }
    }).then(function(dbArtwork) {
      res.json(dbArtwork);
    });
  });

  app.post("/api/city", function (req, res) {
    db.City.create(req.body).then(function (dbCity) {
      res.json(dbCity);
    });
  });
  
};