create table sales.locations (
	location_id serial primary key
);

create table sales.suppliers (
	supl_id serial primary key,
	supl_name varchar (40),
	supl_contact_name varchar (30),
	supl_city varchar (15),
);

create table sales.customers (
	cust_id serial primary key,
	cust_name varchar (40),
	cust_city varchar (15)
);

create table sales.employees (
	employee_id serial primary key
);

create table sales.shippers (
	ship_id serial primary key,
	ship_name varchar (40),
	ship_phone varchar (24)
);

create table sales.products (
	prod_id serial primary key,
	prod_name varchar (40),
	prod_quantity varchar (20),
	prod_price money,
	prod_in_stock smallint,
	prod_on_order smallint,
	prod_reorder_level smallint,
	prod_discontinued bit
);

create table sales.orders (
	order_id serial primary key,
	order_date timestamp,
	order_required_date date,
	order_shipped_date date,
	order_freight money,
	order_subtotal money,
	order_total_qty smallint,
	order_ship_city varchar (15),
	order_ship_address varchar (60),
	order_status varchar (15)
);

create table sales.categories (
	cate_id serial primary key,
	cate_name varchar (15),
	cate_description text
);

create table sales.order_details (
	order_order_id serial primary key,
	order_prod_id serial,
	order_price money,
	order_qty smallint,
	order_discount real
);

-- alter table
alter table sales.suppliers add column supl_location_id serial;
alter table sales.suppliers add constraint fk_suppliers_location_id
foreign key (supl_location_id) references sales.locations(location_id);

alter table sales.customers add column cust_location_id serial;
alter table sales.customers add constraint fk_cust_location_id
foreign key (cust_location_id) references sales.locations(location_id);

alter table sales.products add column prod_cate_id serial;
alter table sales.products add constraint fk_prod_cate_id
foreign key (prod_cate_id) references sales.categories(cate_id);

alter table sales.products add column prod_supl_id serial;
alter table sales.products add constraint fk_prod_supl_id
foreign key (prod_supl_id) references sales.suppliers(supl_id);

alter table sales.orders add column order_employee_id serial;
alter table sales.orders add constraint fk_order_employee_id
foreign key (order_employee_id) references sales.employees(employee_id);

alter table sales.orders add column order_cust_id serial;
alter table sales.orders add constraint fk_order_cust_id
foreign key (order_cust_id) references sales.customers(cust_id);

alter table sales.orders add column order_ship_id serial;
alter table sales.orders add constraint fk_order_ship_id
foreign key (order_ship_id) references sales.shippers(ship_id);

alter table sales.order_details add column order_order_id serial;
alter table sales.order_details add constraint fk_order_order_id
foreign key (order_order_id) references sales.orders(order_id);

alter table sales.order_details add column order_prod_id serial;
alter table sales.order_details add constraint fk_order_prod_id
foreign key (order_prod_id) references sales.products(prod_id);

-- migration

