package com.capstone.all4seoul.user.service;

import com.capstone.all4seoul.user.domain.User;
import com.capstone.all4seoul.user.dto.UserDto;
import com.capstone.all4seoul.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public void joinUser(UserDto userDto) {
        User user = User.createUser(userDto);

        // 사용자 생성 전 중복 로그인 ID 확인
        if (userRepository.findByLoginId(userDto.getLoginId()) != null) {
            throw new IllegalArgumentException("이미 사용 중인 로그인 아이디입니다.");
        }
        try {
            userRepository.save(user);
        } catch (Exception e) {
            throw new RuntimeException("사용자 생성 중 오류가 발생했습니다.", e);
        }
    }

    //로그인 아이디로 조회
    public User findByLoginId(String loginId) {
        return userRepository.findByLoginId(loginId);
    }
}
