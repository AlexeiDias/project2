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
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Artwork.associate = function (models) {
        Artwork.belongsTo(models.Artist, {
            foreignKey: {
                allowNull: false
            }
        });
        Artwork.belongsTo(models.City, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Artwork;
};




