package com.capstone.all4seoul.review.controller;

import com.capstone.all4seoul.review.dto.request.CreateReviewRequestForEvent;
import com.capstone.all4seoul.review.dto.request.CreateReviewRequestForPlace;
import com.capstone.all4seoul.review.dto.request.UpdateReviewRequest;
import com.capstone.all4seoul.review.dto.response.ReviewResponse;
import com.capstone.all4seoul.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;

    /**
     * 장소 리뷰 등록
     */
    @PostMapping("/places/{placeId}/reviews")
    public ResponseEntity<Object> createReviewForPlace(@PathVariable Long placeId, @RequestBody CreateReviewRequestForPlace request) {
        Long reviewId = reviewService.createReviewForPlace(placeId, request);

        return ResponseEntity.created(URI.create("/places/" + placeId + "/reviews/" + reviewId)).build();
    }

    /**
     * 이벤트 리뷰 등록
     */
    @PostMapping("/events/{eventId}/reviews")
    public ResponseEntity<Object> createReviewForEvent(@PathVariable Long eventId, @RequestBody CreateReviewRequestForEvent request) {
        Long reviewId = reviewService.createReviewForEvent(eventId, request);

        return ResponseEntity.created(URI.create("/events/" + eventId + "/reviews/" + reviewId)).build();
    }

    /**
     * 장소에 따른 리뷰 목록 조회
     */
    @GetMapping("/places/{placeId}/reviews")
    public List<ReviewResponse> listReviewsByPlace(@PathVariable Long placeId) {
        return reviewService.findReviewsByPlace(placeId);
    }

    /**
     * 이벤트에 따른 리뷰 목록 조회
     */
    @GetMapping("/events/{eventId}/reviews")
    public List<ReviewResponse> listReviewsByEvent(@PathVariable Long eventId) {
        return reviewService.findReviewsByEvent(eventId);
    }

    /**
     * 라뷰 전체 조회
     */
    @GetMapping("/reviews")
    public List<ReviewResponse> findAll() {
        return reviewService.findAll();
    }

    /**
     * 리뷰 수정
     */
    @PatchMapping("/reviews/{reviewId}")
    public ResponseEntity<Object> updateReview(@PathVariable Long userId, @RequestBody UpdateReviewRequest request) {
        reviewService.updateReview(userId, request);

        return ResponseEntity.noContent().build();
    }

    /**
     * 리뷰 삭제
     */
    @DeleteMapping("/reviews/{reviewId}")
    public ResponseEntity<Object> deleteReview(@PathVariable Long reviewId) {
        reviewService.deleteReview(reviewService.findById(reviewId));

        return ResponseEntity.noContent().build();
    }
}
