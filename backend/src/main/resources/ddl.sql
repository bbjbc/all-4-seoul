-- 테이블 및 외래 키 제약 조건 삭제
ALTER TABLE events DROP FOREIGN KEY FK4ox8m7slwnedk0mwei26co7xv;
ALTER TABLE parking_lot DROP FOREIGN KEY FK2nk9ahlcfstmfifnboeyany5i;
ALTER TABLE places DROP FOREIGN KEY FKqmg0l98kpihrma9jr4hx0x22b;
ALTER TABLE reviews DROP FOREIGN KEY FKcnnkvk0h9vrih5xqxef7sv2r6;
ALTER TABLE reviews DROP FOREIGN KEY FKcgy7qjc1r99dp117y9en6lxye;

DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS parking_lot;
DROP TABLE IF EXISTS places;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS users;

-- 테이블 생성
CREATE TABLE events (
                        event_id BIGINT NOT NULL AUTO_INCREMENT,
                        place_id BIGINT,
                        x VARCHAR(30) NOT NULL,
                        y VARCHAR(30) NOT NULL,
                        name VARCHAR(100) NOT NULL,
                        period VARCHAR(255) NOT NULL,
                        price VARCHAR(255),
                        PRIMARY KEY (event_id)
) ENGINE=InnoDB;

CREATE TABLE parking_lot (
                             place_id BIGINT NOT NULL,
                             add_rates VARCHAR(255),
                             capacity VARCHAR(255),
                             etc VARCHAR(255),
                             price VARCHAR(255),
                             time_rates VARCHAR(255),
                             PRIMARY KEY (place_id)
) ENGINE=InnoDB;

CREATE TABLE places (
                        place_id BIGINT NOT NULL AUTO_INCREMENT,
                        user_id BIGINT,
                        phone_number VARCHAR(11) NOT NULL,
                        x VARCHAR(30) NOT NULL,
                        y VARCHAR(30) NOT NULL,
                        DTYPE VARCHAR(31) NOT NULL,
                        name VARCHAR(100) NOT NULL,
                        PRIMARY KEY (place_id)
) ENGINE=InnoDB;

CREATE TABLE reviews (
                         star_rating FLOAT(53) NOT NULL,
                         place_id BIGINT NOT NULL,
                         review_id BIGINT NOT NULL AUTO_INCREMENT,
                         user_id BIGINT NOT NULL,
                         content VARCHAR(255) NOT NULL,
                         PRIMARY KEY (review_id)
) ENGINE=InnoDB;

CREATE TABLE users (
                       birth DATE NOT NULL,
                       credit INTEGER DEFAULT 0,
                       user_id BIGINT NOT NULL AUTO_INCREMENT,
                       login_id VARCHAR(30) NOT NULL,
                       name VARCHAR(30) NOT NULL,
                       nickname VARCHAR(30) NOT NULL,
                       login_password VARCHAR(100) NOT NULL,
                       gender ENUM('Male', 'Female') NOT NULL,
                       mbti ENUM('INTJ', 'INTP', 'INFJ', 'INFP', 'ISTJ', 'ISFJ', 'ISTP', 'ISFP', 'ENTJ', 'ENTP', 'ENFJ', 'ENFP', 'ESTJ', 'ESFJ', 'ESTP', 'ESFP') NOT NULL,
                       PRIMARY KEY (user_id)
) ENGINE=InnoDB;

-- 고유 제약 조건 추가
ALTER TABLE events ADD CONSTRAINT UK_m4jw363ybuu4llp7oukg668ff UNIQUE (place_id);
ALTER TABLE places ADD CONSTRAINT UK_ax1t8ehbn4dqi0avgjsu0n86q UNIQUE (phone_number);
ALTER TABLE users ADD CONSTRAINT UK_i3xs7wmfu2i3jt079uuetycit UNIQUE (login_id);
ALTER TABLE users ADD CONSTRAINT UK_2ty1xmrrgtn89xt7kyxx6ta7h UNIQUE (nickname);

-- 외래 키 제약 조건 추가
ALTER TABLE events ADD CONSTRAINT FK4ox8m7slwnedk0mwei26co7xv FOREIGN KEY (place_id) REFERENCES places (place_id);
ALTER TABLE parking_lot ADD CONSTRAINT FK2nk9ahlcfstmfifnboeyany5i FOREIGN KEY (place_id) REFERENCES places (place_id);
ALTER TABLE places ADD CONSTRAINT FKqmg0l98kpihrma9jr4hx0x22b FOREIGN KEY (user_id) REFERENCES users (user_id);
ALTER TABLE reviews ADD CONSTRAINT FKcnnkvk0h9vrih5xqxef7sv2r6 FOREIGN KEY (place_id) REFERENCES places (place_id);
ALTER TABLE reviews ADD CONSTRAINT FKcgy7qjc1r99dp117y9en6lxye FOREIGN KEY (user_id) REFERENCES users (user_id);
