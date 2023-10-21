const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('Usuarios', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
    })
}