package com.capstone.all4seoul.user.repository;

import com.capstone.all4seoul.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByLoginId(String loginId);
    Optional<User> findFirstByUsername(String username);
    List<User> findListByUsername(String username);
}
