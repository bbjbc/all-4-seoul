package com.capstone.all4seoul.review.controller;

import com.capstone.all4seoul.review.domain.Review;
import com.capstone.all4seoul.review.dto.request.CreateReviewRequestForPlace;
import com.capstone.all4seoul.review.dto.request.UpdateReviewRequest;
import com.capstone.all4seoul.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;

    //리뷰등록
    @PostMapping("/reviews")
    public ResponseEntity<Object> create(@RequestBody CreateReviewRequestForPlace request) {

        reviewService.createReviewForPlace(request);

        return ResponseEntity.noContent().build();
    }

    //리뷰 리스트 조회
    @GetMapping("/reviews")
    public List<Review> findAll() {
        return reviewService.findAll();
    }

    //리뷰 수정
    @PatchMapping("/reviews/{reviewId}")
    public ResponseEntity<Object> updateUser(@PathVariable Long userId, @RequestBody UpdateReviewRequest request) {

        reviewService.updateReview(userId, request);

        return ResponseEntity.noContent().build();
    }

    //리뷰 삭제
    @DeleteMapping("/reviews/{reviewId}")
    public ResponseEntity<Object> deleteReview(@PathVariable Long reviewId) {

        reviewService.deleteReview(reviewService.findById(reviewId));

        return ResponseEntity.noContent().build();
    }
}
