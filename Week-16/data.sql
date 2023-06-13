show databases;

create database warehouse;

use warehouse;

create table CITIES (
  CITY char(20),
  STATE char(20),
  primary key (CITY)
);


create table WAREHOUSES (
  WID integer,
  WNAME char(30),
  LOCATION char(20),
  EXTRA_CONTEXT JSON,
  CITY char(20),
  primary key (WID),
  foreign key (CITY) references CITIES(CITY)
);


create table STORES (
  SID integer,
  STORE_NAME char(20),
  LOCATION_CITY char(20),
  primary key (SID),
  foreign key (LOCATION_CITY) references CITIES(CITY)
);

create table CUSTOMER (
  CNO integer,
  CNAME char(50),
  ADDR VARchar(50),
  CU_CITY char(20),
  primary key (CNO),
  foreign key (CU_CITY) references CITIES(CITY)
);


create table ORDERS (
  ONO INT,
  ODATE DATE,
  CNO integer,
  primary key (ONO),
  foreign key (CNO) references CUSTOMER(CNO)
);


create table ITEMS (
  ITEMNO integer,
  DESCRIPTION TEXT,
  WEIGHT DECIMAL(5,2),
  COST DECIMAL(5,2),
  primary key (ITEMNO)
);

create table STORES_ITEMS (
  SID integer,
  ITEMNO integer,
  QUANTITY integer,
  primary key (SID, ITEMNO),
  foreign key (SID) references STORES(SID),
  foreign key (ITEMNO) references ITEMS(ITEMNO)
);


create table ORDERS_ITEMS (
  ONO INT,
  ITEMNO integer,
  ORDERED_QUANTITY integer,
  primary key (ONO, ITEMNO),
  foreign key (ONO) references ORDERS(ONO),
  foreign key (ITEMNO) references ITEMS(ITEMNO)
);


insert into CITIES (CITY, STATE) values
  ('Pune', 'Maharashtra'),
  ('Mumbai', 'Maharashtra'),
  ('Delhi', 'Delhi');


insert into WAREHOUSES (WID, WNAME, LOCATION, EXTRA_CONTEXT, CITY) values
  (1, 'Warehouse A', 'Pune', '{"attribute": "value"}', 'Pune'),
  (2, 'Warehouse B', 'Mumbai', '{"attribute": "value"}', 'Mumbai');


insert into STORES (SID, STORE_NAME, LOCATION_CITY) values
  (1, 'Store X', 'Pune'),
  (2, 'Store Y', 'Mumbai');


insert into CUSTOMER (CNO, CNAME, ADDR, CU_CITY) values
  (1, 'Mr. Patil', 'Address 1', 'Pune'),
  (2, 'Mr. Verma', 'Address 2', 'Punjab');


insert into ORDERS (ONO, ODATE, CNO) values
  (1, '2023-05-11', 1),
  (2, '2023-05-02', 2);


insert into ITEMS (ITEMNO, DESCRIPTION, WEIGHT, COST) values
  (1, 'Item A', 11.5, 25.0),
  (2, 'Item B', 6.2, 10.0);


insert into STORES_ITEMS (SID, ITEMNO, QUANTITY) values
  (1, 1, 99),
  (1, 2, 50),
  (2, 2, 75);

insert into ORDERS_ITEMS (ONO, ITEMNO, ORDERED_QUANTITY) values
  (1, 1, 13),
  (1, 2, 5),
  (2, 1, 15);
  
