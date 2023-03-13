//jika hanya ingin generate schema public, di akhir script db di package.json tambah: -t public (cuma ada 7 table di public)
//tables: countries, departments, employees, jobs, job_history, locations, regions

var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _categories = require("./categories");
var _countries = require("./countries");
var _customers = require("./customers");
var _customers = require("./customers");
var _departments = require("./departments");
var _employees = require("./employees");
var _employees = require("./employees");
var _employees = require("./employees");
var _job_history = require("./job_history");
var _jobs = require("./jobs");
var _locations = require("./locations");
var _locations = require("./locations");
var _locations = require("./locations");
var _order_details = require("./order_details");
var _order_details = require("./order_details");
var _orders = require("./orders");
var _orders = require("./orders");
var _products = require("./products");
var _products = require("./products");
var _regions = require("./regions");
var _shippers = require("./shippers");
var _shippers = require("./shippers");
var _suppliers = require("./suppliers");
var _suppliers = require("./suppliers");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var countries = _countries(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var job_history = _job_history(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var order_details = _order_details(sequelize, DataTypes);
  var order_details = _order_details(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);
  var shippers = _shippers(sequelize, DataTypes);
  var shippers = _shippers(sequelize, DataTypes);
  var suppliers = _suppliers(sequelize, DataTypes);
  var suppliers = _suppliers(sequelize, DataTypes);

  locations.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(locations, { as: "locations", foreignKey: "country_id"});
  employees.belongsTo(departments, { as: "department", foreignKey: "department_id"});
  departments.hasMany(employees, { as: "employees", foreignKey: "department_id"});
  job_history.belongsTo(departments, { as: "department", foreignKey: "department_id"});
  departments.hasMany(job_history, { as: "job_histories", foreignKey: "department_id"});
  job_history.belongsTo(employees, { as: "employee", foreignKey: "employee_id"});
  employees.hasMany(job_history, { as: "job_histories", foreignKey: "employee_id"});
  employees.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(employees, { as: "employees", foreignKey: "job_id"});
  job_history.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(job_history, { as: "job_histories", foreignKey: "job_id"});
  departments.belongsTo(locations, { as: "location", foreignKey: "location_id"});
  locations.hasMany(departments, { as: "departments", foreignKey: "location_id"});
  countries.belongsTo(regions, { as: "region", foreignKey: "region_id"});
  regions.hasMany(countries, { as: "countries", foreignKey: "region_id"});
  products.belongsTo(categories, { as: "prod_cate", foreignKey: "prod_cate_id"});
  categories.hasMany(products, { as: "products", foreignKey: "prod_cate_id"});
  orders.belongsTo(customers, { as: "order_cust", foreignKey: "order_cust_id"});
  customers.hasMany(orders, { as: "orders", foreignKey: "order_cust_id"});
  orders.belongsTo(employees, { as: "order_employee", foreignKey: "order_employee_id"});
  employees.hasMany(orders, { as: "orders", foreignKey: "order_employee_id"});
  customers.belongsTo(locations, { as: "cust_location", foreignKey: "cust_location_id"});
  locations.hasMany(customers, { as: "customers", foreignKey: "cust_location_id"});
  suppliers.belongsTo(locations, { as: "supl_location", foreignKey: "supl_location_id"});
  locations.hasMany(suppliers, { as: "suppliers", foreignKey: "supl_location_id"});
  order_details.belongsTo(orders, { as: "order_order", foreignKey: "order_order_id"});
  orders.hasMany(order_details, { as: "order_details", foreignKey: "order_order_id"});
  orders.belongsTo(shippers, { as: "order_ship", foreignKey: "order_ship_id"});
  shippers.hasMany(orders, { as: "orders", foreignKey: "order_ship_id"});
  products.belongsTo(suppliers, { as: "prod_supl", foreignKey: "prod_supl_id"});
  suppliers.hasMany(products, { as: "products", foreignKey: "prod_supl_id"});
  products.belongsTo(categories, { as: "prod_cate_category", foreignKey: "prod_cate_id"});
  categories.hasMany(products, { as: "prod_cate_products", foreignKey: "prod_cate_id"});
  orders.belongsTo(customers, { as: "order_cust_customer", foreignKey: "order_cust_id"});
  customers.hasMany(orders, { as: "order_cust_orders", foreignKey: "order_cust_id"});
  orders.belongsTo(employees, { as: "order_employee_employee", foreignKey: "order_employee_id"});
  employees.hasMany(orders, { as: "order_employee_orders", foreignKey: "order_employee_id"});
  order_details.belongsTo(orders, { as: "order_order_order", foreignKey: "order_order_id"});
  orders.hasMany(order_details, { as: "order_order_order_details", foreignKey: "order_order_id"});
  order_details.belongsTo(products, { as: "order_prod", foreignKey: "order_prod_id"});
  products.hasMany(order_details, { as: "order_details", foreignKey: "order_prod_id"});
  products.belongsTo(suppliers, { as: "prod_supl_supplier", foreignKey: "prod_supl_id"});
  suppliers.hasMany(products, { as: "prod_supl_products", foreignKey: "prod_supl_id"});

  return {
    categories,
    categories,
    countries,
    customers,
    customers,
    departments,
    employees,
    employees,
    employees,
    job_history,
    jobs,
    locations,
    locations,
    locations,
    order_details,
    order_details,
    orders,
    orders,
    products,
    products,
    regions,
    shippers,
    shippers,
    suppliers,
    suppliers,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
