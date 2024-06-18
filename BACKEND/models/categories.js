module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        displayname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
    });

    return Categories;
};
