const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Contactos", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    phone: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },{
    timestamps: false,
  });
};
