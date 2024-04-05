DROP TABLE IF EXISTS users;
Drop table if exists reviews;

create table users
(
    user_id        INT,
    login_id       VARCHAR(50),
    login_password VARCHAR(50),
    nam            VARCHAR(50),
    birth          DATE,
    mbti           VARCHAR(50),
    gender         VARCHAR(50),
    nickname       VARCHAR(50)
);

create table reviews
(
    review_id  BIGINT,
    user_id    BIGINT,
    starRating DOUBLE,
    content    TEXT,
    place_id   BIGINT
);

