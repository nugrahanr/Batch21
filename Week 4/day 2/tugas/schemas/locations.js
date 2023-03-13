const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locations', {
    location_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'locations',
    schema: 'sale',
    timestamps: false,
    indexes: [
      {
        name: "locations_pkey",
        unique: true,
        fields: [
          { name: "location_id" },
        ]
      },
    ]
  });
};
ue
    },
    state_province: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    country_id: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      references: {
        model: 'countries',
        key: 'country_id'
      }
    }
  }, {
    sequelize,
    tableName: 'locations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "locations_pkey",
        unique: true,
        fields: [
          { name: "location_id" },
        ]
      },
    ]
  });
};
