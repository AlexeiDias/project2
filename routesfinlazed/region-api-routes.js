var db = require("../models");

module.exports = function(app) {
  app.get("/api/region", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Region.findAll({
      include: [db.Location]
    }).then(function(dbRegion) {
      res.json(dbRegion);
    });
  });

  app.get("/api/region/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Region.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Location]
    }).then(function(dbRegion) {
      res.json(dbRegion);
    });
  });

  app.post("/api/region", function(req, res) {
    db.Region.create(req.body).then(function(dbRegion) {
      res.json(dbRegion);
    });
  });

  app.delete("/api/region/:id", function(req, res) {
    db.Region.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRegion) {
      res.json(dbRegion);
    });
  });

};
