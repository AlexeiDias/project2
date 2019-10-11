module.exports = function (sequelize, DataTypes) {
    var Artwork = sequelize.define("Artwork", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        genre: {
            type: DataTypes.STRING,
            defaultValue: "Misc"
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Artwork.associate = function (models) {
        // We're saying that an Artwork should belong to an Artist
        // An Artwork can't be created without an Artist due to the foreign key constraint
        Artwork.belongsTo(models.Artist, {
            foreignKey: {
                allowNull: false
            }
        });

        Artwork.hasMany(models.Comment, {
            onDelete: "cascade"
        });
    };

    return Artwork;
};