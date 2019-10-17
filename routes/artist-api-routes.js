var db = require("../models");

module.exports = function(app) {
  app.get("/api/artists", function(req, res) {
    db.Artist.findAll({
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  // app.get("/api/artists/:id", function(req, res) {
  //   db.Artist.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbArtist) {
  //     res.json(dbArtist);
  //   });
  // });

  app.post("/api/artists", function(req, res) {
    db.Artist.create(req.body).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

  app.delete("/api/artists/:id", function(req, res) {
    db.Artist.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbArtist) {
      res.json(dbArtist);
    });
  });

};
