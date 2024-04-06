insert into users (user_id, login_id, login_password, name, birth, mbti, gender, nickname)
values (1, 'tdawkes0@is.gd', 'zI4`(Q,udf40}WJ', 'Avigdor Meigh', '2023-08-16 22:21:22', 'ISTP', 'Male',
        'Tabor Dawkes');
insert into users (user_id, login_id, login_password, name, birth, mbti, gender, nickname)
values (2, 'lbittany1@ftc.gov', 'jS1#`89eGg8%OesC', 'Thaddus McCullouch', '2023-10-30 05:45:08', 'ISFP',
        'Male', 'Laurie Bittany');

-- Places 테이블에 더미 데이터 추가
INSERT INTO places (place_id, user_id, phone_number, x, y, DTYPE, name)
VALUES (1, 1, '01012345678', '127.012', '37.567', 'place', 'Place One'),
       (2, 2, '01087654321', '128.123', '38.678', 'place', 'Place Two');

insert into reviews (review_id, user_id, star_rating, content, place_id)
values (1, 1, 1.4,
        'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1);
insert into reviews (review_id, user_id, star_rating, content, place_id)
values (2, 2, 3.2, 'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.', 2);