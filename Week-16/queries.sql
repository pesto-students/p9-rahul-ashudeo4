use warehouse;
-- Find the item that has minimum weight
select min(WEIGHT) from ITEMS;

-- Find the different warehouses in “Pune”.
select * from WAREHOUSES where CITY = "Pune";

-- Find the details of items ordered by a customer “Mr. Patil”
select I.ITEMNO, I.DESCRIPTION, I.WEIGHT, I.COST, OI.ORDERED_QUANTITY  from ITEMS as I join ORDERS_ITEMS as OI on OI.ITEMNO = I.ITEMNO join  CUSTOMER as C join ORDERS as O on C.CNO = O.CNO where C.CNAME = 'Mr. Patil';

-- Find a Warehouse which has maximum stores.
select  W.WID, W.WNAME, count(S.SID) as max_stores from WAREHOUSES as W join STORES as S on W.WID = S.SID group by W.WID order by max_stores desc limit 1; 

-- Find an item which is ordered for a minimum number of times.
select I.ITEMNO, I.DESCRIPTION, I.WEIGHT, I.COST, OI.ORDERED_QUANTITY from ORDERS_ITEMS as OI join ITEMS as I on OI.ITEMNO = I.ITEMNO order by OI.ORDERED_QUANTITY limit 1;

-- Find the detailed orders given by each customer
select * from ORDERS as O join ORDERS_ITEMS as OI on O.ONO = OI.ONO join ITEMS as I on OI.ITEMNO = I.ITEMNO join CUSTOMER as C on C.CNO = O.CNO;
