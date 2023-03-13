const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suppliers', {
    supl_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    supl_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    supl_contact_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    supl_city: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    supl_location_id: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'locations',
        key: 'location_id'
      }
    }
  }, {
    sequelize,
    tableName: 'suppliers',
    schema: 'sale',
    timestamps: false,
    indexes: [
      {
        name: "suppliers_pkey",
        unique: true,
        fields: [
          { name: "supl_id" },
        ]
      },
    ]
  });
};
