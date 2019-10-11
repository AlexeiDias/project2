module.exports = function (sequelize, DataTypes) {
    var Region = sequelize.define("Region", {
        // Giving the Region model a name of type STRING
        name: {
           type: DataTypes.STRING,
           allowNull: false
        }
    });

    Region.associate = function (models) {
        // Associating Region with Location
        // When an Region is deleted, also delete any associated Locations
        Region.hasMany(models.Location, {
            onDelete: "cascade"
        });
    };

    return Region;
};