var db = require("../models");

module.exports = function(app) {
  app.get("/api/artist", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Artist.findAll({
      include: [db.Artwork]
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  app.get("/api/artist/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Artist.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Artwork]
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  app.post("/api/artist", function(req, res) {
    db.Artist.create(req.body).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  app.delete("/api/artist/:id", function(req, res) {
    db.Artist.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

};
