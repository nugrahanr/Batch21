// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('employees', {
//     employee_id: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     }
//   }, {
//     sequelize,
//     tableName: 'employees',
//     schema: 'public',
//     timestamps: false,
//     indexes: [
//       {
//         name: "employees_pkey",
//         unique: true,
//         fields: [
//           { name: "employee_id" },
//         ]
//       },
//     ]
//   });
// };
//       type: DataTypes.STRING(20),
//       allowNull: true
//     },
//     hire_date: {
//       type: DataTypes.DATE,
//       allowNull: true
//     },
//     salary: {
//       type: DataTypes.DECIMAL,
//       allowNull: true
//     },
//     commission_pct: {
//       type: DataTypes.DECIMAL,
//       allowNull: true
//     },
//     job_id: {
//       type: DataTypes.STRING(15),
//       allowNull: false,
//       references: {
//         model: 'jobs',
//         key: 'job_id'
//       }
//     },
//     department_id: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//       references: {
//         model: 'departments',
//         key: 'department_id'
//       }
//     },
//     manager_id: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     }
//   }, {
//     sequelize,
//     tableName: 'employees',
//     schema: 'public',
//     timestamps: false,
//     indexes: [
//       {
//         name: "employees_pkey",
//         unique: true,
//         fields: [
//           { name: "employee_id" },
//         ]
//       },
//     ]
//   });
// };

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees', {
    employee_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    hire_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    commission_pct: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    job_id: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'jobs',
        key: 'job_id'
      }
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departments',
        key: 'department_id'
      }
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employees',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "employees_pkey",
        unique: true,
        fields: [
          { name: "employee_id" },
        ]
      },
    ]
  });
};
