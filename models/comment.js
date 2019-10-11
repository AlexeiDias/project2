module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        contact: {
            type: DataTypes.STRING
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    Comment.associate = function (models) {
        // We're saying that an Comment should belong to an Artist
        // An Comment can't be created without an Artist due to the foreign key constraint
        Comment.belongsTo(models.Artwork, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Comment;
};