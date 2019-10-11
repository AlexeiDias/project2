module.exports = function (sequelize, DataTypes) {
    var Artist = sequelize.define("Artist", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2,30]
            }
        },
        contact: {
            type: DataTypes.TEXT
        }
    });

    Artist.associate = function (models) {
        // We're saying that a Artist should belong to a Location
        // An Artist can't be created without a Location due to the foreign key constraint
        Artist.belongsTo(models.Location, {
            foreignKey: {
                allowNull: false
            }
        });

        // Associating Artist with Artwork
        // When a Artist is deleted, also delete any associated Artwork
        Artist.hasMany(models.Artwork, {
            onDelete: "cascade"
        });
    };

    return Artist;
};