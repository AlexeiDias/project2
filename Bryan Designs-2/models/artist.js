module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Artist.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Artist.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Artist;
};
