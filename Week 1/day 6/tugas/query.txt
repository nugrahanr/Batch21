create or replace procedure sales.add_to_cart(
    in p_customer_id integer,
    in p_salesperson_id integer,
    in p_product_id integer,
    in p_quantity integer
--p = parameter
) 
language plpgsql as $$
declare
    v_cart_id integer;
    v_order_id integer;
    v_item_count integer;
    v_order_status varchar(50);
    v_existing_order boolean;
    v_existing_cart boolean;
    v_existing_item boolean;
    v_total_price numeric;
--v = vari lokal
begin
    v_existing_order := false;
    v_existing_cart := false;
    v_existing_item := false;
    
    -- cek jika ada order status open, disimpan ke v_item_count
    select count(*)
    into v_item_count
    from sales.salesorderheader soh
    join sales.salesorderdetail sod
        on soh.salesorderid = sod.salesorderid
    where soh.customerid = p_customer_id
        and soh.salespersonid = p_salesperson_id
        and soh.status = 1; --status 1 = open. jika pakai string 'open' muncul eror
    
    if v_item_count > 0 then
        v_existing_order := true; --jika ada open, jadi true
        select soh.salesorderid, soh.status
        into v_order_id, v_order_status --simpan ke sini
        from sales.salesorderheader soh
        join sales.salesorderdetail sod
            on soh.salesorderid = sod.salesorderid
        where soh.customerid = p_customer_id
            and soh.salespersonid = p_salesperson_id
            and soh.status = 1
        limit 1; --jika ada open, ambil 1 baris
    end if;
    
    -- jika ada order open, tambah ke salesorderdetail
    if v_existing_order then
        insert into sales.salesorderdetail (salesorderid, productid, orderqty)
        values (v_order_id, p_product_id, p_quantity);
        v_existing_item := true;
    -- jika tak ada open, tambah baru ke salesorderdetail
    else
        insert into sales.salesorderheader (customerid, salespersonid, orderdate, duedate, status)
        values (p_customer_id, p_salesperson_id, now(), now(), 1)
        returning salesorderid into v_order_id;
        insert into sales.salesorderdetail (salesorderid, productid, orderqty)
        values (v_order_id, p_product_id, p_quantity);
    end if;
    
    -- hitung item di cart
select count(*)
into v_item_count
from sales.salesorderheader soh
join sales.salesorderdetail sod
    on soh.salesorderid = sod.salesorderid
where soh.customerid = p_customer_id
    and soh.salespersonid = p_salesperson_id
    and soh.duedate is null;
    
    if v_item_count > 0 then
        v_existing_cart := true; --jika item > 0, jadi true
    end if;
    
    -- jika ada item di cart, update modifieddate jadi sekarang
    if v_existing_cart then
        update sales.salesorderdetail
        set modifieddate = now()
        where customerid = p_customer_id
            and salespersonid = p_salesperson_id
            and duedate is null;

    -- jika tak ada, buat baru
    else
        insert into sales.salesorderheader (customerid, salespersonid, orderdate)
        values (p_customer_id, p_salesperson_id, now());
    end if;
    
    -- hitung total price
    select unitprice * p_quantity
    into v_total_price
    from sales.salesorderdetail
    where productid = p_product_id;
    
end; $$;

--call sales.add_to_cart(1, 279, 776, 1);

--select*from sales.salesorderdetail

--select*from sales.salesorderheader

/*contoh pemanggilan
select * from sales.salesorderheader soh
join sales.salesorderdetail sod on soh.salesorderid = sod.salesorderid
where soh.customerid = 1
    and soh.salespersonid = 279
    and soh.duedate is null;
*/

--drop procedure if exists sales.add_to_cart;

--perubahan/alter table
--alter table sales.salesorderheader alter column billtoaddressid drop not NULL;
--alter table sales.salesorderheader alter column shiptoaddressid drop not NULL;
--alter table sales.salesorderheader alter column shipmethodid drop not NULL;
--alter table sales.salesorderheader alter column creditcardid drop not NULL;
--alter table sales.salesorderdetail alter column specialofferid drop not NULL;
--alter table sales.salesorderdetail alter column unitprice drop not NULL;
--alter table sales.salesorderheader alter column duedate drop not NULL;

--alter table sales.salesorderheader alter column billtoaddressid set not null;
--alter table sales.salesorderheader alter column shiptoaddressid set not null;
--alter table sales.salesorderheader alter column shipmethodid set not null;
--alter table sales.salesorderheader alter column creditcardid set not null;
--alter table sales.salesorderdetail alter column specialofferid set not null;
--alter table sales.salesorderdetail alter column unitprice set not null;
--alter table sales.salesorderheader alter column duedate set not null;





