-- install.sql
C:\adventure-works-postgres-master>psql -U postgres -h 127.0.0.1 -d adventureworks < install.sql


-- 1.
select  persontype as persontypecode, 
  case 
    when persontype = 'IN' then 'individual customer'
    when persontype = 'EM' then 'employee'
    when persontype = 'SP' then 'sales person'
    when persontype = 'SC' then 'sales contact'
    when persontype = 'VC' then 'vendor contact'
    when persontype = 'GC' then 'general contact'
  end persontype,  sum(1) as totalperson 
from person.person group by persontypecode;

-- 2. 
select p.businessentityid as businessentityid,
  case 
  when p.middlename is not null then concat(p.firstname, ' ', p.middlename, ' ', p.lastname)
  else concat(p.firstname, ' ', p.lastname) end as fullname,
  e.emailaddress as emailaddress, pp.phonenumber as phonenumber,
  concat(a.addressline1,  ' ' , a.addressline2) as address, at.name as addresstype
from person.person as p
join person.businessentityaddress as bea on p.businessentityid = bea.businessentityid
join person.address as a on bea.addressid = a.addressid
join person.stateprovince as sp on a.stateprovinceid = sp.stateprovinceid
join person.countryregion as cr on sp.countryregioncode = cr.countryregioncode
join person.personphone as pp on p.businessentityid = pp.businessentityid
join person.emailaddress as e on p.businessentityid = e.businessentityid
join person.businessentity as b on p.businessentityid = b.businessentityid
join person.businessentityaddress as bea2 on b.businessentityid = bea2.businessentityid and bea2.addressid = 1
join person.address as a2 on bea2.addressid = a2.addressid
join person.addresstype as at on bea.addresstypeid = at.addresstypeid
where cr.countryregioncode = 'US';

-- 3.
select cr.countryregioncode as countryregioncode,
       cr.name as countryname,
       case p.persontype
           when 'IN' then 'individual customer'
           when 'EM' then 'employee'
           when 'SP' then 'sales person'
           when 'SC' then 'sales contact'
           when 'VC' then 'vendor contact'
           when 'GC' then 'general contact'
       end as persontypedesc, count(*) as totalpersons
from person.person as p
join person.businessentityaddress as bea on p.businessentityid = bea.businessentityid
join person.address as a on bea.addressid = a.addressid
join person.stateprovince as sp on a.stateprovinceid = sp.stateprovinceid
join person.countryregion as cr on sp.countryregioncode = cr.countryregioncode
group by cr.countryregioncode, cr.name, p.persontype order by cr.countryregioncode, p.persontype;

-- 4.
select cr.countryregioncode, cr.name,
    sum(case when p.persontype = 'in' then 1 else 0 end) as individualcustomer,
    sum(case when e.businessentityid is not null then 1 else 0 end) as employee,
    sum(case when s.salesperson is not null then 1 else 0 end) as salesperson,
    sum(case when ph.phonenumber is not null and at.name = 'sales' then 1 else 0 end) as salescontact,
    sum(case when v.phone is not null then 1 else 0 end) as vendorcontact,
    sum(case when ph.phonenumber is not null and at.name != 'sales' then 1 else 0 end) as generalcontact
from person.person as p
    join person.businessentityaddress as bea on p.businessentityid = bea.businessentityid and bea.addressid = 1
    join person.address as a on bea.addressid = a.addressid
    join person.stateprovince as sp on a.stateprovinceid = sp.stateprovinceid
    join person.countryregion as cr on sp.countryregioncode = cr.countryregioncode
    left join humanresources.employee as e on p.businessentityid = e.businessentityid
    left join sales.salesperson as s on p.businessentityid = s.businessentityid
    left join person.personphone as ph on p.businessentityid = ph.businessentityid
    left join person.phonenumbertype as pnt on ph.phonenumbertypeid = pnt.phonenumbertypeid
    left join person.addresstype as at on bea.addresstypeid = at.addresstypeid
    left join purchasing.vendor as v on p.businessentityid = v.businessentityid
group by cr.countryregioncode, cr.name

--masih error

-- 5. 
select d.departmentid, d.name, count(distinct e.businessentityid) as total_employee
from humanresources.department d
join humanresources.employeedepartmenthistory edh on d.departmentid = edh.departmentid
join humanresources.employee e on edh.businessentityid = e.businessentityid
group by d.departmentid, d.name;

-- 6. 
select d.name as department_name,
  count(case when edh.shiftid = 1 then e.businessentityid end) as day,
  count(case when edh.shiftid = 2 then e.businessentityid end) as evening,
  count(case when edh.shiftid = 3 then e.businessentityid end) as night
from humanresources.department d
join humanresources.employeedepartmenthistory edh
  on d.departmentid = edh.departmentid
join humanresources.employee e
  on edh.businessentityid = e.businessentityid
join humanresources.shift s
  on edh.shiftid = s.shiftid
group by d.name;

-- 7. 

-- 8. 

-- 9. 
select c.customerid, p.firstname || ' ' || p.lastname as customername,
    sum(case when pr.productcategoryid = 1 then 1 else 0 end) as accesories,
    sum(case when pr.productcategoryid = 2 then 1 else 0 end) as bikes,
    sum(case when pr.productcategoryid = 3 then 1 else 0 end) as components,
    sum(case when pr.productcategoryid = 4 then 1 else 0 end) as clothing
from sales.customer c
join sales.salesorderheader so on c.customerid = so.customerid
join sales.salesorderdetail sod on so.salesorderid = sod.salesorderid
join production.productcategory pr on pr.productcategoryid = pr.productcategoryid
join person.person p on c.personid = p.businessentityid
group by customername, c.customerid order by customername asc;

-- 10.
select 
    pr.productid, 
    pr.name as productname,
    s.discountpct,
	extract(year from s.startdate) as yeardisc,
    sum(case when date_part('month', s.startdate) = 1 then s.discountpct else 0 end) as "jan",
    sum(case when date_part('month', s.startdate) = 2 then s.discountpct else 0 end) as "feb",
    sum(case when date_part('month', s.startdate) = 3 then s.discountpct else 0 end) as "mar",
    sum(case when date_part('month', s.startdate) = 4 then s.discountpct else 0 end) as "apr",
    sum(case when date_part('month', s.startdate) = 5 then s.discountpct else 0 end) as "may",
    sum(case when date_part('month', s.startdate) = 6 then s.discountpct else 0 end) as "jun",
    sum(case when date_part('month', s.startdate) = 7 then s.discountpct else 0 end) as "jul",
    sum(case when date_part('month', s.startdate) = 8 then s.discountpct else 0 end) as "aug",
    sum(case when date_part('month', s.startdate) = 9 then s.discountpct else 0 end) as "sep",
    sum(case when date_part('month', s.startdate) = 10 then s.discountpct else 0 end) as "oct",
    sum(case when date_part('month', s.startdate) = 11 then s.discountpct else 0 end) as "nov",
    sum(case when date_part('month', s.startdate) = 12 then s.discountpct else 0 end) as "dec"
from production.product pr
join sales.specialofferproduct sp on pr.productid = sp.productid
join sales.specialoffer s on sp.specialofferid = s.specialofferid
where s.type <> 'no discount'
group by pr.productid, pr.name, s.discountpct, yeardisc order by pr.productid








  




