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
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
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
    public Long join(JoinUserRequest request) {
        User user = User.createUser(
                request.getLoginId(),
                request.getLoginPassword(),
                request.getUsername(),
                request.getBirth(),
                request.getMbti(),
                request.getGender(),
                request.getNickname()
        );

        if (userRepository.findByLoginId(request.getLoginId()).isPresent()) {
            throw new IllegalArgumentException("이미 사용 중인 로그인 아이디입니다.");
        }
        User savedUser = userRepository.save(user);

        return savedUser.getId();
    }

    public User findById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("사용자를 찾을 수 없습니다."));
    }

    //로그인 아이디로 조회
    public User findByLoginId(String loginId) {
        return userRepository.findByLoginId(loginId)
                .orElseThrow(() -> new EntityNotFoundException("사용자를 찾을 수 없습니다."));
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
    public void updateUser(Long id, UpdateUserRequest request) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("사용자를 찾을 수 없습니다."));

        user.updateBirth(request.getBirth());
        user.updateMbti(request.getMbti());
        user.updateNickname(request.getNickname());
    }

    @Transactional
    public Long addBookmark(DeleteBookmarkRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("사용자를 찾을 수 없습니다."));
        Place place = placeRepository.findById(request.getPlaceId())
                .orElseThrow(() -> new EntityNotFoundException("장소를 찾을 수 없습니다."));

        Bookmark bookmark = Bookmark.createBookmark(user, place);
        Bookmark savedBookmark = bookmarkRepository.save(bookmark);

        return savedBookmark.getId();
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
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("사용자를 찾을 수 없습니다."));
        user.deleteBookmark(request.getPlaceId());
    }

    @Transactional
    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
