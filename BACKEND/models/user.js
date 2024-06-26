module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sobrenome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: 'users'
    });

    return User;
};
