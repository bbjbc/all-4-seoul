package com.capstone.all4seoul.user.repository;

import com.capstone.all4seoul.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    /**
     * Spring Data JPA
     * save(), delete() 는 자동구현 되어있음
     */

    //로그인 아이디로 조회
    Optional<User> findByLoginId(String loginId);

    //단건 조회
    Optional<User> findFirstByUsername(String username);

    //컬렉션 조회
    List<User> findListByUsername(String username);
}
