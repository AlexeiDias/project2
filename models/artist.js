module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    name: DataTypes.STRING
  });

  Artist.associate = function(models) {
    Artist.hasMany(models.Artwork, {
      onDelete: "cascade"
    });
  };

  return Artist;
};
