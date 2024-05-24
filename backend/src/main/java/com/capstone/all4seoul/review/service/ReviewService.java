package com.capstone.all4seoul.review.service;

import com.capstone.all4seoul.event.domain.Event;
import com.capstone.all4seoul.event.repository.EventRepository;
import com.capstone.all4seoul.place.domain.Place;
import com.capstone.all4seoul.place.repository.PlaceRepository;
import com.capstone.all4seoul.review.domain.Review;
import com.capstone.all4seoul.review.dto.request.CreateReviewRequestForEvent;
import com.capstone.all4seoul.review.dto.request.CreateReviewRequestForPlace;
import com.capstone.all4seoul.review.dto.request.UpdateReviewRequest;
import com.capstone.all4seoul.review.dto.response.ReviewResponse;
import com.capstone.all4seoul.review.repository.ReviewRepository;
import com.capstone.all4seoul.user.domain.User;
import com.capstone.all4seoul.user.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final PlaceRepository placeRepository;
    private final EventRepository eventRepository;

    @Transactional
    public Long createReviewForPlace(Long placeId, CreateReviewRequestForPlace request) {
        User user = userRepository.findById(request.getId())
                .orElseThrow(() -> new EntityNotFoundException("사용자를 찾을 수 없습니다."));
        Place place = placeRepository.findById(placeId)
                .orElseThrow(() -> new EntityNotFoundException("장소를 찾을 수 없습니다."));

        Review review = Review.createReviewForPlace(user, place, request.getContent(), request.getStarRating());
        Review savedReview = reviewRepository.save(review);

        return savedReview.getId();
    }

    @Transactional
    public Long createReviewForEvent(Long eventId, CreateReviewRequestForEvent request) {
        User user = userRepository.findById(request.getId())
                .orElseThrow(() -> new EntityNotFoundException("사용자를 찾을 수 없습니다."));
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new EntityNotFoundException("이벤트를 찾을 수 없습니다."));

        Review review = Review.createReviewForEvent(user, event, request.getContent(), request.getStarRating());
        Review savedReview = reviewRepository.save(review);

        return savedReview.getId();
    }

    public Review findById(Long reviewId) {
        return reviewRepository.findById(reviewId)
                .orElseThrow(() -> new EntityNotFoundException("리뷰를 찾을 수 없습니다."));
    }

    public List<ReviewResponse> findAll() {
        return reviewRepository.findAll()
                .stream()
                .map(ReviewResponse::of)
                .toList();
    }

    public List<ReviewResponse> findReviewsByPlace(Long placeId) {
        return reviewRepository.findByPlaceId(placeId)
                .stream()
                .map(ReviewResponse::of)
                .toList();
    }

    public List<ReviewResponse> findReviewsByEvent(Long eventId) {
        return reviewRepository.findByEventId(eventId)
                .stream()
                .map(ReviewResponse::of)
                .toList();
    }

    @Transactional
    public void updateReview(Long reviewId, UpdateReviewRequest request) {
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new EntityNotFoundException("리뷰를 찾을 수 없습니다."));

        review.updateContent(request.getContent());
        review.updateStarRating(request.getStarRating());
    }

    @Transactional
    public void deleteReview(Review review) {
        reviewRepository.delete(review);
    }

}
