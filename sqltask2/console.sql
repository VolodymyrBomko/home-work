create database if not exists yyy character set utf8mb4 collate utf8mb4_unicode_ci;
create database if not exists Users;
use Users;
create table user
(
    id      int primary key not null auto_increment,
    name    varchar(255) default 'John',
    surname varchar(255) default 'Doe',
    weight  double(5, 2) default 97.55,
    bDay    date         default '1987-12-13',
    stamp   timestamp,
    status  boolean

);



use users;
insert into user(name, surname, weight, bDay, status)
values ('kolya', 'pupkin', 87.7, '1998-05-10', true),
       ('olya', 'kozlov', 67.3, '1995-07-12', false)
;

alter table user
    modify column stamp timestamp default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP;

alter table user
    add column height int;


insert into user(name, surname, weight, height, bDay, status)
values ('max', 'pain', 82.1, 155, '1990-05-12', true);


update user
set height=190
where users.user.height is null;


create table car
(
    id_car  int auto_increment primary key not null,
    model   varchar(255),
    id_user int,
    foreign key (id_user) references user (id)
);

insert into car(model, id_user)
values ('bmw', 1),
       ('lada', 2),
       ('legaasy', 3);

select *
from user
where status = 1;

select *
from user
where status = 0
  and height = 190;

select *
from user
where status = 0
  and height = 190
  and name like 'olya';

select *
from user
join car on user.id = car.id_user;





