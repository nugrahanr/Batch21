--create database shopping

-- TABLE

create table category (
	cateid serial primary key,
	catename varchar (15)
);

create table product (
	prodid serial primary key,
	prodname varchar (40),
	prodperunit varchar (20),
	prodprice money,
	prodstock smallint,
	prodstockavailable smallint,
	prodcateid serial
);

create table customer (
	custid varchar (5) primary key,
	custname varchar (40),
	custaddress varchar (60),
	custcity varchar (15),
	custcountry varchar (15)
);

create table orders (
	ordername varchar (25) primary key,
	ordercreated timestamp,
	ordershipname varchar (40),
	ordershipaddress varchar (60),
	ordershipcity varchar (15),
	ordershipcountry varchar (15),
	orderqty smallint,
	ordersubtotal money,
	ordersubdiscount money,
	ordertax money,
	ordertotal money,
	orderstatus varchar (15),
	orderidtemp integer,
	ordercustid varchar (5)
);

create table lineitems (
	liteid serial primary key,
	liteprice money,
	liteqty smallint,
	litediscount real,
	liteprodid integer,
	liteordername varchar (25)
);

create sequence cateid_seq;
create sequence custid_seq;
create sequence liteid_seq;


-- MIGRATION

create extension dblink;
create foreign data wrapper postgres;
create server localhost foreign data wrapper postgres options
(hostaddr '127.0.0.1', dbname 'northwind');
create user mapping for postgres server localhost options
(user 'postgres', password '123');

select dblink_connect ('localhost');

-- 1. loadcategory()
create or replace function loadcategory()
returns table (cateid integer, catename varchar(15)) as $$
begin
	truncate table category;
	insert into category (cateid, catename)
	select * from dblink ('localhost', 'select category_id, category_name from categories')
	as data (cateid integer, catename varchar(15));
end; $$ language plpgsql;

select * from loadcategory();

select * from category;

drop function loadcategory();


-- 2. loadcustomer()
create or replace function loadcustomer()
returns void as $$
begin
	truncate table customer;
	insert into customer (custid, custname, custaddress, custcity, custcountry)
	select * from dblink ('localhost', 'select customer_id, company_name, address, city, country from customers')
	as data (custid varchar (5), custname varchar (40), custaddress varchar (60), custcity varchar (15), custcountry varchar (15));
end; $$ language plpgsql;

select * from loadcustomer();

select * from customer;

drop function loadcustomer();


-- 3. loadproduct()
create or replace function loadproduct()
returns void as $$
begin
	truncate table product;
	insert into product (prodid, prodname, prodperunit, prodprice, prodstock, prodstockavailable)
	select * from dblink ('localhost', 'select product_id, product_name, quantity_per_unit, unit_price, units_in_stock, discontinued from products')
	as data (prodid integer, prodname varchar (40), prodperunit varchar (20), prodprice money, prodstock smallint, prodstockavailable smallint);
end; $$ language plpgsql;

select * from loadproduct();

select * from product;

drop function loadproduct();


-- 4. loadOrders()
CREATE SEQUENCE seq_ord_number
INCREMENT 1
MINVALUE 1
MAXVALUE 9223372036854775807
START 1

create or replace function loadOrders() 
returns void as $$ 
begin 
truncate table orders; 
insert into orders (ordername, ordershipname, ordershipaddress, ordershipcity, ordershipcountry, orderstatus, orderidtemp) 
select CONCAT('ORD',to_char(now(),'YYYYMMDD'),'',lpad(''||nextval('seq_ord_number')::text,4,'0')), 
	   ship_name, ship_address, ship_city, ship_country, 
	   case when ship_region is null then 'New'
            when ship_region = 'AK' then 'Cancelled'
            when ship_region = 'OR' then 'Closed' 
            else 'Shipping' end as orderstatus, 
	   order_id
from dblink ('localhost', 'select ship_name, ship_address, ship_city, ship_country, ship_region, order_id from orders')
as data (ship_name varchar (40), ship_address varchar (60), ship_city varchar (15), ship_country varchar (15), ship_region varchar (15), order_id integer); 
end; $$ language plpgsql;

select * from loadOrders();

select * from orders;

drop function loadOrders();
--kecuali orderqty-ordertotal

 
-- 5. loadlineitems
create or replace procedure loadlineitems()
language plpgsql as $$
begin 
	truncate table lineitems;
	insert into lineitems (liteprice, liteqty, litediscount, liteprodid)
	select * from dblink ('localhost', 'select unit_price, quantity, discount, product_id  from order_details')
	as data (liteprice money, liteqty smallint, litediscount real, liteprodid integer);
commit; end; $$

call loadlineitems();

select * from lineitems;

drop procedure loadlineitems;


-- 6. getordername()
create or replace function getordername(order_date timestamp, order_id integer) 
returns text as $$ 
declare order_date_formatted text;
begin
	truncate table orders;
    order_date_formatted := to_char(order_date, 'YYYYMMDD');
    return CONCAT('ORD', order_date_formatted, '', lpad(order_id::text, 4, '0'));
end; $$ language plpgsql;

--contoh: select * from getordername('2023-02-22 10:00:00', 123);

drop function getordername();


-- 7. cleartabletarget()
create or replace function ClearTableTarget()
returns void as $$
begin
  delete from --nama table--;
end; $$ language plpgsql;

select ClearTableTarget();

--contoh:
create or replace function ClearTableTarget()
returns void as $$
begin
  delete from category;
end; $$ language plpgsql;

select ClearTableTarget();

select*from category

drop function ClearTableTarget();


-- 8. updatesumorder()
create or replace procedure updatesumorder(p_ordername text) as $$
begin
    update orders set ordertotal = ( select sum(liteqty * liteprice * (1 - litediscount))
        from lineitems where ordername = p_ordername ) 
where ordername = p_ordername;
end; $$ language plpgsql;

call updatesumorder('OrderNumber001');

select * from orders order by ordername;

drop procedure updatesumorder();
 

-- ALTER TABLE (belum dipakai)

--prod
alter table product add constraint fk_prodcateid
foreign key (prodcateid) references category(cate_id);

--order
alter table orders add constraint fk_ordercustid
foreign key (ordercustid) references customer(cust_id);

--lineitems
alter table lineitems add constraint fk_liteprodid
foreign key (liteprodid) references product(prodid);

alter table lineitems add constraint fk_liteordername
foreign key (liteordername) references orders(ordername);


