module.exports = function (sequelize, DataTypes) {
    var City = sequelize.define("City", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    City.associate = function (models) {
        City.hasMany(models.Artist, {
            onDelete: "cascade"
        });
    };

    City.associate = function (models) {
        City.hasMany(models.Artwork, {
            onDelete: "cascade"
        });
    };
    return City;
};