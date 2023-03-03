create schema sale

-- TABLE

create table sale.locations (
	location_id varchar (20) primary key
);

create table sale.suppliers (
	supl_id serial primary key,
	supl_name varchar (40),
	supl_contact_name varchar (30),
	supl_city varchar (15),
	supl_location_id varchar (20)
);

create table sale.customers (
	cust_id varchar (5) primary key,
	cust_name varchar (40),
	cust_city varchar (15),
	cust_location_id varchar (20)
);

create table sale.employees (
	employee_id serial primary key
);

create table sale.shippers (
	ship_id serial primary key,
	ship_name varchar (40),
	ship_phone varchar (24)
);

create table sale.products (
	prod_id serial primary key,
	prod_name varchar (40),
	prod_quantity varchar (20),
	prod_price money,
	prod_in_stock smallint,
	prod_on_order smallint,
	prod_reorder_level smallint,
	prod_discontinued integer,
	prod_cate_id integer,
	prod_supl_id integer
);

create table sale.orders (
	order_id serial primary key,
	order_date timestamp,
	order_required_date date,
	order_shipped_date date,
	order_freight real,
	order_subtotal money,
	order_total_qty smallint,
	order_ship_city varchar (15),
	order_ship_address varchar (60),
	order_status varchar (15),
	order_employee_id integer,
	order_cust_id varchar (5),
	order_ship_id integer
);

create table sale.categories (
	cate_id serial primary key,
	cate_name varchar (15),
	cate_description text
);

create table sale.order_details (
	order_price money,
	order_qty smallint,
	order_discount real,
	order_order_id integer,
	order_prod_id integer
);


-- MIGRATION

create extension dblink;
create foreign data wrapper postgres;
create server localhost foreign data wrapper postgres options
(hostaddr '127.0.0.1', dbname 'northwind');
create user mapping for postgres server localhost options
(user 'postgres', password '123');

select dblink_connect ('localhost');

--1. locations
insert into sale.locations (location_id)
select * from dblink ('localhost', 'select territory_id from territories')
as data (location_id integer)

select * from sale.locations

--2. categories
insert into sale.categories (cate_id, cate_name, cate_description)
select * from dblink ('localhost', 'select category_id, category_name, description from categories')
as data (cate_id integer, cate_name varchar(15), cate_description text)

select * from sale.categories

--3. products
insert into sale.products (prod_id, prod_name, prod_quantity, prod_price, prod_in_stock, prod_on_order, prod_reorder_level, prod_discontinued, prod_cate_id, prod_supl_id)
select * from dblink ('localhost', 'select product_id, product_name, quantity_per_unit, unit_price, units_in_stock, units_on_order, reorder_level, discontinued, category_id, supplier_id from products')
as data (prod_id integer, prod_name varchar (40), prod_quantity varchar (30), prod_price money, prod_in_stock smallint, prod_on_order smallint, prod_reorder_level smallint, prod_discontinued integer, prod_cate_id integer, prod_supl_id integer)

select * from sale.products

--4. shippers
insert into sale.shippers (ship_id, ship_name, ship_phone)
select * from dblink ('localhost', 'select shipper_id, company_name, phone from shippers')
as data (ship_id integer, ship_name varchar(40), ship_phone varchar(20))

select * from sale.shippers

--5. suppliers
insert into sale.suppliers (supl_id, supl_name, supl_contact_name, supl_city)
select * from dblink ('localhost', 'select supplier_id, company_name, contact_name, city from suppliers') 
as data(supl_id integer, supl_name varchar (40), supl_contact_name varchar (40), supl_city varchar (30))

select * from sale.suppliers

--6. customers
insert into sale.customers (cust_id, cust_name, cust_city)
select * from dblink ('localhost', 'select customer_id, company_name, city from customers') 
as data(cust_id varchar (5), cust_name varchar (40), cust_city varchar (40))

select * from sale.customers

--7. employees
insert into sale.employees (employee_id)
select * from dblink ('localhost', 'select employee_id from employees') 
as data(employee_id integer)

select * from sale.employees

--8. orders
insert into sale.orders (order_id, order_date, order_required_date, order_shipped_date, order_freight, order_ship_city, order_ship_address, order_employee_id, order_cust_id)
select * from dblink ('localhost', 'select order_id, order_date, required_date, shipped_date, freight, ship_city, ship_address, employee_id, customer_id from orders')
as data (order_id integer, order_date timestamp, order_required_date date, order_shipped_date date, order_freight real, order_ship_city varchar (15)	, order_ship_address varchar(60), order_employee_id integer, order_cust_id varchar (5))

select * from sale.orders

--9. order_details
insert into sale.order_details (order_price, order_qty, order_discount, order_order_id, order_prod_id)
select * from dblink ('localhost', 'select unit_price, quantity, discount, order_id, product_id from order_details')
as data (order_price money, order_qty smallint, order_discount real, order_order_id integer, order_prod_id integer)

select * from sale.order_details


-- ALTER TABLE

alter table sale.suppliers add constraint fk_suppliers_location_id
foreign key (supl_location_id) references sale.locations(location_id);
--supl
alter table sale.customers add constraint fk_cust_location_id
foreign key (cust_location_id) references sale.locations(location_id);
--cust
alter table sale.products add constraint fk_prod_supl_id
foreign key (prod_supl_id) references sale.suppliers(supl_id);

alter table sale.products add constraint fk_prod_cate_id
foreign key (prod_cate_id) references sale.categories(cate_id);
--prod
alter table sale.orders add constraint fk_order_employee_id
foreign key (order_employee_id) references sale.employees(employee_id);

alter table sale.orders add constraint fk_order_cust_id
foreign key (order_cust_id) references sale.customers(cust_id);

alter table sale.orders add constraint fk_order_ship_id
foreign key (order_ship_id) references sale.shippers(ship_id);
--order
alter table sale.order_details add constraint fk_order_order_id
foreign key (order_order_id) references sale.orders(order_id);

alter table sales.order_details add constraint fk_order_prod_id
foreign key (order_prod_id) references sales.products(prod_id);
--detail


