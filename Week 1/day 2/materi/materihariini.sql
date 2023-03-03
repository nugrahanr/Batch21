create schema hr
create table hr.regions(
	region_id serial primary key,
	region_name varchar(255)
)

create extension dblink
create foreign data wrapper postgres
create server localhost foreign data wrapper postgres options 
(hostaddr '127.0.0.1', dbname 'northwind')

create user mapping for postgres server localhost options 
(user 'postgres', password 'admin')

select dblink_connect('localhost')

insert into sales.shippers (ship_id,ship_name,ship_phone)
select*from dblink ('localhost','select shipper_id,company_name,phone from shippers')
as data(ship_id integer,ship_name varchar(40),ship_phone varchar(25))
