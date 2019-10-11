module.exports = function (sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
        // Giving the Location model a name of type STRING
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Location.associate = function (models) {
        // Associating Location with Artist
        // When a Location is deleted, also delete any associated Artists
        Location.hasMany(models.Artist, {
            onDelete: "cascade"
        });

        // We're saying that a Location should belong to a Region
        // A Location can't be created without a Region due to the foreign key constraint
        Location.belongsTo(models.Region, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Location;
};