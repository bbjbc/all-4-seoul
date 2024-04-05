DROP TABLE IF EXISTS users;

create table users
(
    user_id        INT,
    login_id       VARCHAR(50),
    login_password VARCHAR(50),
    name            VARCHAR(50),
    birth          DATE,
    mbti           VARCHAR(50),
    gender         VARCHAR(50),
    nickname       VARCHAR(50)
);
insert into users (user_id, login_id, login_password, name, birth, mbti, gender, nickname)
values (1, 'tdawkes0@is.gd', 'zI4`(Q,udf40}WJ', 'Avigdor Meigh', '2023-08-16 22:21:22', 'ISTP', 'Male',
        'Tabor Dawkes');
insert into users (user_id, login_id, login_password, name, birth, mbti, gender, nickname)
values (2, 'lbittany1@ftc.gov', 'jS1#`89eGg8%OesC', 'Thaddus McCullouch', '2023-10-30 05:45:08', 'ISFP',
        'Male', 'Laurie Bittany');