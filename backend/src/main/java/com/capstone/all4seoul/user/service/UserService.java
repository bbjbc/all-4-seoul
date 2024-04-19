package com.capstone.all4seoul.user.service;

import com.capstone.all4seoul.bookmark.domain.Bookmark;
import com.capstone.all4seoul.bookmark.dto.request.DeleteBookmarkRequest;
import com.capstone.all4seoul.bookmark.repository.BookmarkRepository;
import com.capstone.all4seoul.place.domain.Place;
import com.capstone.all4seoul.place.dto.response.DetailPlaceResponse;
import com.capstone.all4seoul.place.repository.PlaceRepository;
import com.capstone.all4seoul.user.domain.User;
import com.capstone.all4seoul.user.dto.request.JoinUserRequest;
import com.capstone.all4seoul.user.dto.request.UpdateUserRequest;
import com.capstone.all4seoul.user.dto.response.DetailUserResponse;
import com.capstone.all4seoul.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {
    private final UserRepository userRepository;
    private final PlaceRepository placeRepository;
    private final BookmarkRepository bookmarkRepository;

    @Transactional
    public void join(JoinUserRequest joinUserRequest) {
        User user = User.createUser(
                joinUserRequest.getLoginId(),
                joinUserRequest.getLoginPassword(),
                joinUserRequest.getUsername(),
                joinUserRequest.getBirth(),
                joinUserRequest.getMbti(),
                joinUserRequest.getGender(),
                joinUserRequest.getNickname()
        );

        // 사용자 생성 전 중복 로그인 ID 확인
        if (userRepository.findByLoginId(joinUserRequest.getLoginId()) != null) {
            throw new IllegalArgumentException("이미 사용 중인 로그인 아이디입니다.");
        }
        try {
            userRepository.save(user);
        } catch (Exception e) {
            throw new RuntimeException("사용자 생성 중 오류가 발생했습니다.", e);
        }
    }

    public User findById(Long userId) {
        return userRepository.findById(userId).get();
    }

    //로그인 아이디로 조회
    public User findByLoginId(String loginId) {
        return userRepository.findByLoginId(loginId);
    }

    //컬렉션 조회
    public List<User> findListByUsername(String username) {
        return userRepository.findListByUsername(username);
    }

    public List<DetailUserResponse> findAll() {
        return userRepository.findAll()
                .stream()
                .map(DetailUserResponse::of)
                .toList();
    }

    @Transactional
    public void updateUser(Long id, UpdateUserRequest updateUserRequest) {

        User findUser = userRepository.findById(id).get();

        findUser.updateBirth(updateUserRequest.getBirth());
        findUser.updateMbti(updateUserRequest.getMbti());
        findUser.updateNickname(updateUserRequest.getNickname());
    }

    @Transactional
    public void addBookmark(DeleteBookmarkRequest request) {
        User user = userRepository.findById(request.getUserId()).get();
        Place place = placeRepository.findById(request.getPlaceId()).get();

        bookmarkRepository.save(Bookmark.createBookmark(user, place));
    }

    public List<DetailPlaceResponse> findBookmarkedPlaces(User user) {
        return user.getBookmarks().getBookmarks()
                .stream()
                .map(Bookmark::getPlace)
                .map(DetailPlaceResponse::of)
                .toList();
    }

    @Transactional
    public void deleteBookmark(DeleteBookmarkRequest request) {
        User user = userRepository.findById(request.getUserId()).get();
        user.deleteBookmark(request.getPlaceId());
    }

    @Transactional
    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
