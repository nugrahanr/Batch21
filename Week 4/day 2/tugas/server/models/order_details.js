// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('order_details', {
//     order_price: {
//       type: DataTypes.DECIMAL(19,4),
//       allowNull: true
//     },
//     order_qty: {
//       type: DataTypes.SMALLINT,
//       allowNull: true
//     },
//     order_discount: {
//       type: DataTypes.REAL,
//       allowNull: true
//     },
//     order_order_id: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'orders',
//         key: 'order_id'
//       }
//     },
//     order_prod_id: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'products',
//         key: 'prod_id'
//       }
//     }
//   }, {
//     sequelize,
//     tableName: 'order_details',
//     schema: 'public',
//     timestamps: false
//   });
// };

const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_details', {
    order_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    order_qty: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    order_discount: {
      type: DataTypes.REAL,
      allowNull: true
    },
    order_order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'order_id'
      }
    },
    order_prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'prod_id'
      }
    }
  }, {
    sequelize,
    tableName: 'order_details',
    schema: 'public',
    timestamps: false
  });
};
