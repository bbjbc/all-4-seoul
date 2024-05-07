package com.capstone.all4seoul.user.repository;

import com.capstone.all4seoul.user.domain.Gender;
import com.capstone.all4seoul.user.domain.Mbti;
import com.capstone.all4seoul.user.domain.User;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@DataJpaTest
class UserRepositoryTest {
    @Autowired
    UserRepository userRepository;

    @BeforeEach
    void initData() {
        User user1 = User.createUser(
                "testUser",
                "test",
                "kim",
                LocalDate.now(),
                Mbti.ISTJ,
                Gender.Male,
                "자기야"
        );
        userRepository.save(user1);

        User user2 = User.createUser(
                "testUser2",
                "test2",
                "park",
                LocalDate.now(),
                Mbti.ISTJ,
                Gender.Male,
                "자기야2"
        );
        userRepository.save(user2);

        // user1 user2 : username 동일하게
        User user3 = User.createUser(
                "testUser3",
                "test3",
                "park",
                LocalDate.now(),
                Mbti.ISTJ,
                Gender.Male,
                "자기야3"
        );
        userRepository.save(user3);
    }

    //아이디로 유저 조회
    @Test
    void findByLoginId() {
        User findUser = userRepository.findByLoginId("testUser")
                .orElseThrow(() -> new EntityNotFoundException("사용자를 찾을 수 없습니다."));
        assertThat(findUser.getUsername()).isEqualTo("kim");

        User findUser2 = userRepository.findByLoginId("testUser2")
                .orElseThrow(() -> new EntityNotFoundException("사용자를 찾을 수 없습니다."));
        assertThat(findUser2.getUsername()).isEqualTo("park");
    }

    //이름으로 유저 단건 조회 (동명이인 존재시 첫번째 유저 조회)
    @Test
    void findUserByUsername() {
        User findUser = userRepository.findFirstByUsername("park")
                .orElseThrow(() -> new EntityNotFoundException("사용자를 찾을 수 없습니다."));
        assertThat(findUser.getLoginId()).isEqualTo("testUser2");
    }

    //이름으로 유저 리스트 조회 (동명이인)
    @Test
    void findAllByUsername() {
        List<User> users = userRepository.findListByUsername("park");
        assertThat(users.get(0).getLoginId()).isEqualTo("testUser2");
        assertThat(users.get(1).getLoginId()).isEqualTo("testUser3");
    }
}