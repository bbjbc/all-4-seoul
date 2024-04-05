package com.capstone.all4seoul.review.service;

import com.capstone.all4seoul.review.domain.Review;
import com.capstone.all4seoul.review.dto.request.CreateReviewRequestForPlace;
import com.capstone.all4seoul.review.dto.request.UpdateReviewRequest;
import com.capstone.all4seoul.review.repository.ReviewRepository;
import com.capstone.all4seoul.user.domain.User;
import com.capstone.all4seoul.user.repository.UserRepository;
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

    //장소기반
    public Long createReviewForPlace(CreateReviewRequestForPlace request) {
        User user = userRepository.findById(request.getId()).get();
        Review review = Review.create(user, request.getContent(), request.getStarRating());
        reviewRepository.save(review);

        return review.getId();
    }

    //리뷰 단건 조회
    public Review findById(Long reviewId) {
        return reviewRepository.findById(reviewId).get();
    }

    //리뷰 리스트 조회
    public List<Review> findAll() {
        return reviewRepository.findAll();
    }

    //리뷰 업데이트
    @Transactional
    public void updateReview(Long reviewId, UpdateReviewRequest request) {
        Review review = reviewRepository.findById(reviewId).get();
        review.setContent(request.getContent());
        review.setStarRating(request.getStarRating());

    }

    //리뷰 삭제
    public void deleteReview(Review review) {
        reviewRepository.delete(review);
    }

}
