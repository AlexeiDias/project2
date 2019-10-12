var db = require("../models");

module.exports = function(app) {
  // Find all Artists and return them to the user with res.json
  app.get("/api/artists", function(req, res) {
    db.Artist.findAll({}).then(function(dbArtitst) {
      res.json(dbArtitst);
    });
  });

  app.get("/api/artists/:id", function(req, res) {
    // Find one Artists with the id in req.params.id and return them to the user with res.json
    db.Artist.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbArtitst) {
      res.json(dbArtitst);
    });
  });

  app.post("/api/artists", function(req, res) {
    // Create an Artist with the data available to us in req.body
    console.log(req.body);
    db.Artist.create(req.body).then(function(dbArtitst) {
      res.json(dbArtitst);
    });
  });

//   app.delete("/api/artists/:id", function(req, res) {
//     // Delete the Artist with the id available to us in req.params.id
//     db.Author.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

};
